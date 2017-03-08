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

    let count = 0;
    Array.from(document.querySelectorAll('[name="languages"]'))
      .forEach(function addClickEvent(item) {
        item.addEventListener('change', function checkedBoxes(eventObj) {
          if (eventObj.target.checked) {
            count++;
          } else {
            count--;
          }
          eventObj.target.parentNode.parentNode.childNodes[7].innerText = count + ' languages';
          //console.log(eventObj.target.parentNode.parentNode.childNodes);
        });
      });

})();
