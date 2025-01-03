//function to add a new tile to the tile list
function addTile() {
    var tile = document.getElementById("tileInput").value;
    var tiles = document.getElementById("tiles");
    var newTile = document.createElement("p");
    newTile.textContent = tile;

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        var newText = prompt("Enter updated tile content:", tile);
        if (newText !== null) {
            newTile.textContent = newText;
            editButton.disabled = true;
        }
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        tiles.removeChild(newTile);
    });

    newTile.appendChild(editButton);
    newTile.appendChild(deleteButton);

    tiles.appendChild(newTile);
}

//Function for generating the bingo card
function generateCard() {
   console.log("Generating Bingo Card");
}
