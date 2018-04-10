var korekta = 0;
var poentoj = 0;
var vicoj = 0;
var vera = 0;
var ĝusta = 0;
//show countdown starting point for the new game display
var dekalkulo = 10;

function skribo(elekto)
{
  //here is the letter typed by the user
    'use strict';
    var tuŝo =elekto;

    for (var i = 0; i < hazardaVorto.length; i++)
    {
      //if matching letter entered by user
      if (hazardaVorto[i] === tuŝo)
      {
        //assign it to tuŝo
        respondaro[i] = tuŝo;
        ĝusta++;
        if (ĝusta>0)
        {
          ĝusta = 1;
            
                        
          //count correct letters
          korekta = korekta + ĝusta;
          //if all letters correct then win
          if (korekta>=hazardaVorto.length)
          {

            //comm(ent)
            var comm = ["Ho! tio estis proksima", "En ordo", "Sufiĉe bona", "Ĝusta",
            "Bona laboro", "Bone farita!", "Bonege!", "Tre ege bona!", "Stelulo!", "Mirigulo!"];
            document.getElementById("venkas").innerHTML = comm[dekalkulo - 1];

          }
        }
      }
    };

//marking
vera=vera+ĝusta;
ĝusta=0;
vicoj++;
poentoj = vicoj-vera;
//set countdown starting number here
dekalkulo = 10-poentoj;
// if zero reveal answer
if (dekalkulo <1)
{
    dekalkulo = 0;
    malkaŝu();
    document.getElementById("venkas").innerHTML = "bonŝancon por venontfoje";
    
}
    
document.getElementById("provado").innerHTML = dekalkulo;

document.getElementById("respondo").innerHTML = respondaro.join(" ");
};
