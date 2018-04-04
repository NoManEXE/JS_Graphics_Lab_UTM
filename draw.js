 // определяем конструктор Flower
            function Flower(context, centerX, centerY, radius, numPetals, color){
                this.context = context;
                this.centerX = centerX;
                this.centerY = centerY;
                this.radius = radius;
                this.numPetals = numPetals;
                this.color = color;
            }
            
            // Опредеяем метод draw для рисования обьекта Flower
            Flower.prototype.draw = function(){
                var context = this.context;
                context.beginPath();
                
                // рисуем лепестки
                for (var n = 0; n < this.numPetals; n++) {
                    var theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
                    var theta2 = ((Math.PI * 2) / this.numPetals) * (n);
                    
                    var x1 = (this.radius * Math.sin(theta1)) + this.centerX;
                    var y1 = (this.radius * Math.cos(theta1)) + this.centerY;
                    var x2 = (this.radius * Math.sin(theta2)) + this.centerX;
                    var y2 = (this.radius * Math.cos(theta2)) + this.centerY;
                    
                    context.moveTo(this.centerX, this.centerY);
                    context.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
                }
                
                context.closePath();
                context.fillStyle = this.color;
                context.fill();
                
                // рисуем жёлтый кружок в центре цветка
                context.beginPath();
                context.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
                context.fillStyle = "yellow";
                context.fill();
            };
            
            window.onload = function(){
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
                
                //создаём градиент для заднего фона
                context.beginPath();
                context.rect(0, 0, canvas.width, canvas.height);
                var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
                grd.addColorStop(0, "blue"); // синий цвет
                grd.addColorStop(1, "red"); // красный цвет
                context.fillStyle = grd;
                context.fill();
                
                // определяем массив цветов
                var colorArray = [];
                colorArray.push("red"); // 0
                colorArray.push("orange"); // 1
                colorArray.push("blue"); // 2
                colorArray.push("purple"); // 3
                
                // определяем количество цветов
                var numFlowers = 80;
                
                // рисование случано расположенных цветков
                for (var n = 0; n < numFlowers; n++) {
                    var centerX = Math.random() * canvas.width;
                    var centerY = Math.random() * canvas.height;
                    var radius = (Math.random() * 25) + 25;
                    var colorIndex = Math.round(Math.random() * (colorArray.length - 1));
                    
                    var thisFlower = new Flower(context, centerX, centerY, radius, 5, colorArray[colorIndex]);
                    thisFlower.draw();
                    
                    
                    // рисуем солнце
                    context.beginPath();
                    context.arc(canvas.width /2 , canvas.height /2 , 70,0,2 * Math.PI , false);
                    context.fillStyle = "yellow";
                    context.fill();
                    context.lineWidth = 5;
                    context.strokeStyle = "black";
                    context.stroke();
                    
                    // рисуем освещение от солнце
                    
                    context.beginPath();
                    context.arc(canvas.width /2 , canvas.height /2 , 80,0,2 * Math.PI , false);
                    context.lineWidth = 3;
                    context.strokeStyle = "yellow";
                    context.stroke();
                    
                    
                    
                }
            };
        