

// next put up a bar on the bottom saying how much was won
// each round 



// displays cards 
//  lets user discard and select one slot one time per round
//  up to five slots 
//  might be easiest to incorporate HandRank from poker_javascript.js
//   into this program 
// still need to either change the deck creation in this 
// program to include rank at the front
//  of change the HandRank funciton to add it there.
//  after, i can put Wallet into gameModel; 
//  create a form to bet up, and 
//   write to inner html to inform of wins and how much money
// when a player exchanges a card, show somehwere 
//  in a div  the status of the hand   and how much they're 
//   going to win 

// player card is suitFace

// need to turn HandRank into an object


function HandRank(somehand)
{
    
    //alert(somehand);
    // convert input hand to something this function can use
    // the oncoming hand is going to be suitF 
    //  this function needs int(rank), str(suit), str(face)
    //  the incoming suits are lowercase
    //   but i dont think it matters for this function
    //var temp_somehand = somehand;
    
    //alert(somehand);
    
    var temp_somehand = "";
    for (var t = 0; t < somehand.length;t++)
    {
        temp_somehand = temp_somehand + somehand[t] + ",";
    }
    
    //alert(temp_somehand);
    //alert(typeof temp_somehand);
    
    // have to turn player hand into a string because for 
    //  some reason it stays an object
    temp_somehand = temp_somehand.slice(0,temp_somehand.length-1);
    //alert(temp_somehand);
    temp_somehand = temp_somehand.split(",");
    //alert(temp_somehand);
    var temp_somehand_rank = "0,1,2,3,4,5,6,6,8,9,10,J,Q,K,A".split(",");
    
    temp_somehand_2 = [];
    
    for (var i = 0; i < temp_somehand.length; i++)
    {
        var j = temp_somehand[i].split("-");
        temp_somehand_2.push([temp_somehand_rank.indexOf(j[1]),j[0], j[1]]);
    }

    
    somehand = temp_somehand_2;
    
    
    /////////    HIGH CARD 
    
    // find the high card 
    var highcard = 0;
    var rank = [];  // last value is highcard, first is the rankthe hand
    var handvalue = 0;
    var handvaluearray = [0,0];
    var max = somehand[0].slice(0,1);
    for (var i = 1; i < somehand.length; i++)
    {
        
        if (max < somehand[i][0])
            
        {
            max = somehand[i][0];
        }
        
        
    }
    highcard = max;
    
     

    // This works  -- count the amount of each card in hand 
    
    // face card collection
    const handCollection = new Map();
    
    // suit collection
    const suitCollection = new Map();

    for (var i = 0; i < somehand.length; i++)
    {
        
       
        if (handCollection.has(somehand[i][0]))
        {
            
            
            handCollection.set(somehand[i][0], handCollection.get(somehand[i][0])+ 1);
            
        }
        else
        {
            handCollection.set(somehand[i][0],1);
        }
        if (suitCollection.has(somehand[i][1]))
        {
            suitCollection.set(somehand[i][1],suitCollection.get(somehand[i][1]) + 1);
        }
        else
        {
            suitCollection.set(somehand[i][1],1)
        }
    }
    ////////  End of Suit Collection 
  

    var playerhand = "";
    
    // this will create the key for the lookup table 
    var handcode = "";
    
    /////////  FLUSH 
    
    //   handcode value "f"
    var flush = false;
    // ** check for flush ....  give handcode value of "f"
    for (const [key,value] of suitCollection)
    {
        if (value == 5)
        {
            flush = true;
            handcode = "f";
        }
    }
    
    //document.write("first handcode: " +handcode);
    
    ///////////  STRAIGHT
    
    // ** check for straight ... if true add handcode value of "s"
    
    // get a list of the first values:
    var somehandSorted = [];
    for (var s = 0; s < somehand.length; s++)
    {
        somehandSorted.push(somehand[s][0]);
    }
    somehandSorted = somehandSorted.sort((a,b) => a - b);
    //document.write("sorted: <br>" + somehandSorted + "<br>");

    var straight = true;
    for (var i = 0; i < somehandSorted.length; i++)
    {
        if (somehandSorted[i] != somehandSorted[0] + i)
        {
            straight = false;
            //document.write("fail at comparison");
            
        }
        
    }
    
    if (straight == true)
    {
        handcode = handcode + "s";
    }
    
    ///////////    ROYAL 
    
    
    //   add handcode "r"
    if (handcode == "fs")
    {
        if (somehandSorted[0] == 10)
        {
            handcode = handcode + "r";
        }
    }
    
  
    /////////   THE REST
    /////////  PAIR 
    /////////      TWO PAIR
    /////////             THREE OF A KIND
    /////////                  FULL HOUSE
    /////////                      FOUR OF A KIND
    

    var handValuesList = [];
    for (const [key,value] of handCollection)
    {
        handValuesList.push(value);
    }
    //  sort the list 
    handValuesList = handValuesList.sort();
    //document.write(handValuesList);
    
    // turn the sorted list into a string of numbers for the Key 
    for (var i = 0; i < handValuesList.length; i++)
    {
        handcode = handcode + handValuesList[i].toString();
    }
    
    //document.write("handcode: " + handcode);
    //  compare the sorted list to a key lookup
    //  values for playerhand are here
    //   hand name, rank, points
    
    const HandRankLookup = new Map();
    HandRankLookup.set("11111",["high card",1,0]);
    HandRankLookup.set("1112",["pair",2,1]);
    HandRankLookup.set("122",["two pair",3,2]);
    HandRankLookup.set("113",["three of a kind",4,4]);
    HandRankLookup.set("s11111",["straight",5,5]);
    HandRankLookup.set("f11111",["flush",6,6]);
    HandRankLookup.set("23",["full house",7,10]);
    HandRankLookup.set("14",["four of a kind",8,20]);
   
    
    HandRankLookup.set("fs11111",["straight flush",9,50]);
    HandRankLookup.set("fsr11111",["royal flush",10,100]);
    

    

    //  look up handrand and return playerhand value
    if (HandRankLookup.has(handcode))
    {
        playerhand = HandRankLookup.get(handcode);
    }

    
    //document.write(playerhand);
    
    // handvalue = playerhand;
    
    //rank = [handvalue, highcard];
    
    rank = [playerhand,highcard]
    
    return rank;
    
    //return temp_somehand;
    
    
}




