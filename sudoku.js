const fs = require('fs') 
var data = {1:[0, 0, 0, 2, 6, 0, 7, 0, 1],2:[ 6, 8, 0, 0, 7, 0, 0, 9, 0],3:[ 1, 9, 0, 0, 0, 4, 5, 0, 0], 4:[8, 2, 0, 1, 0, 0, 0, 4, 0],5:[ 0, 0, 4, 6, 0, 2, 9, 0, 0],6:[ 0, 5, 0, 0, 0, 3, 0, 2, 8],7:[ 0, 0, 9, 3, 0, 0, 0, 7, 4],8:[0, 4, 0, 0, 5, 0, 0, 3, 6], 9:[7, 0, 3, 0, 1, 8, 0, 0, 0]};
var arr = [];
for(key in data) {
    if(data.hasOwnProperty(key)) {
        var value = data[key];
        arr.push (data[key]);
        // console.log(value);
    }
}var data1= arr;
fs.writeFile('sudoku_puzzles.txt', data1, (err) => {  
    if (err) throw err; 
}) 
for (let i = 0; i < data1.length; i++){
	for (let j=0; j< i; j++){
		console.log(data1[i][0]);
		if (data1[i][0] == 0){
			console.log("zero hai");
		}
		else{
			console.log("no");
		}
	}
}