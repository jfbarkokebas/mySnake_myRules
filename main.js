window.onload = function() {

    var stage = document.getElementById("stage")
    var ctx = stage.getContext("2d")
    document.addEventListener("keydown", keypush)

    var apples = document.getElementById("count_apple")
    console.log(apples)  

    
    

        setInterval(game, 100)

         const vel = 1 // qtde de casas que a cobra vai andar a cada setInterval
         var vx = vy = 0
         var px = 10 //head Position
         var py = 15
         var lenghtPiece = 20
         var qtdePieces = 20
         var appleX = 15 //posição da maçã
         var appleY = 15
         var shit_x = 10
         var shit_y = 10
         var poison_x = 0
         var poison_y = 0
         

         var trail = [] //rastro da cobra
         tail = 5


         function endGame(){
            if(trail[i].x == px && trail[i].y == py){
              vx=vy=0
              tail =5
            }

           
            
         }

         function crossingTheWall(){
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

         }

         function eatingApples(){
          if(appleX==px && appleY==py){
            tail++
            apples.textContent = trail.length - 4
            appleX = Math.floor(Math.random() * qtdePieces)
            appleY = Math.floor(Math.random() * qtdePieces)
        }
         }

          function setingPoison(){
            if (trail.length > 7){
              ctx.fillStyle = "#00FF00"
              ctx.fillRect(
                poison_x = shit_x * lenghtPiece,
                poison_y = shit_y * lenghtPiece,
                lenghtPiece, 
                lenghtPiece
            )            
          }
         }

         function game() {

            px += vx
            py += vy

            //movendo a cobra através das paredes

            crossingTheWall()
            

            //colorindo os elementos
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, stage.width, stage.height)

            ctx.fillStyle = "#800000"
            ctx.fillRect(appleX*lenghtPiece, appleY*lenghtPiece,
            lenghtPiece, lenghtPiece)

            ctx.fillStyle = "#C0C0C0"
            for(i=0; i<trail.length; i++){
                ctx.fillRect(
                  trail[i].x * lenghtPiece,
                  trail[i].y * lenghtPiece,
                  lenghtPiece, 
                  lenghtPiece
                )

                endGame()
                
               
                

            
            }

           setingPoison()


            
            //push() -->coloca o elemnto no fim do array
            //e shift() retira o primeiro elemento
            trail.push({x:px,y:py})
            while(trail.length >tail){
                trail.shift()
            }

            //comendo a maçã e reposicionando ela
            eatingApples()
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