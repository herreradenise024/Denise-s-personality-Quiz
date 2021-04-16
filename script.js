//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var clairoScore = 0;
var salesScore = 0;
var dayglowScore = 0;
var omarApolloScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", clairo);
q1a2.addEventListener("click", sales);
q1a3.addEventListener("click", dayglow);
q1a4.addEventListener("click", omarApollo);

q2a1.addEventListener("click", sales);
q2a2.addEventListener("click", omarApollo);
q2a3.addEventListener("click", dayglow);
q2a4.addEventListener("click", clairo);

q3a1.addEventListener("click", sales);
q3a2.addEventListener("click", clairo);
q3a3.addEventListener("click", omarApollo);
q3a4.addEventListener("click", dayglow);

q4a1.addEventListener("click", sales);
q4a2.addEventListener("click", dayglow);
q4a3.addEventListener("click", omarApollo);
q4a4.addEventListener("click", clairo);

q5a1.addEventListener("click", clairo);
q5a2.addEventListener("click", dayglow);
q5a3.addEventListener("click", omarApollo);
q5a4.addEventListener("click", sales);

q6a1.addEventListener("click", clairo);
q6a2.addEventListener("click", sales);
q6a3.addEventListener("click", dayglow);
q6a4.addEventListener("click", omarApollo);

//#TODO: Define quiz functions here
function clairo() {
  clairoScore += 1;
  questionCount += 1;
  //alert("One Point to Clairo!");

  if (questionCount >= 6) {
    updateResult();
  }
}

function sales() {
  salesScore += 1;
  questionCount += 1;
  //alert("One Point to Sales!");

  if (questionCount >= 6) {
    updateResult();
  }
}

function dayglow() {
  dayglowScore += 1;
  questionCount += 1;
  //alert("One Point to Dayglow");

  if (questionCount >= 6) {
    updateResult();
  }
}

function omarApollo() {
  omarApolloScore += 1;
  questionCount += 1;
  //alert("One Point to Omar Apollo");

  if (questionCount >= 6) {
    updateResult();
  }
}

function updateResult() {
  alert("updating the result");
  if (clairoScore >= 2) {
    //Case #1: The user gets a clairo of 2 or higher, then they are a Clairo!
    result.innerHTML = "clairo!";
     var x = document.createElement("IMG");
     x.setAttribute("src", "https://cdn.glitch.com/9c1c9c6d-9f0e-4cb3-880c-24f412ddda95%2Fclairo.jpg?v=1594321213608");
     x.setAttribute("width", "300");
     x.setAttribute("height", "400");
     x.setAttribute("alt", "clairo");
     x.setAttribute("align-items", "center");
     document.body.appendChild(x);
    
  } else if (salesScore >= 2) {
    //Case #2: The user gets a sales of 2 or higher, then they are a Sales!
    result.innerHTML = "sales!";
    var x = document.createElement("IMG");
     x.setAttribute("src", "https://cdn.glitch.com/9c1c9c6d-9f0e-4cb3-880c-24f412ddda95%2Fsales.png?v=1594323384612");
     x.setAttribute("width", "300");
     x.setAttribute("height", "200");
     x.setAttribute("alt", "sales");
     x.setAttribute("align", "center");
     document.body.appendChild(x);
  } else if (dayglowScore >= 2) {
    //Case #3: The user gets a dayglow of 2 or higher, then they are a Dayglow!
    result.innerHTML = "dayglow!";
    var x = document.createElement("IMG");
     x.setAttribute("src", "https://cdn.glitch.com/9c1c9c6d-9f0e-4cb3-880c-24f412ddda95%2Fdayglow.jfif?v=1594323485820");
     x.setAttribute("width", "300");
     x.setAttribute("height", "300");
     x.setAttribute("alt", "dayglow");
     x.setAttribute("align", "center");
     document.body.appendChild(x);
  } else if (omarApolloScore >= 2) {
    //Case #4: The user gets a omar apollo of 2 or higher, then they are a Omar Apollo!
    result.innerHTML = "Omar Apollo!";
    
    var x = document.createElement("IMG");
     x.setAttribute("src", "https://cdn.glitch.com/9c1c9c6d-9f0e-4cb3-880c-24f412ddda95%2Fomarapollo2.jpg?v=1594323516714");
     x.setAttribute("width", "300");
     x.setAttribute("height", "300");
     x.setAttribute("alt", "omarApollo");
     x.setAttribute("align", "center");
     document.body.appendChild(x);
  } else {
    result.innerHTML = "Hmm.. The Sorting Hat is confused. Try again later.";
  }
}
d