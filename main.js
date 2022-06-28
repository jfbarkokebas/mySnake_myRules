window.onload = function() {

    var stage = document.getElementById("stage")
    var ctx = stage.getContext("2d")
    document.addEventListener("keydown", keypush)

        setInterval(game, 100)

         const vel = 1 // qtde de casas que a cobra vai andar a cada setInterval
         var vx = vy = 0
         var px = 10 //head Position
         var py = 15
         var lenghtPiece = 20
         var qtdePieces = 20
         var appleX = 15 //posição da maçã
         var appleY = 15

         var trail = [] //rastro da cobra
         tail = 5

         function game() {

            px += vx
            py += vy

            //movendo a cobra através das paredes
            if(px < 0){
            px = qtdePieces - 1
            }
            if(px > qtdePieces -1){
            px = 0
            }
            if(py < 0){
            py = qtdePieces - 1
            }
            if(py > qtdePieces -1){
            py = 0
            }

            //colorindo os elementos
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, stage.width, stage.height)

            ctx.fillStyle = "#800000"
            ctx.fillRect(appleX*lenghtPiece, appleY*lenghtPiece,
            lenghtPiece, lenghtPiece)

            ctx.fillStyle = "#C0C0C0"
            for(i=0; i<trail.length; i++){
                ctx.fillRect(trail[i].x * lenghtPiece,
                trail[i].y * lenghtPiece,
                lenghtPiece, lenghtPiece)

                if(trail[i].x == px && trail[i].y == py){
                    vx=vy=0
                    tail =5
                }
            }

            
            //push() -->coloca o elemnto no fim do array
            //e shift() retira o primeiro elemento
            trail.push({x:px,y:py})
            while(trail.length >tail){
                trail.shift()
            }

            //comendo a maçã e reposicionando ela
            if(appleX==px && appleY==py){
                tail++
                //snakeLength ++
                appleX = Math.floor(Math.random() * qtdePieces)
                appleY = Math.floor(Math.random() * qtdePieces)
            }
        }

        function keypush(event) {

          

          switch(event.keyCode){

            case 13:
              vx = 0
              vy = vel
              break

            case 37: //esquerda                    
              if(vx != vel && vy != 0){
                vx = -vel
                vy = 0
              }
              
              break

              case 38: //cima
              // if(!movingToDown){
                if(vx != 0 && vy != vel){
                  vx = 0
                  vy = -vel
                }
              
              break

              case 39: //direita                
                if(vx != -vel && vy != 0){
                  vx = vel
                  vy = 0
                }
              
              break

              case 40: //baixo
              // if(!movingToUp){
                if(vx != 0 && vy != -vel){
                  vx = 0
                  vy = vel
                }

              break

              default:
              break

          }

        }

  }