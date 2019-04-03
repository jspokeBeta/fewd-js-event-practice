
// Get the first button
var buttonOne = document.querySelectorAll('button')[0];
// Get the second button
var buttonTwo = document.querySelectorAll('button')[1];
//Get the third button
var buttonThree = document.querySelectorAll('button')[2];

//Listen for click events on document
document.addEventListener('click', function(event) {
  // only work if the click is on a buttonOne
  if (!event.target.classList.contains('button-xl')) return;
  //Click on buttonOne
  if (event.target === buttonOne) {
    buttonOne.classList.toggle('button-danger');
  }

}, false);
