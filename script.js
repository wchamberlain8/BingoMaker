let tileManager = {
    currentCount: 0,
    maxTiles: 9
};

function updateMaxTiles() {
    const size = document.getElementById("size").value;
    switch (size) {
        case "3x3":
            tileManager.maxTiles = 9;
            break;
        case "4x4":
            tileManager.maxTiles = 16;
            break;
        case "5x5":
            tileManager.maxTiles = 25;
            break;
    }
    updateTileDisplay();
}

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

function updateTileDisplay() {
    document.getElementById("tileCount").textContent = tileManager.currentCount;
    document.getElementById("maxTiles").textContent = tileManager.maxTiles;
}

//Function for generating the bingo card
function generateCard() {
   console.log("Generating Bingo Card");
}
