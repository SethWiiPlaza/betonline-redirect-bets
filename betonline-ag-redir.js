// Create a new function called redirectToPendingBets()
// js by Seth@WiiPlaza
function redirectToPendingBets() {
  // Get the current URL
  var currentUrl = window.location.href;
  // If the current URL is equal to 'https://www.betonline.ag/my-account/', then redirect to 'https://www.betonline.ag/my-account/pending-bets'
  if (currentUrl === 'https://www.betonline.ag/my-account/') {
    window.location.href = 'https://www.betonline.ag/my-account/pending-bets';
  }
}
// Set a timer to call the redirectToPendingBets() function every 190 seconds
setInterval(redirectToPendingBets, 190000);