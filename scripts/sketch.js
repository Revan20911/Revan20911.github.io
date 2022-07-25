let selectedColor = 0;

let colorArray = new Array("black","red","blue", "green");


function makeColors(cols, rows){

    let count = 0;

    const paints =[];
    
    const palette = document.querySelector('[class="palette"]');

    palette.style.setProperty('--grid-cols', cols);
    palette.style.setProperty('--grid-rows', rows);


    for(c=0; c < cols; c++){
        for(d=0; d < rows; d++){

            let paint = document.createElement("div");

            paints.push(c,d,paint);
            palette.appendChild(paint).className="palette-color";
            palette.appendChild(paint).style.backgroundColor = colorArray[count];
            palette.appendChild(paint).addEventListener('click', function select(){

                if(this.style.backgroundColor == "red"){
                    selectedColor = 1;

                }else if(this.style.backgroundColor == "blue"){
                    selectedColor = 2;
                }else if(this.style.backgroundColor == "green"){
                    selectedColor = 3;
                }else{
                    selectedColor = 0;
                }

            })

        count++;
        }
    }
    return paints;
}

makeColors(2,2);

function makeRows(cols, rows){

        const cells =[];

        const container = document.querySelector('[class="sketchpad-container"]');

        container.style.setProperty('--grid-cols', cols);
        container.style.setProperty('--grid-rows', rows);


        for(c=0; c < cols; c++){
            for(d=0; d < rows; d++){

              
            let cell = document.createElement("div");
            // let cell_coord = new Array[c][d];
            
            cells.push(c,d,cell);
            container.appendChild(cell).id ="animate";
            container.appendChild(cell).className="sketch-cell";

            container.appendChild(cell).addEventListener('mousemove', function draw(e){

                if(e.buttons == 1){

                    this.style.backgroundColor = colorArray[selectedColor];
                    console.log(selectedColor);

                }
                

            })
        }
    }

    return cells;
    
}

makeRows(100,100);


document.getElementById("clear").addEventListener('click', 

function clearCanvas(){

    for(let a = 0; a < cells.length; a++){
        cells[a].style.backgroundColor = "white";
    }



})


