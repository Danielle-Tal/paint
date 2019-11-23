var isDrawing = false;
var mycanvas = document.getElementById("canvas-div");
var canvash = 500;
var canvasw = 500;
mycanvas.style.height=canvash+"px";
mycanvas.style.width=canvasw+"px";
var selectedcolor="purple";
var divwidth = 10;
var divheight =10;
selectborderradius = 0;
var rotation = 0;

var canvassize = document.getElementById("canvas-size");
canvassize.addEventListener("click",changecanvassize);

function changecanvassize(e){
    canvash= document.getElementById("height-canvas").value
    canvasw= document.getElementById("width-canvas").value
    mycanvas.style.height=canvash+"px";
    mycanvas.style.width=canvasw+"px";
}


var x;
var y;
function mylocation() {
    var rect = mycanvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
}

var d;

function draw() {
    var obj = document.createElement("div");
    var d = document.getElementById("canvas-div").appendChild(obj);
    d.addclass = "colorClass"
    mylocation(event);
    if(x <= 500 && y <= 500){
    d.style.position = "absolute";
    d.style.left = x + "px";
    d.style.top = y + "px";
    d.style.height = divheight + "px";
    d.style.width = divwidth + "px";
    d.style.backgroundColor = selectedcolor;
    d.style.borderRadius= selectborderradius+"px";
}
}

mycanvas.addEventListener('mousedown', e => {
    draw();
    isDrawing = true;
});

mycanvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        draw();
    }
});

document.body.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        draw();
        isDrawing = false;
    }
});

function changecolor(e){
    var clickedcolor= e.target;
    selectedcolor= clickedcolor.id;
};

document.querySelectorAll(".color").forEach(mycolor=> {
    mycolor.addEventListener("click",changecolor);
})


function changesize(e){
    var clickedsize = e.target;
if(clickedsize.id=="small"){
    divwidth = 10;
    divheight =10;
}else if (clickedsize.id=="med"){
    divwidth = 20;
    divheight =20;
}else if(clickedsize.id=="large"){
    divwidth = 30;
    divheight =30;
}
};

document.querySelectorAll(".size").forEach(mysize=> {
    mysize.addEventListener("click",changesize);
})

function clearboard(){
    $(".canvas-div").empty();
}

var clear= document.getElementById("clear");
clear.addEventListener("click",clearboard);

function changeshape(e){
    var clickedshape = e.target;
    if(clickedshape.id=="circle"){
        selectborderradius = 100;
    }else if(clickedshape.id=="square"){
        selectborderradius = 0;
    }
};

document.querySelectorAll(".shape").forEach(myshape=> {
    myshape.addEventListener("click",changeshape);
})

function changerotation(){
    rotation += 90;
    $(".canvas-div").css({'transform' : 'rotate('+ rotation +'deg)'});
};

var rotate= document.getElementById("rotate");
rotate.addEventListener("click",changerotation);

function colorPicker (){
    selectedcolor = document.getElementById("picker").value;
}

var colorPick = document.getElementById("picker");
colorPick.addEventListener("input",colorPicker);