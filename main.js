const board = document.querySelector('#board')
const ctx = board.getContext("2d")

const BOARD_SIZE = 800
board.width = BOARD_SIZE
board.height = BOARD_SIZE

for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        ctx.fillStyle = (x+y) % 2 == 0 ? "yellow" : "green"
        ctx.fillRect(BOARD_SIZE/8*x, BOARD_SIZE/8*y, BOARD_SIZE/8, BOARD_SIZE/8)
        
        if (y == 6) {
            const image = new Image()
            image.src = './images/pieces/white_pawn.png'
            image.onload = function (e) {
                ctx.drawImage(image, x * BOARD_SIZE/8, y * BOARD_SIZE/8, BOARD_SIZE/8, BOARD_SIZE/8)
            }
        }
        if (y == 1) {
            const image = new Image()
            image.src = './images/pieces/black_pawn.png'
            image.onload = function (e) {
                ctx.drawImage(image, x * BOARD_SIZE/8, y * BOARD_SIZE/8, BOARD_SIZE/8, BOARD_SIZE/8)
            }
        }
    }
}
