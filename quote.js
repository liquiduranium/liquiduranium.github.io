// taken from https://stackoverflow.com/questions/72234741/how-can-i-display-an-random-quote-from-an-javascript-array-in-html
function textOfToday() {

    var textOfTodayArray = [
        "Everything's connected",
        "I never learned to read!",
        "How many times have you refreshed the page now?"
    ];
  
    document.getElementById('randomTitle').innerHTML = textOfTodayArray[Math.floor(Math.random() * textOfTodayArray.length)];
  }
  
  textOfToday();