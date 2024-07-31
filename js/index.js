class Tetris {
    constructor() {

        /* setting stage size */
        this.stageWidth = 10;
        this.stageHeight = 20;
        this.stageCanvas = document.getElementById("stage");
        this.nextCanvas = document.getElementById("next");

        /* setting cell size */
        let cellWidth = this.stageCanvas.width / this.stageWidth;
        let cellHeight = this.stageCanvas.height / this.stageHeight;
        this.cellSize = cellWidth < cellHeight ? cellWidth : cellHeight;
        
        /* setting padding */
        this.stageLeftPadding = (this.stageCanvas.width - this.cellSize * this.stageWidth ) / 2;
        this.stageRightPadding = (this.stageCanvas.height - this.cellSize * this.stageHeight ) / 2;

        /* etc... */
        this.block = this.createBlocks();
        this.deletedLines = 0;
  
        
    }

    createBlocks() {
        let blocks = [
            {
                // ---- 모양
                shape: [
                    [[-1, 0], [0, 0], [1, 0], [2, 0]],
                    [[0, -1], [0, 0], [0, 1], [0, 2]],
                    [[-1, 0], [0, 0], [1, 0], [2, 0]],
                    [[0, -1], [0, 0], [0, 1], [0, 2]],
                ],
                color: "rgb(0, 255, 255)",
                highlight: "rgb(255, 255, 255)",
                shadow: "rgb(0, 128, 128)"
            },
            {
                // ㅁ 모양
                shape: [
                    [[0, 0], [1, 0], [1, 1], [0, 1]],
                    [[0, 0], [1, 0], [1, 1], [0, 1]],
                    [[0, 0], [1, 0], [1, 1], [0, 1]],
                    [[0, 0], [1, 0], [1, 1], [0, 1]],
                ],
                color: "rgb(0, 255, 255)",
                highlight: "rgb(255, 255, 255)",
                shadow: "rgb(0, 128, 128)"
            },
            {
                // ㄱㄴ 모양
                shape: [
                    [[0, 0], [1, 0], [-1, 1], [0, 1]],
                    [[-1, -1], [-1, 0], [0, 0], [0, 1]],
                    [[0, 0], [1, 0], [-1, 1], [0, 1]],
                    [[-1, -1], [-1, 0], [0, 0], [0, 1]]
                ],
                color: "rgb(0, 255, 255)",
                highlight: "rgb(255, 255, 255)",
                shadow: "rgb(0, 128, 128)"
            },
            {
                // _ㅣ- 모양
                shape: [
                    [[-1, 0], [0, 0], [0, 1], [1, 1]],
                    [[0, -1], [-1, 0], [0, 0], [-1, 1]],
                    [[-1, 0], [0, 0], [0, 1], [1, 1]],
                    [[0, -1], [-1, 0], [0, 0], [-1, 1]]
                ],
                color: "rgb(0, 255, 255)",
                highlight: "rgb(255, 255, 255)",
                shadow: "rgb(0, 128, 128)"
            },
            {
                shape: [
                    [[-1, -1], [-1, 0], [0, 0], [1, 0]],
                    [[0, -1], [1, -1], [0, 0], [0, 1]],
                    [[-1, 0], [0, 0], [1, 0], [1, 1]],
                    [[0, -1], [0, 0], [-1, 1], [0, 1]]
                ],
                color: "rgb(0, 0, 255)",
                highlight: "rgb(255, 255, 255)",
                shadow: "rgb(0, 0, 128)"
            },
            {
                shape: [
                    [[1, -1], [-1, 0], [0, 0], [1, 0]],
                    [[0, -1], [0, 0], [0, 1], [1, 1]],
                    [[-1, 0], [0, 0], [1, 0], [-1, 1]],
                    [[-1, -1], [0, -1], [0, 0], [0, 1]]
                ],
                color: "rgb(255, 165, 0)",
                highlight: "rgb(255, 255, 255)",
                shadow: "rgb(128, 82, 0)"
            },
            {
                shape: [
                    [[0, -1], [-1, 0], [0, 0], [1, 0]],
                    [[0, -1], [0, 0], [1, 0], [0, 1]],
                    [[-1, 0], [0, 0], [1, 0], [0, 1]],
                    [[0, -1], [-1, 0], [0, 0], [0, 1]]
                ],
                color: "rgb(255, 0, 255)",
                highlight: "rgb(255, 255, 255)",
                shadow: "rgb(128, 0, 128)"
            }            
        ];
        return this.block;
    }
}
