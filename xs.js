
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
function tema() {
    document.body.style.backgroundImage = "url('foto/wallpaper.jpg')";
    document.title = "spooky";
    var audio = new Audio('ses/iskelet.mp3');
    audio.play();
  }
   