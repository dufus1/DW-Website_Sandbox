$(window).on("resize", function () {
    customFooterTabScript();
});
jQuery(document).ready(function () {
    customFooterTabScript();
});
function customFooterTabScript() {
    if ($(window).width() <= 1024) {
        $(".sidebar_mobile_wrapper").click(function () {
            $(this).toggleClass('is-active');
            $(this).siblings('.sidebar_content').toggleClass('is-active');
            $('body').addClass('open_Sidebar');
        });

		$('.overlay_background').on('click', function(event) {
			event.preventDefault();
			if ($('.sidebar_content').hasClass('is-active')) {
				$('.sidebar_content').removeClass('is-active');
				$('body').removeClass('open_Sidebar');
			}
		});
    }
}

/* --------------------------------------------------------------------------
   PDP: pull the product tabs up flush under the photo.

   The product row is as tall as its tallest column. When the buy column (tile +
   badges) is the taller one — which happens on products with a Frequently
   Bought Together block, or whenever the Convermax fitment widget fails to
   render and its 224px CLS placeholder applies — the tab section starts below
   it, leaving a gap under the photo. That gap is per-product and per-viewport,
   so it cannot be CSS.

   Pairs with rules in custom.css: the tab panel is capped to the photo's width
   and reserves the tile+badge column with margin-right, and .product-tab-main's
   background is transparent, or the pulled-up section would overlap and paint
   over the badge row.

   FAIL SAFE — read before changing anything here. The pull-up is a negative
   margin derived from measured heights, so it is only correct while those
   measurements are current. If the photo ends up taller than the space that was
   reserved when the measurement last ran, the image is painted straight over
   the tab bar. Demonstrated 2026-08-06: growing the photo produced a 69px
   overlap that persisted for as long as nothing re-triggered apply().

   So the offset is applied ONLY while a ResizeObserver is actually live (see
   `canCorrect`). The previous version applied it unconditionally and merely
   skipped the observer when it was unavailable — meaning the browsers least
   able to keep the offset current were the ones left holding a stale one.

   With no observer the section keeps its natural position: a gap under the
   photo. That is cosmetic. An overlap is not. Degrade to the safe layout.

   Desktop only; below 1024px everything is cleared and the columns stack.
   -------------------------------------------------------------------------- */
(function () {
  /* Space between the end of the product row and the next section's divider.
     Measured in screen pixels: the margin goes on .shopify-section, which sits
     OUTSIDE the 0.9 zoom applied to .product-main-top, so 1px here is 1px on
     screen. Values written in custom.css are inside the zoom and render at 0.9x. */
  var DIVIDER_GAP = 30;

  var canCorrect = false;   /* an observer is live, so a measurement can be trusted */
  var scheduled = false;

  function parts() {
    var tab = document.querySelector('.product-tab-main');
    return {
      section: tab ? tab.closest('.shopify-section') : null,
      panelBox: document.querySelector('.product-tab-content-main'),
      row: document.querySelector('.product-main-top'),
      media: document.querySelector('.product-main-top .product__media-wrapper'),
      badges: document.querySelector('.product-main-top .custom-badges-wrapper.desktop-only')
    };
  }

  /* Reserve the tallest panel's height so the section cannot change size when a
     customer switches tabs. Without this the offsets below are measured against a
     moving target: opening a short tab shrinks the section and the following one
     rides up over the badges. Panels are measured on a hidden clone so the live
     layout is never disturbed. */
  function reserveTallestPanel(p) {
    if (!p.panelBox) return;
    p.panelBox.style.minHeight = '';
    var tallest = 0;
    var panels = p.panelBox.querySelectorAll('.tab-content');
    for (var i = 0; i < panels.length; i++) {
      var inner = panels[i].querySelector('.tab-item-content');
      if (!inner) continue;
      var clone = inner.cloneNode(true);
      clone.style.cssText = 'position:absolute;visibility:hidden;height:auto;left:-99999px;top:0;width:' +
        panels[i].getBoundingClientRect().width + 'px';
      panels[i].appendChild(clone);
      tallest = Math.max(tallest, clone.getBoundingClientRect().height);
      clone.parentNode.removeChild(clone);
    }
    if (tallest > 0) p.panelBox.style.minHeight = Math.ceil(tallest) + 'px';
  }

  function apply() {
    var p = parts();
    if (!p.section || !p.row || !p.media) return;

    if (window.innerWidth < 1024) {
      p.section.style.marginTop = '';
      p.section.style.marginBottom = '';
      if (p.panelBox) p.panelBox.style.minHeight = '';
      return;
    }

    reserveTallestPanel(p);

    p.section.style.marginTop = '';
    p.section.style.marginBottom = '';

    /* No observer means no way to know a measurement is still valid a moment
       from now. Leave the section where the browser put it. */
    if (!canCorrect) return;

    var gap = p.row.getBoundingClientRect().height - p.media.getBoundingClientRect().height;
    if (gap > 1) p.section.style.marginTop = '-' + Math.round(gap) + 'px';

    /* Place the next section's divider DIVIDER_GAP below whichever column ends
       lower — the badges or the tab content.

       A negative top margin pulls everything below the section up with it, so
       without this the next section covers the bottom of the badge row. Note the
       gap cannot be held relative to the badges alone: when the tab column runs
       past them, doing so would put the divider through the tab panel. So the
       badges get exactly DIVIDER_GAP when they are the lowest thing, and more
       when the tabs extend beyond them. */
    if (p.badges) {
      var badgesBottom = p.badges.getBoundingClientRect().bottom;
      var sectionBottom = p.section.getBoundingClientRect().bottom;
      var lowest = Math.max(badgesBottom, sectionBottom);
      p.section.style.marginBottom = Math.round(lowest + DIVIDER_GAP - sectionBottom) + 'px';
    }
  }

  /* Batched to one layout pass per frame: a burst of observer callbacks collapses
     into a single apply(), which also keeps "ResizeObserver loop completed with
     undelivered notifications" out of the console. */
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; apply(); });
  }

  /* Everything whose size can move the photo's bottom edge. The previous version
     watched only the row and the media wrapper — neither of which necessarily
     changes when the gallery frame or an image inside it resizes, which is
     precisely the case that leaves the photo sitting on the tab bar. */
  function watchTargets(ro, p) {
    var seen = [p.row, p.media];
    var frame = document.querySelector('.product-gallery .product-gallery-view');
    if (frame) seen.push(frame);
    var imgs = document.querySelectorAll('.product-gallery .product-gallery-view img');
    for (var i = 0; i < imgs.length; i++) seen.push(imgs[i]);
    for (var j = 0; j < seen.length; j++) { if (seen[j]) ro.observe(seen[j]); }
  }

  /* A late-decoding image changes the photo's height after apply() has run.
     Images already complete fire nothing, so they are skipped. */
  function watchImages() {
    var imgs = document.querySelectorAll('.product-gallery img');
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].complete) continue;
      imgs[i].addEventListener('load', schedule);
      imgs[i].addEventListener('error', schedule);
    }
  }

  function init() {
    var p = parts();
    if (!p.section) return;

    if (window.ResizeObserver && p.row && p.media) {
      canCorrect = true;
      var ro = new ResizeObserver(schedule);
      watchTargets(ro, p);
      /* Variant switches can replace the gallery images, so re-observe on load. */
      window.addEventListener('load', function () { watchTargets(ro, parts()); });
    }

    apply();
    watchImages();

    window.addEventListener('resize', schedule);
    window.addEventListener('load', function () { schedule(); watchImages(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
