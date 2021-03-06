import Grid from "./Grid.js"
import Tile from "./Tile.js"

const gameBoard = document.getElementById("game-board")


const grid= new Grid(gameBoard)
console.log(grid.randomEmptyCell())
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile= new Tile(gameBoard)
setupInput()

function setupInput(){
    window.addEventListener("keydown", handleInput,{once:true})
}
function handleInput(e){
    console.log(e.key)
    switch(e.key){
       case "ArrowUp": 
        moveUp()
        break
       case "ArrowDown": 
        moveDown()
        break
       case "ArrowLeft": 
        moveLeft()
        break
       case "ArrowRight": 
        moveRight()
        break
       default:
            setupInput()
            return
    }

    setupInput()
    console.log(grid.cellsByColumn)

}

function moveUp() {
    return slideTiles(grid.cellsByColumn)
}
function moveDown() {
    return slideTiles(grid.cellsByColumn.map(column => [...column].reverse()))
}

function moveLeft() {
    return slideTiles(grid.cellsByRow)
}
function moveRight() {
    return slideTiles(grid.cellsByRow.map(row=> [...row].reverse()))
}

function slideTiles(cells){
    cells.forEach(group=>{
        for(let i=1;i<group.length;i++)
        {
            const cell =group[i]
            if (cell.tile==null) continue
            let lastValidTileCell
            for(let j= i - 1; j >=0; j--){
                const moveToCell =group[j]
                if(!moveToCell.canAccept(cell.tile)) break
                lastValidTileCell = moveToCell
            }
            if(lastValidTileCell != null){
                if(lastValidTileCell.tile !=null){
                    lastValidTileCell.mergeTile=cell.tile
                }
                    else{
                        lastValidTileCell.tile=cell.tile
                    }
                    cell.tile=null
                }
            }
        }
)
}
