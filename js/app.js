const cursor = document.querySelector(".cursor");
var descanso;

// movimiento del cursor
document.addEventListener("mousemove", (e) => {

    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block"; 

    function mouseQuieto(){
        cursor.style.display = "none";
    }
    clearTimeout(descanso);
    descanso = setTimeout(mouseQuieto, 500);
});

// movimiento de salida del cursor
document.addEventListener("mouseout", () => {
    cursor.style.display = "none"; 
});