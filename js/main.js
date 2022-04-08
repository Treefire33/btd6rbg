var layers = document.getElementById("layers");
var generateButton = document.getElementById("generate");
var bloonAlikes = document.getElementById("Bloon-Alikes");
var bloonImgs = document.getElementById("center");
var usesHealthCheck = document.getElementById("checkHealth");
var maxHealth;
var hp;
var inclusive = document.getElementById("inclusive");
var children = document.getElementById("children");
var saveBloon = document.getElementById("SCB");
var loadBloon = document.getElementById("LCB");
var loader = document.getElementById("loader");
var valueText = document.getElementById("visitText");

generateButton.onclick = generateLayers;
usesHealthCheck.onclick = setUsesHealth;
saveBloon.onclick = SCBF;
var genedLayers;
var genedHealth;
var childrenBloon;
var usesHealthB = false;
var childrenAmount;

generateLayers();

function setVisitText()
{
    if(window.localStorage.visits)
    {
        window.localStorage.visits = Number(window.localStorage.visits) + 1;
        valueText.innerText = "You have visited this website: "+toString(window.localStorage.visits)+" times";
    }
    else
    {
        window.localStorage.visits = 1;
        valueText.innerText = "You have visited this website: 1 time";
    }
}

setVisitText();

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

function SCBF()
{
    var customBloon = new Object();
    customBloon.layers = genedLayers;
    customBloon.health = genedHealth;
    customBloon.usesHealth = usesHealthB;
    customBloon.childrenBloon = childrenBloon;
    customBloon.childrenAmount = childrenAmount;
    var file = 'CustomBloon.json';
    var savedFile = new Blob([JSON.stringify(customBloon)], {
        type: 'application/json'
    }); 
    saveAs(savedFile,file);
}

async function loadFile(file) 
{
    let text = await (new Response(file)).text();
    var textt = JSON.parse(text);
    console.log(textt);
    LoadBackData(textt);
}

function LoadBackData(Data)
{
    setLoadUsesHealth(Data.usesHealth);
    usesHealthCheck.checked = usesHealthB;
    if(usesHealthB === true)
    {
        genedHealth = parseInt(Data.health);
        getMoabALike();
        layers.innerText = 'Health: ' + genedHealth.toString();
    }
    else
    {
        genedLayers = parseInt(Data.layers);
        getBloonAlike(genedLayers);
        layers.innerText = 'Layers: ' + genedLayers.toString();
    }
    children.innerHTML = "Children Bloons: <br/>" + Data.childrenBloon + "<br/> (Amount: "+Data.childrenAmount+")";
    loader.value = null;
}

function generateChildren()
{
    var bloonTypes = ["Red Bloon","Blue Bloon","Green Bloon","Yellow Bloon","Pink Bloon","Black Bloon","White Bloon","Zebra Bloon","Rainbow Bloon","Ceramic Bloon","MOAB","DDT","BFB","ZOMG","BAD"];
    let randomBloon = getRandomInt(0,bloonTypes.length-1);
    childrenAmount = getRandomInt(1,4);
    children.innerHTML = "Children Bloons: <br/>" + bloonTypes[randomBloon] + "<br/> (Amount: "+childrenAmount+")";
    childrenBloon = bloonTypes[randomBloon];
}

function getBloonAlike(layersOnBloon)
{
    switch(layersOnBloon)
    {
        case 1:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Red Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Red.png"/>';
        break;
        case 2:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Blue Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Blue.png"/>';
        break;
        case 3:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Green Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Green.png"/>';
        break;
        case 4:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Yellow Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Yellow.png"/>';
        break;
        case 5:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Pink Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Pink.png"/>';
        break;
        case 6:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Black, White or Purple Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Black.png"/>';
            bloonImgs.innerHTML += '<img src="imgs/BTD6White.png"/>';
            bloonImgs.innerHTML += '<img src="imgs/Purplebloon.png"/>';
        break;
        case 7:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Zebra/Striped Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Zebra.png"/>';
        break;
        case 8:
            bloonAlikes.innerHTML = 'Bloon-Alike: <br/> Rainbow Bloon';
            bloonImgs.innerHTML = '<img src="imgs/BTD6Rainbow.png"/>';
        break;
    }
}

function getMoabALike()
{
    if(genedHealth >= 1 && genedHealth < 200)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> Ceramic Bloon';
        bloonImgs.innerHTML = '<img src="imgs/BTD6Ceramic.png"/>';
    }
    if(genedHealth >= 200 && genedHealth < 400)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> M.O.A.B';
        bloonImgs.innerHTML = '<img src="imgs/BTD6_MOAB_Artwork.png"/>';
    }
    if(genedHealth >= 400 && genedHealth < 700)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> D.D.T';
        bloonImgs.innerHTML = '<img src="imgs/BTD6_DDT_Artwork.png"/>';
    }
    if(genedHealth >= 700 && genedHealth < 4000)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> B.F.B';
        bloonImgs.innerHTML = '<img src="imgs/BTD6_BFB_Artwork.png"/>';
    }
    if(genedHealth >= 4000 && genedHealth < 20000)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> Z.O.M.G';
        bloonImgs.innerHTML = '<img src="imgs/BTD6_ZOMG_Artwork.png"/>';
    }
    if(genedHealth >= 20000)
    {
        bloonAlikes.innerHTML = 'M.O.A.B-Alike: <br/> B.A.D';
        bloonImgs.innerHTML = '<img src="imgs/BTD6_BAD_Artwork.png"/>';
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
        usesHealthB = true;
        IfHealth(true);
    }
    else
    {
        usesHealthB = false;
        IfHealth(false);
    }
}
function setLoadUsesHealth(yes)
{
    if(yes)
    {
        usesHealthB = true;
        IfHealth(true);
    }
    else
    {
        usesHealthB = false;
        IfHealth(false);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Cookies
