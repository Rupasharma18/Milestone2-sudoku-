<<<<<<< HEAD
const fs = require('fs') 
// this is object in this object i am storing the puzzle data , by this object I am storing the data in sudoku.puzzle.txt file. 
var data = {1:[0, 0, 0, 2, 6, 0, 7, 0, 1],2:[ 6, 8, 0, 0, 7, 0, 0, 9, 0],3:[ 1, 9, 0, 0, 0, 4, 5, 0, 0], 4:[8, 2, 0, 1, 0, 0, 0, 4, 0],5:[ 0, 0, 4, 6, 0, 2, 9, 0, 0],6:[ 0, 5, 0, 0, 0, 3, 0, 2, 8],7:[ 0, 0, 9, 3, 0, 0, 0, 7, 4],8:[0, 4, 0, 0, 5, 0, 0, 3, 6], 9:[7, 0, 3, 0, 1, 8, 0, 0, 0]};
var arr = [];
for(key in data) {
    if(data.hasOwnProperty(key)) {
        var value = data[key];
        arr.push (data[key]);
        // console.log(value);
    }
}
console.log("this is your unSolve sudoku puzzle:-", arr);
// in this arrayData variable I am storing the whole puzzle data. 
var arrayData= arr;
// here I am storing the data in the file.
fs.writeFile('sudoku_puzzles.txt', arrayData, (err) => {  
    if (err) throw err; 
}); 
// puzzle solver start from here.
function sudokuPuzzle(puzzle){
	var storePosiableNumber = {};
	var imposiableNumber = {};
	var emptyCell = 81;
	// this loop going for whole 81 boxes.
	while (emptyCell > 0){
		emptyCell = 0;
		// this loop for columns
		for (var vert = 0; vert < puzzle.length; vert++){ 
			// this loop for rows
	        for (var horz=0; horz < puzzle.length; horz++){
	        	// this line checking in whole puzzle zero value.
	            if ((puzzle[vert][horz]) === 0){
	            	// this is variable storing the possiable value.
		           storePosiableNumber = {};
		           // this loop for store the possiable value in object.
		            for(let i =0;i< puzzle.length; i++){
		            	// this condition checking columns.
		              	if (puzzle[vert][i] >0){
		              		// this objet storing the possiable keys and value.
		              		storePosiableNumber[puzzle[vert][i]] = true;
		              	}
		              	// this condition checking rows and storing a value inside the object.
		              	if(puzzle[i][horz] > 0){
		              		storePosiableNumber[puzzle[i][horz]] = true;
		              	}
		            }  	
		            // this loop for columns 3*3 grid.
					for (let gridVert = Math.floor(vert/3)*3; gridVert<  Math.floor(vert/3)*3+3; gridVert++ ){
						// this loop for rows 3*3 grid.
						for (let gridHorz = Math.floor(horz/3)*3; gridHorz<  Math.floor(horz/3)*3+3; gridHorz++ ){
							if (puzzle[gridVert][gridHorz]){
								// here stroing all the grids data in object.
								storePosiableNumber[puzzle[gridVert][gridHorz]] = true;
							}
						}
					}
					//  in this line getting all the keys from object.
					imposiableNumber = Object.keys(storePosiableNumber);
					if(imposiableNumber.length === 8){
						// this loop is working for replacing value from puzzle.
						for( let num = 1; num < 10; num++){
							if(imposiableNumber.indexOf(num.toString()) < 0){
								puzzle[vert][horz]= num;
							}
						}
						
					}else{
							emptyCell++;
						}
	           	 	}
	        	}
	    	}
		
	
	}return puzzle;

}
let funCall = sudokuPuzzle(arrayData);
console.log("solver Puzzle :-",funCall );
