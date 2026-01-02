////////////////////////////////////
///////    DRAW POKER    ///////////
////////////////////////////////////
//
//
//

// random  
//  Math.floor(Math.random() * 14) for index for cardnumber

//  Math.floor(Math.random() * 4) for index for suits

//  Math.floor(Math.random() * 52)  for a random card 
//  somearray.splice(start,noofelements)

/*
 const myMap = new Map();

// Setting key-value pairs
myMap.set("name", "Bob");
myMap.set(1, "one"); // Keys can be of any type
myMap.set({ id: 123 }, "User Object");

// Getting values
console.log(myMap.get("name")); // Bob
console.log(myMap.get(1)); // one

// Checking for key existence
console.log(myMap.has("name")); // true

// Deleting entries
myMap.delete(1);

// Iterating over a Map
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
 */


function ShowHand(somehand)
{
    // function will return playerrank  as hand type,rank,points
    //  and high card
    //   [ [hand type, rank, points] , [high card (rank)]]
    //  new argument will be in the form of 
    //document.write("<br>function ShowHand<br>");
    var alertmessage = "Your new hand is:\n\n";
    var suit = "";
    var face = "";
    for (var s = 0; s < somehand.length; s++)
    {
        //document.write(somehand[s]);
        suit = somehand[s].slice(1,2);
        face = somehand[s].slice(-1);
        //document.write(somehand[s].splice(0,1));
        
        //document.write("<br>** " + face + " of " + suit);
        alertmessage = alertmessage + face + " of " + suit + " \n";
        
        
    }
    alert(alertmessage);
    
}


function CreateMessage(somehand)
{
    var message = "Please enter your discard choices according to the number in the brackets\n\nYou may select up to five\n\nEenter the numbers with spaces separating them instead of commas\n\n";
    var suit = "";
    var face = "";
    for (var s = 0; s < somehand.length; s++)
    {
        //document.write(somehand[s]);
        suit = somehand[s].slice(1,2);
        face = somehand[s].slice(-1);
        //document.write(somehand[s].splice(0,1));
        
        document.write("<br>** " + face + " of " + suit);
        message = message + "[ " + s.toString() + " ]  " + face + " of " + suit + " \n";
    }
        
    return message;


}


function HandRank(somehand)
{
    
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
}

function ShowRank(playerrank)
{
    document.write("<br>hand: "+playerrank[0][0]);
    document.write("<br>rank: "+playerrank[0][1]);
    document.write("<br>points: "+playerrank[0][2]);
    document.write("<br>high card: "+playerrank[1]);

    var message = "Your hand's rank:\n\n";
    //alert(typeof playerrank[0][1]);
    if (playerrank[0][1] == 1)
    {
        message = message + "High card only.  No points.";

    }
    else
    {

        message = message + ("A " + playerrank[0][0] + " is worth " + playerrank[0][2] + " points.");

    }
    alert(message);

    
}
function CreateDeck()
{
    var cardnumber = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    var cardface = ["2","3","4","5","6","7","8","9","10","J","Q","K","A",];

    // 1 hearts 2 spades 3 diamonds 4 clubs
    var suit = ["Clubs","Diamonds","Spades","Hearts"];

    //  create a deck 
    var deck = [];
    for (var s = 0; s < suit.length; s++ )
    {
        for (var c = 0; c < cardnumber.length; c++)
            deck.push([cardnumber[c] , suit[s],cardface[c]]);
    }
    
    return deck;
}


function CreatePlayerHand(deck, no_cards)
{
    // 2 parameters 
    // 
    var player = [];
    var randomcard = 0;
    while (player.length < no_cards)
    {
        randomcard = Math.floor(Math.random() * (deck.length-1));
        //document.write(randomcard + "<br>");
            
        if (deck.length > randomcard)
        {
            
        player.push(deck[randomcard]);
        deck.splice(randomcard,1);
        }
        
    }
    
    return player;

}



// high card  works
//player = [[14,"Hearts","A"] ,[4,"Clubs","4"] ,[5,"Spades","5"] ,[6,"Spades","6"] ,[7,"Spades","7"] ];

//player = [[2,"Spades","2"],[6,"Spades","6"],[7,"Spades","7"],[10,"Spades","10"],[12,"Spades","Q"]];

// sample pair
//player = [[3,"Diamonds","3"] ,[3,"Spades","3"] ,[4,"Spades","4"] ,[5,"Spades","5"] ,[6,"Spades","6"] ];



// sample two pair
//player = [[13,"Diamonds","Q"] ,[13,"Spades","Q"] ,[4,"Diamonds","4"] ,[4,"Spades","4"] ,[11,"Hearts","J"] ];

// player = 

// sample three of a kind  works
//player  = [[3,"Hearts","3"] ,[3,"Diamonds","3"] ,[6,"Diamonds","6"] ,[14,"Diamonds","A"] ,[3,"Clubs","3"] ];
// player = 

// sample full house  works  
//player  = [[2,"Hearts","2"] ,[2,"Clubs","2"] ,[2,"Diamonds","2"] ,[10,"Diamonds","10"] ,[10,"Spades","10"] ];

