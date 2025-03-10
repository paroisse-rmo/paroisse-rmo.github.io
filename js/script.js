let img = document.getElementById("draggable");

img.onmousedown = function(event) {
    let shiftX = event.clientX - img.getBoundingClientRect().left;
    let shiftY = event.clientY - img.getBoundingClientRect().top;
    
    img.style.position = "absolute";
    img.style.zIndex = 1000;
    document.body.append(img);
    
    function moveAt(pageX, pageY) {
        img.style.left = pageX - shiftX + 'px';
        img.style.top = pageY - shiftY + 'px';
    }
    
    moveAt(event.pageX, event.pageY);
    
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener("mousemove", onMouseMove);
    
    img.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove);
        img.onmouseup = null;
    };
};

img.ondragstart = function() {
    return false;
};

function downloadImage() {
    let a = document.createElement('a');
    a.href = img.src;
    a.download = "formulaire.jpeg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
