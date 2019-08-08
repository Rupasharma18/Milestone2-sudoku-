const fs = require('fs') 
var data = {1:[0, 0, 0, 2, 6, 0, 7, 0, 1],2:[ 6, 8, 0, 0, 7, 0, 0, 9, 0],3:[ 1, 9, 0, 0, 0, 4, 5, 0, 0], 4:[8, 2, 0, 1, 0, 0, 0, 4, 0],5:[ 0, 0, 4, 6, 0, 2, 9, 0, 0],6:[ 0, 5, 0, 0, 0, 3, 0, 2, 8],7:[ 0, 0, 9, 3, 0, 0, 0, 7, 4],8:[0, 4, 0, 0, 5, 0, 0, 3, 6], 9:[7, 0, 3, 0, 1, 8, 0, 0, 0]};
var arr = [];
for(key in data) {
    if(data.hasOwnProperty(key)) {
        var value = data[key];
        arr.push (data[key]);
        // console.log(value);
    }
}
var arrayData= arr;
fs.writeFile('sudoku_puzzles.txt', arrayData, (err) => {  
    if (err) throw err; 
}); 

function sudokuPuzzle(puzzle){
	// console.log(puzzle);
	var obj = {};
	for (let vert = 0; vert < puzzle.length; vert++){
		for (let horz=0; horz< puzzle.length; horz++){
			if (puzzle[vert][horz] == 0){
				return puzzle[vert][horz]
			}
			else{
				return "not zero";
			}
		}
	}
}
console.log(sudokuPuzzle(arrayData));