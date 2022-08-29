function bullet(speed, damage)
return {
    speed,
    damage
}

// function Bullet(speed, damage) {
//     this.speed = speed;
//     this.damage = damage;
// }

// class Bullet{
//     constructor(speed, damage){
//         this.speed = speed;
//         this.damage = damage;
//     }
// }

//Ship

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


//BULLET
function alien(healthPoints, coordinates, speeds) {
    return {
      healthPoints,
      coordinates,
      speeds,
      move: function(){
          this.coordinates.x = this.coordinates.x += this.speeds.x;
          this.coordinates.y = this.coordinates.y += this.speeds.y;
      },
      onHit: function(bullet){
        this.healthPoints -= bullet.damage
      }
      }
  }
  
  const alien1 = alien(1, {x:1, y:2}, {xSpeed:4, ySpeed:3});
  console.log(alien1);

  function Alien(healthPoints, coordinates, speeds){
    this.healthPoints = healthPoints;
    this.coordinates = coordinates;
    this.speeds = speeds;
    this.move = function(){
        this.coordinates.x = this.coordinates.x += this.speeds.x;
        this.coordinates.y = this.coordinates.y += this.speeds.y;
    };
    this.onHit = function(bullet){
      this.healthPoints -= bullet.damage
    }    
  }
  
  class Alien{
    constructor(healthPoints, coordinates, speeds){
        this.healthPoints = healthPoints;
        this.coordinates = coordinates;
        this.speeds = speeds;
    };
    move(){
        this.coordinates.x = this.coordinates.x += this.speeds.x;
        this.coordinates.y = this.coordinates.y += this.speeds.y;
    };
    onHit(bullet){
      this.healthPoints -= bullet.damage
    }    

  }


  //BARRIER
  function barrier(maxHP, currentHP, size, coordinates){
    return{
    maxHP,
    currentHP,
    size,
    coordinates,
    repair: function(){
        if(currentHP === maxHP){
            size ++
        }else{
            currentHP ++
        }
    },
    break: function(){
        if (currentHP === 0){
            size --
        }else{
            currentHP --
        }
    }
  }
}

function Barrier(maxHP, currentHP, size, coordinates){
    this.maxHP = maxHP;
    this.currentHP = currentHP;
    this.size = size;
    this.coordinates = coordinates;
    this.repair = function(){
        if(currentHP === maxHP){
            size ++
        }else{
            currentHP ++
        }
    };
    this.break = function(){
        if (currentHP === 0){
            size --
        }else{
            currentHP --
        }
    }
}

class Barrier{
    constructor(maxHP, currentHP, size, coordinates){
        this.maxHP = maxHP;
        this.currentHP = currentHP;
        this.size = size;
        this.coordinates = coordinates;
    }

    repair(){
        if(currentHP === maxHP){
            size ++
        }else{
            currentHP ++
        }
    };
    break(){
        if (currentHP === 0){
            size --
        }else{
            currentHP --
        }
    }
}
