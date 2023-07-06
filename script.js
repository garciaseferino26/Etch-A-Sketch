// select the div class container 
const container = document.querySelector('.container');

// set inital default grid size
let gridSize = 16;


// create all the divs of the grid with cell as their class name
function setGridSize(x) {

    for (let j=1; j<=x; j++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer');

        for (let i=1; i<=x; i++) {
            const divRow = document.createElement('div');
            divRow.classList.add('cell');
            divRow.style.height = ((40/x) + 'rem');
            divRow.style.width = ((40/x) + 'rem');

            divRow.addEventListener('mouseover', function(event) {
                event.target.style.backgroundColor = "navy";
            })
            rowContainer.appendChild(divRow);
        };
        container.appendChild(rowContainer);
    };
};

//run the top function with default grid size, this will be the defaunt look
setGridSize(gridSize)



// reset the grid when clicking the button also reset the color of the cells
const button = document.querySelector('button');

// funtion will run once button is clicked, checks for valid input and resets the colored divs and re sizes them
button.addEventListener('click', function() {

    // holds new grid size to be
    let gridSizeNEW = prompt('new cell size?');

    // checks if its a valid input
    while (gridSizeNEW < 2 || gridSizeNEW > 100 || isNaN(gridSizeNEW)) {
        gridSizeNEW = prompt('Number between 2-100 please')
    }

    // reset all div color to white
    document.querySelectorAll('.cell').forEach(item => {
        item.style.backgroundColor = "white";
    });

    // erase all divs from previous grid
    const mainContainer = document.querySelector('.container');
    while (mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }

    // reconstruct the new grid based on user input
    setGridSize(gridSizeNEW)
});