var showCard = {
    

card: function(location,face)
    {
    var cell = document.getElementById(location);
    cell.setAttribute("class",face);
    }


};


var gameModel = 
{
    discards: 0,
    cardslot1selected: false,
    cardslot2selected: false,
    cardslot3selected: false,
    cardslot4selected: false,
    cardslot5selected: false,
    
       
    
};


var Deck = 
{
    suit: "hearts,diamonds,spades,clubs".split(","),
    face: "2,3,4,5,6,7,8,9,10,J,K,Q,A".split(","),
    rank: "2,3,4,5,6,7,8,9,10,11,12,13,14".split(","),
    deck: [],
    

    CreateDeck: function()
    {
        // creates the deck
        
        for (var s = 0; s < this.suit.length; s++)
        {
            for (var f = 0;f < this.face.length; f++)
            {
                //   this works, so i can revert to it later if 
                //  i need to
                //this.deck.push(this.suit[s] + this.face[f]);
                //  im tyring this
                //
                this.deck.push(this.suit[s] + "-" + this.face[f]);
                
            }
        }
        
    },
    
    
    PickACard: function()
    {
        // returns a random card  from the deck and 
        //   drops the deck by 1
        var randomCardIdx = Math.floor(Math.random() * (this.deck.length -1));
    
        
        var cardPick = this.deck.splice(randomCardIdx,1);
        //alert(cardPick);
        
        
        return cardPick;
        
    }
    
};


