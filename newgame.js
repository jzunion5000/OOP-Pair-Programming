// the fruit when eaten will increase pacman's size and speed
// the pacman can take fruit, size, speed, life
// when enemies consume pacman, pacman decreases 1 life
// when life reaches 0 then it will tell the user the game is over

function pacman(fruit, currentSize, currentSpeed,life) {
    return {
        life,
        fruit,
        currentSize,
        currentSpeed,
        fruitEaten: function(){
            this.currentSize = this.currentSize += this.fruit;
            this.currentSpeed = this.currentSpeed += this.fruit;
        }
    }
}

function enemies(){
    return{
        enemyEats: function(pacman){
            if(pacman.life === 0){
                return "GAME OVER"
            }else{
                pacman.life --
            }
        }
    }
}


