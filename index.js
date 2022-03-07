const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')

const blockWidth =100
const blockHeight=20
const boardWidght=560
const ballDiameter=20
const boardHeight=300

let xDirections=2
let yDirections=2

let timerID

const userStart=[230,10]
let currentPosition=userStart

const ballstart=[270,40]
let ballCurrentPosition = ballstart
//To create block
class Block{
    constructor(xAxis,yAxis){
    this.bottomLeft =[xAxis,yAxis]
    this.bottomRight =[xAxis+blockWidth, yAxis]
    this.topLeft=[xAxis,yAxis+blockHeight]
    this.topRight=[xAxis+blockWidth,yAxis+blockHeight]
    }
}
//all of the blocks
const blockArray=[
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]

// To add a single block
// function addBlock(){
// const block = document.createElement('div')
// block.classList.add('block')
// block.style.left='100px'
// block.style.bottom='50px'
// grid.appendChild(block)
// }
// addBlock()

function addMultiBlock(){
    for(let i=0;i<blockArray.length;i++){
        const indivBlock = document.createElement('div')
        indivBlock.classList.add('blockcss')
        indivBlock.style.left=blockArray[i].bottomLeft[0]+'px'
        indivBlock.style.bottom=blockArray[i].bottomLeft[1]+'px'
        grid.appendChild(indivBlock)
    }
}
addMultiBlock()

//draw user
function drawUser(){
    userblock.style.left= currentPosition[0]+'px'
    userblock.style.bottom= currentPosition[1]+'px'
}

//draw ball
function drawBall(){
    ball.style.left=ballCurrentPosition[0]+'px'
    ball.style.bottom=ballCurrentPosition[1]+'px'
}



//add userbblock
const userblock = document.createElement('div')
userblock.classList.add('usercss')
drawUser()
grid.appendChild(userblock)

//move user
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0]>0)
            {
            currentPosition[0]-=10
            drawUser()
            }
            break;
        
        case 'ArrowRight':
            if(currentPosition[0]< boardWidght-blockWidth )
            {
            currentPosition[0]+=10
            drawUser()
            break
        }}
}
document.addEventListener('keydown',moveUser)

//add ball
const ball=document.createElement('div')
ball.classList.add('ballcss')
drawBall()
grid.appendChild(ball)

//move ball
function moveBall(){
    ballCurrentPosition[0]+=xDirections
    ballCurrentPosition[1]+=yDirections
    drawBall()
    checkForCollisions()
}

timerID= setInterval(moveBall,30)

//check for collisions
function checkForCollisions(){
    //check for wall collisions
    if(ballCurrentPosition[0]>=(boardWidght- ballDiameter)|| ballCurrentPosition[1]>=(boardHeight-ballDiameter) || ballCurrentPosition[0]<=0)
    {
        changeDirection()
    }



//check for game over
if(ballCurrentPosition[1]<=0)
{
    clearInterval(timerID)
    scoreDisplay.innerHTML='You Lose'
    console.log("You loose")
    document.removeEventListener('keydown', moveUser)
    
}}


function changeDirection(){
    if(xDirections === 2 && yDirections===2){
        yDirections=-2
        return
    }
    if(xDirections== 2 && yDirections== -2){
        xDirections=-2
        return
    }
    if(xDirections ==-2 && yDirections ==-2)
    {
        yDirections=2
        return
    }
    if(xDirections=-2 && yDirections==2){
        xDirections=2
    }


}

//2:17