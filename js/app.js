const Axeso = (function () {
  const data = {
    inputDato: document.querySelectorAll('.input-dato'),
    btnLogin: document.querySelector('.container-form .container-button button')
  };

  const events = {
    onFocusInput: function (elem) {
      elem.addEventListener('focus', (e) => {
        e.target.parentNode.classList.add('focus');
      });
    },
    onBlurInput: function (elem) {
      elem.addEventListener('focusout', (e) => {
        const dato = e.target.value;
        if (dato.length == 0)
          e.target.parentNode.classList.remove('focus');

        methods.validateActiveButton();
      });
    },
    onTypeInput: function (elem) {
      elem.addEventListener('keyup', () => {
        methods.validateActiveButton();
      })
    }
  };

  const methods = {
    validateActiveButton: function () {
      let count = 0
      const cantInputs = data.inputDato.length
      data.inputDato.forEach((e) => {
        e.value != '' ? count++ : true
      })
      count == cantInputs ? data.btnLogin.classList.add('active') : data.btnLogin.classList.remove('active')
    }
  };

  const initialize = function () {
    data.inputDato.forEach((e) => {
      events.onBlurInput(e);
      events.onFocusInput(e);
      events.onTypeInput(e);
    })
  };

  return {
    init: initialize
  };
})();


document.addEventListener(
  'DOMContentLoaded',
  function () {
    Axeso.init();
  },
  false
);