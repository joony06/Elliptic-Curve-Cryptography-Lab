const BOARDID = 'box'; // Insert your id here!

JXG.Options.axis.strokeColor = 'black';
const board = JXG.JSXGraph.initBoard(BOARDID, {
    boundingbox: [-20, 20, 20, -20],
    axis: true,
    grid: true,
    showCopyright: false
});

let a = board.create('slider', [[2, -5], [11, -5], [-20, 0, 20]], {name: 'a'});
let b = board.create('slider', [[2, -7], [11, -7], [-20, 17, 20]], {name: 'b'});

let c1 = board.create('functiongraph', [function(x) {
    return Math.sqrt(x * x * x + a.Value() * x + b.Value());
}], {strokeWidth: 3, strokeColor: 'black'});
let c2 = board.create('functiongraph', [function(x) {
    return -Math.sqrt(x * x * x + a.Value() * x + b.Value());
}], {strokeWidth: 3, strokeColor: 'black'});