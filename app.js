$(document).ready(function() {

    console.log("READY!");

    var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
    var memory_values = [];
    var memory_tile_ids = [];
    var tiles_flipped = 0;

    Array.prototype.memory_tile_shuffle = function(){
        var i = this.length, j, temp;
        while(--i > 0){
            j = Math.floor(Math.random() * (i + 1));
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
        }
    }

    function newBoard(){
        tiles_flipped = 0;
        var output = '';
        memory_array.memory_tile_shuffle();
        // for(var i = 0; i < memory_array.length; i++){
        // 	output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
        // }
        // document.getElementById('memory_board').innerHTML = output;
        
        for(var i = 0; i < memory_array.length; i++){
            output += '<div id="tile_'+i+'"></div>';
        }
        document.getElementById('memory_board').innerHTML = output;
        for(var j = 0; j < memory_array.length; j++){
            document.getElementById("tile_"+j).addEventListener("click", function() {
                memoryFlipTile(this, 5)
            }); 
        }
    }
  
    function memoryFlipTile(tile,val){
        if (tile.innerHTML == "" && memory_values.length < 2) {
		console.log(`Set value: ${val}`);

		if (memory_values.length == 0) {

			memory_values.push(val);
			memory_tile_ids.push(tile.id);

		}
		else if (memory_values.length == 1) {

			memory_values.push(val);
			memory_tile_ids.push(tile.id);

			if (memory_values[0] == memory_values[1]) {

				tiles_flipped += 2;

				// Clear both arrays
				memory_values = [];
				memory_tile_ids = [];
				
				// Check to see if the whole board is cleared
				if (tiles_flipped == memory_array.length) {
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			}
			else {
				console.log("BBB");
				function flip2Back() {
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url() no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url("https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2db8de5b9f0478ba59dfd9d61f4d64fe&auto=format&fit=crop&w=2550&q=80") no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
    }

    newBoard();

    document.getElementById('memory_board').innerHTML = output;
    for(var j = 0; j < memory_array.length; j++){
        document.getElementById("tile_"+j).addEventListener("click", function() {
			console.log(`Flip this: ${this}`);
            memoryFlipTile(this, memory_array[j])
        }); 
    }
}
    // renderCard("What is 1 + 1?", ["3", "Apple", "2", "Ten"], 2);
newBoard();
});

