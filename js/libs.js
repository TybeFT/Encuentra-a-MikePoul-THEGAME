let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) =>{
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if(distance < 30){
        return "1: Muy cercaAaAaAA";
    }else if (distance < 40){
        return "2: Cerca pana";
    }else if(distance < 60){
        return "3: Caliente we";
    }else if(distance < 100){
        return "4: Tibiesito";
    }else if(distance < 180){
        return "5: Como tu abuelita :(";
    }else if(distance < 360){
        return "6: Realmente frio nmms";
    }else  {
        return "7: Te fuiste hasta chingar a su madre";
    }
}