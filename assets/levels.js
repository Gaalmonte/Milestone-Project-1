import Brick from '/assets/brick.js';
export function buildLevel(game, level){
    let bricks = [];
    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick === 1){
                let position = {
                    x: 83.3 * brickIndex,
                    y: 70 + 50 * rowIndex,
                };
                bricks.push(new Brick(game, position));
            }
        })
    })
    return bricks;
}
export const level1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,0,1,1],
    [1,0,1,0,1,0,1,0,1,0],
    [1,1,1,0,1,1,1,1,0,1],
];