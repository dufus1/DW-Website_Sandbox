class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.addEventListener('click', (evt) => {
      if (evt.target.closest('#CartDrawer-Overlay')) {
        this.close();
        return;
      }
      const addBtn = evt.target.closest('[data-addon-add]');
      if (addBtn) {
        evt.preventDefault();
        this.handleAddonAdd(addBtn);
      }
    });
    this.addEventListener('change', (evt) => {
      const select = evt.target.closest('.dw-drawer-addon__variant');
      if (!select) return;
      const card = select.closest('.dw-drawer-addon');
      if (!card) return;
      const btn = card.querySelector('[data-addon-add]');
      const priceEl = card.querySelector('[data-addon-price]');
      const selectedOption = select.options[select.selectedIndex];
      if (btn) btn.dataset.variantId = select.value;
      if (priceEl && selectedOption && selectedOption.dataset.price) {
        priceEl.textContent = selectedOption.dataset.price;
      }
    });
    this.setHeaderCartIconAccessibility();
  }

  async handleAddonAdd(button) {
    if (button.disabled || button.getAttribute('aria-disabled') === 'true') return;
    const variantId = button.dataset.variantId;
    if (!variantId) return;

    const label = button.querySelector('.dw-drawer-addon__btn-label');
    const originalText = label ? label.textContent : '+ Add';

    button.disabled = true;
    button.setAttribute('aria-disabled', 'true');
    button.classList.add('is-loading');
    if (label) label.textContent = 'Adding...';

    const errorsEl = this.querySelector('#CartDrawer-CartErrors');
    if (errorsEl) errorsEl.textContent = '';

    try {
      const formData = new FormData();
      formData.append('id', variantId);
      formData.append('quantity', '1');
      formData.append(
        'sections',
        this.getSectionsToRender()
          .map((section) => section.id)
          .join(',')
      );
      formData.append('sections_url', window.location.pathname);

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];
      config.body = formData;

      const response = await fetch(`${routes.cart_add_url}`, config);
      const parsedState = await response.json();

      if (parsedState.status) {
        if (errorsEl) {
          errorsEl.textContent = parsedState.description || parsedState.message || 'Unable to add item.';
        }
        button.disabled = false;
        button.removeAttribute('aria-disabled');
        button.classList.remove('is-loading');
        if (label) label.textContent = originalText;
        return;
      }

      if (typeof publish === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
        publish(PUB_SUB_EVENTS.cartUpdate, {
          source: 'cart-drawer-addon',
          productVariantId: variantId,
          cartData: parsedState,
        });
      }

      this.renderContents(parsedState);
    } catch (err) {
      console.error('Cart drawer add-on error:', err);
      button.disabled = false;
      button.removeAttribute('aria-disabled');
      button.classList.remove('is-loading');
      if (label) label.textContent = originalText;
    }
  }

  setHeaderCartIconAccessibility() {
    const cartLink = document.querySelector('#cart-icon-bubble');
    cartLink.setAttribute('role', 'button');
    cartLink.setAttribute('aria-haspopup', 'dialog');
    cartLink.addEventListener('click', (event) => {
      event.preventDefault();
      this.open(cartLink);
    });
    cartLink.addEventListener('keydown', (event) => {
      if (event.code.toUpperCase() === 'SPACE') {
        event.preventDefault();
        this.open(cartLink);
      }
    });
  }

  open(triggeredBy) {
    if (triggeredBy) this.setActiveElement(triggeredBy);
    const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
    // here the animation doesn't seem to always get triggered. A timeout seem to help
    setTimeout(() => {
      this.classList.add('animate', 'active');
    });

    this.addEventListener(
      'transitionend',
      () => {
        const containerToTrapFocusOn = this.classList.contains('is-empty')
          ? this.querySelector('.drawer__inner-empty')
          : document.getElementById('CartDrawer');
        const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
        trapFocus(containerToTrapFocusOn, focusElement);
      },
      { once: true }
    );

    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove('overflow-hidden');
  }

  setSummaryAccessibility(cartDrawerNote) {
    cartDrawerNote.setAttribute('role', 'button');
    cartDrawerNote.setAttribute('aria-expanded', 'false');

    if (cartDrawerNote.nextElementSibling.getAttribute('id')) {
      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
    }

    cartDrawerNote.addEventListener('click', (event) => {
      event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
    });

    cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
  }

  renderContents(parsedState) {
    this.classList.remove('is-empty');
    const drawerInner = this.querySelector('.drawer__inner');
    if (drawerInner && drawerInner.classList.contains('is-empty')) {
      drawerInner.classList.remove('is-empty');
    }
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section) => {
      const sectionElement = section.selector
        ? document.querySelector(section.selector)
        : document.getElementById(section.id);
      if (sectionElement && parsedState.sections && parsedState.sections[section.id]) {
        sectionElement.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      }
    });

    setTimeout(() => {
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        selector: '#CartDrawer',
      },
      {
        id: 'cart-icon-bubble',
      },
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);

class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: 'CartDrawer',
        section: 'cart-drawer',
        selector: '.drawer__inner',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section',
      },
    ];
  }
}

customElements.define('cart-drawer-items', CartDrawerItems);
