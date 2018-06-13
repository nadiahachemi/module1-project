var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(100,0,50,50);
ctx.fillRect(300,0,50,50);
ctx.fillRect(500,0,50,50);
var speed1 = 0;
var speed2 = 0;
var speed3 = 0;




// //MOVING ACTIONS//
// var x= 2;

// function Girl (position){
//     this.x = x;
// }

// Girl.prototype.moveLeft= function (){
//     if (this.x===1){
//         console.log(this.x);
//         return this.x;
//     }
//     else{
//         this.x = this.x + 1;
//         console.log(this.x);
//         return  this.x;
//     }
// };

// Girl.prototype.moveRight = function (){
//     if (this.x === 3){
//         console.log(this.x);
//         return this.x;
//     }
//     else{
//         this.x =this.x - 1;
//         console.log(this.x);
//         return this.x;
//     }
// };