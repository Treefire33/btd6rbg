var layers = document.getElementById("layers");
var generateButton = document.getElementById("generate");
var bloonAlikes = document.getElementById("Bloon-Alikes");
var bloonImgs = document.getElementById("center");
var usesHealthCheck = document.getElementById("checkHealth");
var maxHealth;
var hp;
var inclusive = document.getElementById("inclusive");
var children = document.getElementById("children");

generateButton.onclick = generateLayers;
usesHealthCheck.onclick = setUsesHealth;
var genedLayers = getRandomInt(1,8);
var genedHealth;

function generateLayers()
{  
    genedLayers = getRandomInt(1,8);
    layers.innerText = 'Layers: ' + genedLayers.toString();
    getBloonAlike(genedLayers);
    generateChildren();
}

function generateHealth()
{
    genedHealth = getRandomInt(1,maxHealth.value);
    layers.innerText = 'Health: ' + genedHealth.toString();
    getMoabALike(genedHealth);
    generateChildren();
}

function generateChildren()
{
    var bloonTypes = ["Red","Blue","Green","Yellow","Pink","Black","White","Zebra","Rainbow","Ceramic","MOAB","DDT","BFB","ZOMG","BAD"];
    let randomBloon = getRandomInt(0,bloonTypes.length-1);
    if(randomBloon < 10)
    {
        children.innerHTML = "Children Bloons: <br/>" + bloonTypes[randomBloon] + " Bloon";
    }
    else
    {
        children.innerHTML = "Children Bloons: <br/>" + bloonTypes[randomBloon];
    }
}

function getBloonAlike(layersOnBloon)
{
    switch(layersOnBloon)
    {
        case 1:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Red Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Red.png"/>';
        break;
        case 2:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Blue Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Blue.png"/>';
        break;
        case 3:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Green Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Green.png"/>';
        break;
        case 4:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Yellow Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Yellow.png"/>';
        break;
        case 5:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Pink Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Pink.png"/>';
        break;
        case 6:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Black or White Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Black.png"/>';
            bloonImgs.innerHTML += '<img src="BTD6White.png"/>';
        break;
        case 7:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Zebra/Striped Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Zebra.png"/>';
        break;
        case 8:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Rainbow Bloon';
            bloonImgs.innerHTML = '<img src="BTD6Rainbow.png"/>';
        break;
    }
}

function getMoabALike()
{
    if(genedHealth >= 1 && genedHealth < 200)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> Ceramic Bloon';
        bloonImgs.innerHTML = '<img src="BTD6Ceramic.png"/>';
    }
    if(genedHealth >= 200 && genedHealth < 400)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> M.O.A.B';
        bloonImgs.innerHTML = '<img src="BTD6_MOAB_Artwork.png"/>';
    }
    if(genedHealth >= 400 && genedHealth < 700)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> D.D.T';
        bloonImgs.innerHTML = '<img src="BTD6_DDT_Artwork.png"/>';
    }
    if(genedHealth >= 700 && genedHealth < 4000)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> B.F.B';
        bloonImgs.innerHTML = '<img src="BTD6_BFB_Artwork.png"/>';
    }
    if(genedHealth >= 4000 && genedHealth < 20000)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> Z.O.M.G';
        bloonImgs.innerHTML = '<img src="BTD6_ZOMG_Artwork.png"/>';
    }
    if(genedHealth >= 20000)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> B.A.D';
        bloonImgs.innerHTML = '<img src="BTD6_BAD_Artwork.png"/>';
    }
}

function IfHealth(yes)
{
    if(yes)
    {
        layers.innerText = "Health:";
        bloonAlikes.innerHTML = 'M.O.A.B-Alike:';
        generateButton.onclick = generateHealth;
        inclusive.innerHTML = '<p>Set Max Health: <input type="range" min="1" max="40000" id="range"> <br><p id="hp">(Max Health:)</p></p>';
        maxHealth = document.getElementById("range");
        maxHealth.value = 200;
        hp = document.getElementById("hp");
        maxHealth.oninput = function(){hp.innerText = "(Max Health: " + maxHealth.value + ")";}
        genedHealth = getRandomInt(1,maxHealth.value);
        genedHealth = 200;
        getMoabALike();
        hp.innerText = "(Max Health: " + maxHealth.value + ")";
    }
    else
    {  
        layers.innerText = 'Layers:';
        bloonAlikes.innerHTML = 'Bloon-Alike:';
        generateButton.onclick = generateLayers;
        inclusive.innerHTML = '';
    }
}

function setUsesHealth()
{
    if(usesHealthCheck.checked)
    {
        IfHealth(true);
    }
    else
    {
        IfHealth(false);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
