    class Game {
      constructor() {
        
      }
    
      getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
    
      start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        box1 = createSprite(width / 2 - 50, height/2);
        box1.addImage("box1", red);
        
      box1.scale = 1;
  
      box2 = createSprite(width / 2 + 100, height/2);
      box2.addImage("box2", blue);
      box2.scale = 1;
  
      boxes = [box1, box2];
      
      
      
  
      }
    
 
    
      handleElements() {
        form.hide();
      }
    
      play() {
        this.handleElements();
    
        Player.getPlayersInfo();
    
        if (allPlayers !== undefined) {
    
          //index of the array
          var index = 0;
          for (var plr in allPlayers) {
            //add 1 to the index for every loop
            index = index + 1;
    
            //use data form the database to display the cars in x and y direction
            var x = allPlayers[plr].positionX;
            var y = height - allPlayers[plr].positionY;
    
            boxes[index - 1].position.x = x;
            boxes[index - 1].position.y = y;
            
        
    
            // C38  SA
            if (index === player.index) {
              stroke(10);
              fill("green");
              ellipse(x, y, 60, 60);
    
    
    
              camera.position.x = width/2;
              camera.position.y = boxes[index - 1].position.y;
            }
          }
          
          if (keyIsDown(UP_ARROW)) {
            player.positionY += 10;
            player.update();
          }
    
          drawSprites();
        }
      }
    



     
    }
    
     