var Player = 
{
    playerwallet: 20,
    
    hand: [],
    
    
    
    bet: 1,
    
    GetCard: function()
    {
        this.hand.push(Deck.PickACard());
    },
    
    CreateHand: function()
    {
        for (var i = 0;i < 5;i++)
        {
            this.GetCard();
        }
    },
    
    Discard: function(cardIdx)
    {
        // figure out which card is picked and discard it
        
        // this should dump a card by its index,
        //   and replace it with a randomly picked card from
        //   the deck
        this.hand.splice(cardIdx,1,Deck.PickACard());

        var slot = "card" + String(cardIdx + 1) ;
        
        var face = this.hand[cardIdx];
        
        showCard.card(slot,face);
        gameModel.discards++;
        //alert(gameModel.discards);
        if (gameModel.discards > 4)
        {   
            var message = HandRank(this.hand);
            var points = message[0][2];
            
            return this.Wallet(points);
            var credits = document.getElementById("credits");
            credits.innerHTML = this.Wallet(points);
            
        }
        
        
    },
    GetHand: function()
    {
        // return player hand so i can use HandRank function
        var hand = Object.values(this.hand);
        hand = hand[0];
        return hand;
    },
    Wallet: function(points)
    {
       

        this.playerwallet = this.playerwallet + (this.bet * points);
        return this.playerwallet;
        
        //return amount;
        //var credits = document.getElementById("credits");
        //credits.innerHTML = "Credits: " + this.wallet;
    
        
   
    }
    
};


var ShowHand = 
{
    
    playerCards: function()
    {
        for (var c = 0;c < Player.hand.length;c++)
        {   
             var ci = c+1;
             
             var cardslot = "card" + String(ci);
             
             
             // this is the old style
             showCard.card(cardslot,Player.hand[c]);
             
             
             
        }
    },
    
    cardSelected: function(slotnumber)
    {
        var selected = document.getElementById(slotnumber);
        selected.setAttribute("class","cardselected");
    },
    
    cardUnselected: function(slotnumber)
    {
        var idx = slotnumber.slice(4,5);
        var idx = Number(idx) - 1;
        var slot = Player.hand[idx];
        var unselected = document.getElementById(slotnumber);
        unselected.setAttribute("class",slot);
    }
    
    
};

Deck.CreateDeck();
Player.CreateHand();

window.onload = init;



// note:  add to gameModel a boolen that lets a user
//  only discard from one slot each during any one game

;

function init()
{

        ShowHand.playerCards();
        
        var slot1Image = document.getElementById("card1");
        slot1Image.onclick = ReplaceCard1;
        
        var slot2Image = document.getElementById("card2");
        slot2Image.onclick = ReplaceCard2;
        
        var slot3Image = document.getElementById("card3");
        slot3Image.onclick = ReplaceCard3;
        
        var slot4Image = document.getElementById("card4");
        slot4Image.onclick = ReplaceCard4;
        
        var slot5Image = document.getElementById("card5");
        slot5Image.onclick = ReplaceCard5;
        //alert(Deck.deck);
        
        var message = document.getElementById("gamestart");
        message.onclick = MessageCenter;
        
        // but up or down here
        // replace the call to the wallet function in 
        //  message center and put it here
        var betmessage = document.getElementById("betmessage");
        betmessage.innerHTML = "CURRENT BET:  " + Player.bet;
        
        var betu = document.getElementById("betup");
        betu.onclick = BetUp;
        
        var betd = document.getElementById("betdown");
        betd.onclick = BetDown;
        
        var playbutton = document.getElementById("playhand");
        playbutton.onclick = PlayTheHand;
        


}

function PlayTheHand()
{
    // need to get cards based on whats been selected
    if (gameModel.cardslot1selected)
    {
        Player.Discard(0);
    }
    
    if (gameModel.cardslot2selected)
    {
        Player.Discard(1);
    }
    
    if (gameModel.cardslot3selected)
    {
        Player.Discard(2);
    }
    
    if (gameModel.cardslot4selected)
    {
        Player.Discard(3);
    }
    
    if (gameModel.cardslot5selected)
    {
        Player.Discard(4);
    }
    
    // message = [[hand name, rank, points], [high card]]
    
    
    //Hand Rank returns the vallue of the hand
    //  
    var message = HandRank(Player.hand);
   
    messageboard = document.getElementById("messagecenter");
    messageboard.innerHTML = message[0][0];
    
    
    // calculate winnings
    var points = message[0][2];
    /*
    
    points = Number(points);
    Player.playerwallet = Player.playerwallet + (Player.bet * points);
    */
    
    var credits = document.getElementById("credits");
    credits.innerHTML = "Credits: " + Player.playerwallet;
    
    //Deck.CreateDeck();
    //Player.CreateHand();
    EndGameBackground();
    
}

