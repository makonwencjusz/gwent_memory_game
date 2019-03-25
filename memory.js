var cards1 = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png",  "yen.png"];

var cards2 = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png",  "yen.png", "letho.png", "imlerith.png"];

var cardsAll = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png",  "yen.png", "letho.png", "imlerith.png", "regis.png", "zoltan.png" ];

var cards = [0];

cards=cards2.concat(cards2);

cards.sort(function(a, b){return 0.5 - Math.random()});


var c = [];

for (var i = 0; i < cards.length; i++) {

    (function(i) {
        c[i] = document.getElementById('c' + i);
        c[i].addEventListener("click", function() { revealCard(i); });
    }(i));
}

//var c0 = document.getElementById('c0');
//c0.addEventListener("click", function() { revealCard(0); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 8;

function revealCard(nr)
{
    var opacityValue = $('#c'+nr).css('opacity');
    
    if(opacityValue != 0 && lock == false)
    {
    lock = true;
    var obraz ="url(img/" + cards[nr] +")";
    $('#c'+nr).css('background-image', obraz);
    $('#c'+nr).addClass('cardA', obraz);
    $('#c'+nr).removeClass('card', obraz);
    
    if(oneVisible == false)
    {
        oneVisible = true;
        visible_nr = nr;
        lock=false;
    }
    else
    {
        if(visible_nr !=nr)
        {
            if(cards[visible_nr] == cards[nr])
            {
                setTimeout(function() { hide2cards(nr, visible_nr) }, 750);

            }
            else
            {
                setTimeout(function() { restore2cards(nr, visible_nr) }, 900);
            }
            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }
        else
        {
            lock = false;
        }
    }
    }
   
    
}

function hide2cards(nr1, nr2)
{
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    pairsLeft--;
    if(pairsLeft == 0)
    {
        $('.board').html('<br><br><h1>You win!<br>Done in '+ turnCounter+' turns</h1><br><h1><a href = "index.html">Play again</a></h1>');
    }
    lock = false;
}

function restore2cards(nr1, nr2)
{
    $('#c'+nr1).css('background-image', 'url(img/karta.png)');
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');
    
    $('#c'+nr2).css('background-image', 'url(img/karta.png)');
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');
    lock = false;
}