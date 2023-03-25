function temajs() {
    document.body.style.backgroundImage = "url('foto/wallpaper.jpg')";
    document.title = "spooky";
    var audio = new Audio('ses/iskelet.mp3');
    audio.play();
    
}






function yenisekmedeac(url) {
    var win = window.open(url, '_blank');
    win.focus();
   }
   
   function rastgelessac() {
   yenisekmedeac(urlolustur());
   }
   
   function urlolustur() {
   return "https://prnt.sc/" + Id();
   }
   
   function Id() {
   var result = '';
   var characters  = 'abcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 6; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
    return result;
   }

   






   document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

