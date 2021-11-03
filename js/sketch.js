const WIDTH = 400;
const HEIGHT = 400;

let objetivo = {
    x:getRandomNumber(WIDTH),
    y:getRandomNumber(HEIGHT)
};

//console.log(objetivo);

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click',  function(e) {
    clicks++;

    let distance = getDistance(e, objetivo);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 20){
        alert(`Ahuevo encontraste al MikePoul en ${clicks} clicks!`);
        location.reload();
    }
})