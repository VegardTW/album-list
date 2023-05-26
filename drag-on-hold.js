// Make the DIV element draggable:
dragElement(document.getElementById("foabp"));
dragElement(document.getElementById("bwp"));
dragElement(document.getElementById("sots"));
dragElement(document.getElementById("aja"));
dragElement(document.getElementById("aph"));
dragElement(document.getElementById("tpwbyt"));
dragElement(document.getElementById("wtsv"));
dragElement(document.getElementById("iab"));
dragElement(document.getElementById("aen"));
dragElement(document.getElementById("stl"));
dragElement(document.getElementById("tgcd"));
dragElement(document.getElementById("cla"));
dragElement(document.getElementById("ded"));
dragElement(document.getElementById("sftd"));
dragElement(document.getElementById("tli"));
dragElement(document.getElementById("tfiwe"));
dragElement(document.getElementById("hac"));
dragElement(document.getElementById("yow"));
dragElement(document.getElementById("hce"));
dragElement(document.getElementById("coc"));
dragElement(document.getElementById("fmts"));
dragElement(document.getElementById("thm"));
dragElement(document.getElementById("pip"));
dragElement(document.getElementById("pel"));
dragElement(document.getElementById("lot"));
dragElement(document.getElementById("rav"));
dragElement(document.getElementById("aoadc"));
dragElement(document.getElementById("onj"));
dragElement(document.getElementById("soa"));
dragElement(document.getElementById("tec"));
dragElement(document.getElementById("plh"));
dragElement(document.getElementById("ali"));
dragElement(document.getElementById("atm"));
dragElement(document.getElementById("moc"));
dragElement(document.getElementById("sdof"));
dragElement(document.getElementById("sdam"));
dragElement(document.getElementById("ant"));
dragElement(document.getElementById("coy"));
dragElement(document.getElementById("dir"));
dragElement(document.getElementById("cfp"));
dragElement(document.getElementById("afwsfwf"));
dragElement(document.getElementById("tcoc"));
dragElement(document.getElementById("rtf"));
dragElement(document.getElementById("hotn"));
dragElement(document.getElementById("ark"));
dragElement(document.getElementById("pha"));
dragElement(document.getElementById("fub"));
dragElement(document.getElementById("poi"));
dragElement(document.getElementById("drs"));
dragElement(document.getElementById("bil"));
dragElement(document.getElementById("lat"));
dragElement(document.getElementById("sim"));
dragElement(document.getElementById("trtrts"));
dragElement(document.getElementById("jor"));
dragElement(document.getElementById("aatg"));
dragElement(document.getElementById("lef"));
/*dragElement(document.getElementById("mydiv"));*/

function dragElement(elmnt) {
    console.log(elmnt);
    /*var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {*/
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}