// four of a kind   works
// player = [[10,"Hearts","10"] ,[10,"Clubs","10"] ,[10,"Diamonds","10"] ,[10,"Spades","10"] ,[11,"Spades","J"] ];

// flush   works
//player = [[2,"Hearts","2"] ,[8,"Hearts","8"] ,[14,"Hearts","A"] ,[13,"Hearts","Q"] ,[6,"Hearts","6"] ];
//player  = [[4,"Hearts","4"] ,[6,"Hearts","6"] ,[8,"Hearts","8"] ,[10,"Hearts","10"] ,[12,"Hearts","K"] ];

//player = [[2,"Diamonds","2"] ,[4,"Diamonds","4"] ,[6,"Diamonds","6"] ,[7,"Diamonds","7"] ,[8,"Diamonds","8"] ];

//  straight  works
//player =  [[2,"Hearts","2"] ,[3,"Diamonds","3"] ,[4,"Spades","4"] ,[5,"Spades","5"] ,[6,"Spades","6"] ];
//player =  [[6,"Diamonds","6"] ,[7,"Spades","7"] ,[8,"Diamonds","8"] ,[9,"Diamonds","9"] ,[10,"Diamonds","10"] ];

//  straight flush   works 
//player = [[3,"Hearts","3"] ,[4,"Hearts","4"] ,[5,"Hearts","5"] ,[6,"Hearts","6"] ,[7,"Hearts","7"] ];
//player = [[5,"Diamonds","5"] ,[6,"Diamonds","6"] ,[7,"Diamonds","7"] ,[8,"Diamonds","8"] ,[9,"Diamonds","9"] ];

// royal flush    works
//player  = [[10,"Diamonds","10"] ,[11,"Diamonds","J"] ,[12,"Diamonds","K"] ,[13,"Diamonds","Q"] ,[14,"Diamonds","A"] ];
//player  = [[10,"Hearts","10"] ,[11,"Hearts","J"] ,[12,"Hearts","K"] ,[13,"Hearts","Q"] ,[14,"Hearts","A"] ];
var continuegame = "y";

var wallet = 10;

while (continuegame == "y")
{
    
    var bet = 0;
    var message = "";
    var choice = "";
    var newhand = false;
    var selectionlist = []
    
    // create a new deck
    var deck = CreateDeck();
    //alert("new deck length: " + deck.length);
    

    //  select 5 cards from deck
    var player = CreatePlayerHand(deck,5);

    // make player bet 
    bet = prompt('You have: ' + wallet + ' credits.  Please enter bet >> ');
    bet = Number(bet);
    
    
    // show the hand
     
    message = CreateMessage(player);
    //alert(message);
    
    choice = prompt(message);
    if (choice != "")
    {
        choice = choice.split(' ');
        //alert(choice);
    
        // remove chosen cards from player hand
        var dropped_cards = [];
        var temp_hand = [];
        var remove_cards = [];

        for (var i = 0; i < choice.length; i++)
        {
            
            k = Number(choice[i]);
            //alert(k);
            
            remove_cards.push(player[k]);
            
        }
        
        for (var i = 0; i < remove_cards.length; i++)
        {
            const idx = player.indexOf(remove_cards[i]);
            //alert(idx);
            if (idx > -1){
                player.splice(idx,1);
            }
        }
        
        //alert("dropped cards: " + remove_cards);
        //alert("you dropped: " + dropped_cards);
        //alert("your hand has: "+player);
    
      
        //  fill in the player hand with any new cards
        var numberNewCards = 5 - player.length;
        var more_cards = CreatePlayerHand(deck,numberNewCards);
        //alert("cards youre getting: " + more_cards);
        //alert(player);
        for (var i = 0; i < more_cards.length; i++)
        {
            player.push(more_cards[i])
        }
        
        //var ph = "Your new hand: \n\n";

        //for (var i = 0; i < player.length; i ++)
        //{
        //    ph = ph + player[i][1] + "of" + player[i][2];
        //}
        //alert(ph);
        //  subtract lenght of choice from 5
        //  use this as parameter in
        //CreatePlayerHand(deck,somenumber)
        //  send the return value to a new list
        //  cycle through the new list and append those to the
        //  player hand 
        ///  this is the new hand
    
         
    
    }
    
    ////////// choice will allow player to select cards once
    //         during round 
    
    
    
    // show the hand
    ShowHand(player);
    
    
    //  find the rank
    var playerrank = HandRank(player);

    
    
    // show the rank
    ShowRank(playerrank);
    
    // determine win (if any)
    //var win = CalculateWin(playerrank,bet);
    var winpoints = playerrank[0][2];
    var winamount = 0;
    if (winpoints == 0)
    {
        wallet = wallet - bet;  // lose money if no bet
    }
    else
    {
        winamount = bet * winpoints;  // determine win
        wallet = wallet + winamount;  // add to wallet 
    }
    
    alert("you won: " + winamount  + "    you have: " + wallet)
    
    //  determine wallet value
    //var wallet = Purse(win);
    
    continuegame = prompt("[y] to continue....")
    

}
