alert('Ready!');

var layers = document.getElementById("layers");
var generateButton = document.getElementById("generate");

generateButton.onclick = generateLayers;

function generateLayers()
{  
    layers.innerText = 'Layers: Lol' + Math.floor(Math.random() * 11).toString();
}
