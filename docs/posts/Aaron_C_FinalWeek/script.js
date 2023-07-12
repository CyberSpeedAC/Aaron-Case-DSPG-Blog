window.addEventListener('scroll', function() {
  
  var scrollHeight = window.scrollY;

  // Define the scroll height at which you want to change the background
  var targetScrollHeight = 20;

  if (scrollHeight >= targetScrollHeight) {
    // Change the background to an image
    document.body.style.backgroundImage = "url('images/Spider.jpg')";
  } else {
    // Revert the background to its original state
    document.body.style.background = 'none';
  }
});

window.addEventListener('scroll', function() {
  var scrollHeight = window.scrollY;

  // Output the scroll height to the console
  console.log('Scroll Height:', scrollHeight);
});