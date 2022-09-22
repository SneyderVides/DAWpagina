window.onload = function(){
    var posicion = 0;
    var box = document.getElementById('box');
    var t =setInterval(move, 23);
    
    function move(){
        if (posicion>=100){
            clearInterval(t);
        }
        else{
            posicion+=1;
            box.style.left = posicion+"px";
            box.style.top = posicion+"px";
        }
        
     }
}