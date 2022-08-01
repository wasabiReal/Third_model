function popup(){
    document.getElementById("overlay").style.visibility = 'visible';
    document.getElementById("popup").style.visibility = 'visible';
    document.getElementById("popup").style.opacity = '100';
    document.getElementById("popup").style.zIndex = '100';
}
function closePopup(){
    document.getElementById("overlay").style.visibility = 'hidden';
    document.getElementById("popup").style.visibility = 'hidden';
    document.getElementById("popup").style.opacity = '0';
    document.getElementById("popup").style.zIndex = '0';
}