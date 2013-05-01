var d=0,e=0,f=0;
var svgElement=0;

function funcMouseDown(a) {
    d=1;
    e=a.clientX;
    f=a.clientY;
    svgElement=document.createElementNS("http://www.w3.org/2000/svg","svg");
    svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svgElement.setAttribute("version","1.1");
    svgElement.setAttribute("style","position: absolute; top:0px; left:0px; z-index:1000; ");
    document.body.appendChild(svgElement);
    a.preventDefault();
}

function funcMouseUp(a){
    d=0;
    a.preventDefault()
}

function funcMouseMove(a) {
    if(d){
	var b=document.createElementNS("http://www.w3.org/2000/svg","line");
	b.setAttribute("x1",a.clientX);
	b.setAttribute("y1",a.clientY);
	b.setAttribute("x2",e);
	b.setAttribute("y2",f);
	b.setAttribute("style",
		       "stroke:rgb("+Math.floor(256*Math.random())+
		       ","+Math.floor(256*Math.random())+
		       ","+Math.floor(256*Math.random())+
		       ");stroke-width:2;)");
	svgElement.appendChild(b);
	e=a.clientX;
	f=a.clientY;
	a.preventDefault()
    }
}

function onKeyEvent() {
    var code = event.keyCode;
    var returnValue = true;
    switch (code) {
    case 27: //Escape key
	window.removeEventListener("mousedown",funcMouseDown,!1);
	window.removeEventListener("mouseup",funcMouseUp, !1);
	window.removeEventListener("mousemove",funcMouseMove, !1);
        break;
    default:
        break;
    }
    return returnValue;
}

window.addEventListener("mousedown",funcMouseDown,!1);
window.addEventListener("mouseup",funcMouseUp, !1);
window.addEventListener("mousemove",funcMouseMove, !1);
window.document.onkeydown = onKeyEvent;
