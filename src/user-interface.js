//IIFE
(function userInterfaceModule() {

  window.jobApp = window.jobApp || {};

  document.querySelector('#full-name')
    .addEventListener('blur', function valueCheck(eventObj) {
      //console.log(eventObj.target.value.length);
      if (eventObj.target.value.length) {

      } else {
        eventObj.target.parentNode.parentNode.classList.add('has-error');

      }

   });
   document.querySelector('#exp')
    .addEventListener('change', function numberSlide(eventObj) {
       eventObj.target.parentNode.childNodes[3].innerText = eventObj.target.value + ' years';
      console.log(eventObj.target.value);
   });
    document.querySelector('#languages-js')
      .addEventListener('click', function checkedBoxes(eventObj) {

    });

})();
