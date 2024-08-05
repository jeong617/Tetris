const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext('2d');
const grid = 32;

// game board 설정
const boardWidth = 10;
const boardHegith= 20;
const board = Array.from({height: boardHegith}, () => {
    Array(boardWidth).fill(0);
})


for (let row = 0; row < 20; row++) {
    board[row] = [];
    for (let col =0; col < 10; col++) {
        board[row][col] = 0;
    }
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    if (tetromino) {
        drawTetromino();
    }
    requestAnimationFrame(gameLoop);
}

// 테트로미노 모양 정의
const tetrominoes = {
    I: [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    J: [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
    L: [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ],
    O: [
        [1, 1],
        [1, 1],
    ],
    S: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ],
    T: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
    Z: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ]
};

// 테트로미노 색상 정의
const colors = {
    I: '#FF0D72',
    J: '#0DC2FF',
    L: '#0DFF72',
    O: '#F538FF',
    S: '#FF8E0D',
    T: '#FFE138',
    Z: '#3877FF',
};

// 현재 테트로미노 상태
let currentTetromino = null;
let currentPosition = { x: 0, y: 0 };
let dropInterval = 1000;
let lastTime = 0;
let gameOver = false;

// 새 테트로미노 생성
function createTetromino() {
    const tetrominoKeys = Object.keys(tetrominoes);
    const randomKey = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
    currentTetromino = {
        shape: tetrominoes[randomKey],
        color: colors[randomKey],
        x: Math.floor((10 - tetrominoes[randomKey][0].length) / 2), // 가운데 정렬
        y: 0,
    };
}

function drawTetromino() {
    currentTetromino.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = currentTetromino.color;
                context.fillRect(
                    (currentTetromino.x + x) * grid,
                    (currentTetromino.y + y) * grid,
                    grid -1,
                    grid -1
                )
            }
        })
    })
}

function drawBoard() {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = value;
                context.fillRect(x * grid, y * grid, grid - 1, grid - 1);
            }
        })
    })
}

// 충돌 감지
function isColliding(offsetX, offsetY) {
    const { shape } = currentTetromino;
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape.length; x++) {
            if (shape[y][x] !== 0) {
                const newX = x + currentTetromino.x + offsetX;
                const newY = y + currentTetromino.y + offsetY;
                if (
                    newX < 0 ||
                    newX >= boardWidth ||
                    newY >= boardHegith ||
                    (newY >= 0 && board[newY][newX] !== 0)
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}

// 보드에 테트로미노 고정
function mergeTetromino() {
    currentTetromino.shape.forEach((row, y) =>{
        row.forEach((value, x) => {
            if (value !== 0) {
                board[y + currentTetromino.y][x + currentTetromino.x] = currentTetromino.color;
            }
        })
    })
}