function BetUp()
{
    Player.bet++;
    //alert(Player.bet);
    var betmessage = document.getElementById("betmessage");
    betmessage.innerHTML = "CURRENT BET:  " + Player.bet;
    
        
}

function BetDown()
{
    Player.bet--;
    if (Player.bet < 1)
    {
        Player.bet = 1;
    }
    var betmessage = document.getElementById("betmessage");
    betmessage.innerHTML = "CURRENT BET:  " + Player.bet;

    
}

function CalculateWin()
{
    var message = HandRank(Player.hand);
    var points = message[0][2];
    return Player.Wallet(points);
}

function MessageCenter()
{
    // message = [[hand name, rank, points], [high card]]
    
    
    //Hand Rank returns the vallue of the hand
    //  
    var message = HandRank(Player.hand);
   
    messageboard = document.getElementById("messagecenter");
    messageboard.innerHTML = message[0][0];
    
    
    // calculate winnings
    var points = message[0][2];
    /*
    
    points = Number(points);
    Player.playerwallet = Player.playerwallet + (Player.bet * points);
    */
    
    var credits = document.getElementById("credits");
    credits.innerHTML = "Credits: " + Player.Wallet(points);
}

function ReplaceCard1()
{
    
    if (gameModel.cardslot1selected)
    {
        gameModel.cardslot1selected = false;
        ShowHand.cardUnselected("card1");
        
    }
    else
    {
        ShowHand.cardSelected("card1");
        gameModel.cardslot1selected = true;
    }
    //ShowHand.playerCards();
}

function ReplaceCard2()
{
    if (gameModel.cardslot2selected)
    {
        gameModel.cardslot2selected = false;
        ShowHand.cardUnselected("card2");
        
    }
    else
    {
        ShowHand.cardSelected("card2");
        gameModel.cardslot2selected = true;
    }
    //Player.Discard(1);
    
    //ShowHand.playerCards();

    

}

function ReplaceCard3()
{
    if (gameModel.cardslot3selected)
    {
        gameModel.cardslot3selected = false;
        ShowHand.cardUnselected("card3");
        
    }
    else
    {
        ShowHand.cardSelected("card3");
        gameModel.cardslot3selected = true;
    }
    //Player.Discard(1);
    
    //ShowHand.playerCards();

    
}


function ReplaceCard4()
{
    if (gameModel.cardslot4selected)
    {
        gameModel.cardslot4selected = false;
        ShowHand.cardUnselected("card4");
        
    }
    else
    {
        ShowHand.cardSelected("card4");
        gameModel.cardslot4selected = true;
    }
    //Player.Discard(1);
    
    //ShowHand.playerCards();

    
}

function ReplaceCard5()
{
    if (gameModel.cardslot5selected)
    {
        gameModel.cardslot5selected = false;
        ShowHand.cardUnselected("card5");
        
    }
    else
    {
        ShowHand.cardSelected("card5");
        gameModel.cardslot5selected = true;
    }
    //Player.Discard(1);
    
    //ShowHand.playerCards();

    

}

/*
EndGameBackground()
{
    colors = document.getElementById("body1");
    colors.setAttribute("class","backgroundcolor1");
    colors.setAttribute("class","backgroundcolor2");
    colors.setAttribute("class","backgroundcolororiginal");
}
*/
/*
showCard.hearts2("card1");
showCard.hearts3("card2");
showCard.hearts4("card3");
showCard.clubs10("card4");
showCard.spadesK("card5");
*/

//Deck.CreateDeck();


//Player.CreateHand();
//alert(Player.hand);

//showCard.card("card1","hearts4");


