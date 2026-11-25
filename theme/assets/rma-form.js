// Source: https://deatschwerks.com/pages/rma
(function () {
  const RMA_API_ENDPOINTS = [
    'https://dw-customer-service-y7oeijakxq-uc.a.run.app/api/rma/submit',
    'https://dw-customer-service-swd66eistq-uc.a.run.app/api/rma/submit'
  ];

  const form = document.getElementById('dwRmaForm');
  if (!form) return;

  const rmaNumberInput = form.querySelector('[name="rmaNumber"]');
  const statusBanner = document.getElementById('dwRmaStatusBanner');
  const submitBtn = document.getElementById('dwRmaSubmitBtn');

  function getFieldVal(name) {
    const el = form.querySelector('[name="' + name + '"]');
    return el && typeof el.value === 'string' ? el.value.trim() : '';
  }

  function setStatus(type, htmlMessage) {
    if (!statusBanner) return;
    statusBanner.className = 'dw-rma-status ' + (type === 'success' ? 'is-success' : 'is-error');
    statusBanner.innerHTML = htmlMessage;
    statusBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const customerName = getFieldVal('customerName');
    const purchaseDate = getFieldVal('purchaseDate');
    const shippingAddress = getFieldVal('shippingAddress');
    const city = getFieldVal('city');
    const state = getFieldVal('state');
    const zipCode = getFieldVal('zipCode');
    const phone = getFieldVal('phone');
    const email = getFieldVal('email');
    const vehicleYearMake = getFieldVal('vehicleYearMake');
    const vehicleModel = getFieldVal('vehicleModel');
    const partNumber = getFieldVal('partNumber');
    const engine = getFieldVal('engine');
    const briefExplanation = getFieldVal('briefExplanation');
    const reasonChecked = form.querySelector('input[name="reasonForReturn"]:checked');
    const reasonForReturn = reasonChecked ? reasonChecked.value : 'Warranty';

    const missing = [];
    if (!customerName) missing.push('Customer Name');
    if (!email) missing.push('Email Address');
    if (!phone) missing.push('Phone Number');
    if (!shippingAddress) missing.push('Shipping Address');
    if (!city) missing.push('City');
    if (!state) missing.push('State');
    if (!zipCode) missing.push('Zip Code');
    if (!briefExplanation) missing.push('Brief Explanation');

    if (missing.length > 0) {
      setStatus('error', '<strong>Please fill in the following required fields:</strong> ' + missing.join(', '));
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting RMA...';
    }

    try {
      const payload = {
        rmaNumber: getFieldVal('rmaNumber'),
        customerName,
        purchaseDate,
        partNumber,
        shippingAddress,
        city,
        state,
        zipCode,
        phone,
        email,
        vehicleYearMake,
        vehicleModel,
        engine,
        reasonForReturn,
        briefExplanation
      };

      let responseData = null;
      let lastError = null;

      for (const endpoint of RMA_API_ENDPOINTS) {
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          if (res.ok && data && data.ok) {
            responseData = data;
            break;
          } else {
            lastError = (data && data.error) || 'Server returned HTTP ' + res.status;
          }
        } catch (netErr) {
          lastError = netErr.message || String(netErr);
        }
      }

      if (!responseData) {
        throw new Error(lastError || 'Unable to reach RMA service.');
      }

      const assignedRma = responseData.rmaNumber || '';
      if (rmaNumberInput && assignedRma) {
        rmaNumberInput.value = assignedRma;
      }

      setStatus(
        'success',
        '<strong style="font-size: 18px;">RMA #' +
          assignedRma +
          ' Submitted!</strong><br>' +
          'We have emailed your completed RMA form PDF to <strong>' +
          email +
          '</strong> and <strong>customerservice@deatschwerks.com</strong>.<br>' +
          'A DeatschWerks Customer Support Specialist will contact you within 72 hours to confirm the next steps.'
      );
    } catch (err) {
      setStatus(
        'error',
        '<strong>Submission Error:</strong> ' +
          (err.message || 'Could not submit online RMA.') +
          ' Please email <a href="mailto:customerservice@deatschwerks.com">customerservice@deatschwerks.com</a> or call (405) 217-0701.'
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit & Email RMA';
      }
    }
  });
})();
