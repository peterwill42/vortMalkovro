var ltr = "" ;
amasigu = [];

function litero(elekto) {

  montruLiteron(elekto);
   skribo(elekto);
 };

function montruLiteron(ltr)
    {
      document.getElementById(ltr+"but").style.visibility = "hidden";
    
        
    //here are the used letters
    amasigu = amasigu + ltr;
    document.getElementById("venkas").innerHTML=amasigu.toUpperCase();
    
    };
