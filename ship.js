function ship(healthPoints, speed){
    return{
        healthPoints,
        speed,
        firebullet: function(){
            return ship(1,1);
        }
    }
}

function Ship(healthPoints, speed){
    this.healthPoints = healthPoints;
    this.speed = speed;
    this.firebullet = function(){
        return Ship(1,1);
    }
}

class Ship{
    constructor(healthPoints, speed){
        this.healthPoints = healthPoints;
        this.speed = speed;

    }
    firebullet(){
        return Ship(1,1);
    }
}

