
function started () {
  var arrayOfColors = ['red', 'blue', 'green', 'yellow', 'grey', 'black', 'purple', 'orange', 'cyan', 'darkGreen', 'pink', 'white'];
  var color;
  var paintBox = document.getElementById('paint-box');
  var paintColors = document.getElementById('paint-colors');

  for (let i = 0; i<1012; i++) {
    var newDiv = document.createElement("div");
    paintBox.appendChild(newDiv);
    newDiv.classList.add('pixels');
  }
    for (let i = 0; i < arrayOfColors.length; i++) {
      var newDiv = document.createElement("div");
      paintColors.appendChild(newDiv);
      newDiv.classList.add('paletteOfColors');
      newDiv.style.backgroundColor = arrayOfColors[i];

      if (i === arrayOfColors.length - 1) {
        let indicatorColor = document.createElement("div");
        indicatorColor.classList.add('thisColor');
        indicatorColor.style.backgroundColor = 'white';
        paintColors.appendChild(indicatorColor);
      }
    }
    // let textColor = document.createElement('div');
    // div.classList.add('text-color');

    paintBox.addEventListener('mousedown', function (event){

      let paint = event.target;
      paint.style.backgroundColor = color;

    })
    paintColors.addEventListener('mousedown', function (event) {
      color = event.target.style.backgroundColor;
      document.getElementsByClassName('thisColor')[0].style.backgroundColor = color;


    })
}
  document.addEventListener("DOMContentLoaded", function(event) {
  started();
});
