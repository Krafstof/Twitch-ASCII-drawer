/* jshint esnext: true */
/* global document */
let canvas = document.getElementById("pixel_canvas");
let sizePicker = document.getElementById("sizePicker");
let clear_butt = document.getElementById("clear-button")
let copy_butt = document.getElementById("copy-button")

makeGrid()
let btn = document.getElementById("create-button")

btn.onclick = () =>{
    let res = ""
    for (let row of canvas.rows){
        for (let cell of row.cells){
            if (cell.id.indexOf('b')!=-1){
                res+="░"
            }else res+="█"
        }
        res+="\n"
    }
    console.log(res);
    document.getElementById('result').innerHTML=res
}

clear_butt.onclick = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

copy_butt.onclick = () =>{
    let copyText = document.getElementById('result')
    console.log(copyText);
    
    copyText.select()
    document.execCommand("copy")
}

function makeGrid() {
    for (let r=0; r<16; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<29; c++){
            const cell = row.insertCell(c);
            cell.setAttribute("id", `h${r}l${c}b`)
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
    if (this.id.indexOf('b')!=-1){
        this.setAttribute("style", `background-color: #FFFFFF`);
        this.setAttribute("id", `${this.id.slice(0,4)}w`)
        console.log(this.id);
    }
    else if (this.id.indexOf('w')!=-1){
        this.setAttribute("style", `background-color: #0e0e10`);
        this.setAttribute("id", `${this.id.slice(0,4)}b`)
        console.log(this.id);
    }
}