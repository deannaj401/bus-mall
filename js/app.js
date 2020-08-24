'use strict';

//create the "image"
//using a constructor

//global array
var imgArray = [];
var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');
var resultTable = document.getElementById('resultTable');
var clickyClick = 0;
var maxRounds = 25;


function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;

  imgArray.push(this);


}

//lets create our "images"


new Picture('bag', './img/bag.jpg');
new Picture('banana', './img/banana.jpg');
new Picture('bathroom', './img/bathroom.jpg');
new Picture('boots', './img/boots.jpg');
new Picture('breakfast', './img/breakfast.jpg');
new Picture('bubblegum', './img/bubblegum.jpg');
new Picture('chair', './img/chair.jpg');
new Picture('cthulhu', './img/cthulhu.jpg');
new Picture('dog-duck', './img/dog-duck.jpg');
new Picture('dragon', './img/dragon.jpg');
new Picture('pen', './img/pen.jpg');
new Picture('pet-sweep', './img/pet-sweep.jpg');
new Picture('scissors', './img/scissors.jpg');
new Picture('shark', './img/shark.jpg');
new Picture('sweep', './img/sweep.png');
new Picture('tauntaun', './img/tauntaun.jpg');
new Picture('unicorn', './img/unicorn.jpg');
new Picture('usb', './img/usb.gif');
new Picture('water-can', './img/water-can.jpg');
new Picture('wine-glass', './img/wine-glass.jpg');




function renderImages() {
  //DOM manipulation 1. fill element with content

  var imgOne = imgArray[randomNumber(imgArray.length)];
  var imgTwo = imgArray[randomNumber(imgArray.length)];
  var imgThree = imgArray[randomNumber(imgArray.length)];


  while (imgOne === imgTwo || imgOne === imgThree || imgTwo === imgThree) {
    imgOne = imgArray[randomNumber(imgArray.length)];
    imgTwo = imgArray[randomNumber(imgArray.length)];
    imgThree = imgArray[randomNumber(imgArray.length)];

  }


  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;
  imgElThree.src = imgThree.src;

  imgElOne.alt = imgOne.name;
  imgElTwo.alt = imgTwo.name;
  imgElThree.alt = imgThree.name;



  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;



}

function randomNumber(max) {
  return Math.floor(Math.random() * max);


}

function handleClick(e) {

  if (clickyClick < maxRounds) {
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i].name === e.target.alt) {
        console.log(imgArray[i]);
        imgArray[i].clicked++;
        clickyClick++;
      }
    }
    renderImages();
  }
  if (clickyClick === maxRounds ) {
    alert('Thank you for voting. Have a lovely Day');
    generateResults();
    console.log(e.target.clicked);
  }
}



renderImages();






function generateResults() {
  var trHeader = document.createElement('tr');
  var thName = document.createElement('th');
  thName.textContent = 'Name';
  trHeader.appendChild(thName);

  var thViews = document.createElement('th');
  thViews.textContent = 'Views';
  trHeader.appendChild(thViews);

  var thClicks = document.createElement('th');
  thClicks.textContent = 'Clicked';
  trHeader.appendChild(thClicks);

  resultTable.appendChild(trHeader);


  for (var i = 0; i < imgArray.length; i++) {

    var trProduct = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.textContent = `${imgArray[i].name}`;
    trProduct.appendChild(tdName);

    var tdViews = document.createElement('td');
    tdViews.textContent = `${imgArray[i].viewed}`;
    trProduct.appendChild(tdViews);

    var tdClicked = document.createElement('td');
    tdClicked.textContent = `${imgArray[i].clicked}`;
    trProduct.appendChild(tdClicked);

    resultTable.appendChild(trProduct);



  }

}





imgElOne.addEventListener('click', handleClick);
imgElTwo.addEventListener('click', handleClick);
imgElThree.addEventListener('click', handleClick);
resultTable.addEventListener('click', handleClick);
