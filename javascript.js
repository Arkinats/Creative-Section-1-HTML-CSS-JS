console.log("Start.");



/** HTML tag variables.  For some reason when used in continueStory() when init() is called on
 * page load, it fails.  Likely because the elements don't exist when called throwing a null exception.
 * These are currently not used as they are only used in continueStory().
 */
var storyBlock = document.getElementById("story-block");
var opt1 = document.getElementById("story-option1");
var opt2 = document.getElementById("story-option2");
var opt3 = document.getElementById("story-option3");

/* Declare global variables */
var story;
var image;
var button1;
var button2;
var button3;

/** This is called at the end of each button option to update the story and the button contents.
 *  Done by calling innerHTML so as to update button onclick calls and <p> styling of the story.
 */
var continueStory = function() {
    console.log("continueStory()"); /** debug checkpoint */
    /* button innerHTML strings */
    var buttonStart = '<button onclick="';
    var buttonEnd = '</button><br>';
    var imgTagStart = '<img src="media/';
    var imgTagEnd = '">'
    document.getElementById("story-image").innerHTML = imgTagStart + image + imgTagEnd;
    document.getElementById("story-block").innerHTML = story;
    document.getElementById("story-option1").innerHTML = buttonStart + button1 + buttonEnd;
    document.getElementById("story-option2").innerHTML = buttonStart + button2 + buttonEnd;
    document.getElementById("story-option3").innerHTML = buttonStart + button3 + buttonEnd;
}

/** Starts the story.  This can also be called to reset the story if dead or whatnot.
 * In order to make each button unique, I put the button onclick function call at the begining of the btn strings.
 */
var init = function() { // init
    console.log("init()"); /** debug checkpoint */
    image = "working.JPG";
    story = "<p>You are a blue collar sales rep at Callahan Auto.  You work sales, and are usually either on the phone or on the road.  You're in an open office environment, with several offices around the main floor.  There are probably about 7 other workers in the office today.</p><p>You're on the phone with a client, discussing brake pads when you smell smoke.  You look around and see dark, grey smoke billowing from underneath a nearby office door.</p>";
    button1 = 'do1()">Yell FIRE! as loud as you can.'; /** Go to do1() */
    button2 = 'do2()">Grab the office cat.'; /** Go to do2() */
    button3 = 'do3()">Run to the front door.'; /** Go to do3() */
    continueStory();
}

/** Story path 1, called from init() */
var do1 = function() { // 1 yell
    console.log("do1()"); /** debug checkpoint */
    image = "use-the-surge.JPG";
    story = "<p>You yell.  Everyone turns to you, confused.  Several then scan the room and notice the smoke. All heck breaks loose.</p>";
    button1 = 'do4()">Blow a fog horn from your desk.';
    button2 = 'do2()">Grab the office cat.';
    button3 = 'do3()">Run to the front door.';
    continueStory();
}

/** Story path 2, called from either init or 1 */
var do2 = function() { //2 save cat
    console.log("do2()"); /** debug checkpoint */
    image = "save-cat.jpg";
    story = "<p>You get up and walk over to the office cat.  She is sleeping calmly in her designated cat drawer.</p><p>Your office cat is a stuffed animal. Why are you wasting time picking up a stuffed animal?</p>";
    button1 = 'do6()">Save the stuffed cat anyway';
    button2 = 'do3()">Run to the front door';
    button3 = 'do7()">Break down crying because you cant actually afford a real cat';
    continueStory();
}
var do3 = function() { //check
    console.log("do3()"); /** debug checkpoint */
    image = "test-the-door.jpg";
    story = "<p>You run to the front door. Your office safety supervisor tells you to feel the door handle to make sure there isn't a fire on the other side</p>";
    button1 = 'do8()">Listen to the co-worker and test the door handle';
    button2 = 'do9()">Ignore the co-worker and try and climb through the ceiling';
    button3 = 'do10()">Panic';
    continueStory();
}
var do4 = function() { //check
    console.log("do4()"); /** debug checkpoint */
    image = "blowhorn.jpg";
    story = "<p>You stand up and blow the blowhorn!! Everyone around you is annoyed. Bad decision. At least they know there is a fire... What do you do next?</p>";
    button1 = 'do11()">Continue blowing the blowhorn';
    button2 = 'do2()">Save the office cat';
    button3 = 'do5()">Check the Windows';
    continueStory();
}
var do5 = function() {
    console.log("do5()"); /** debug checkpoint */
    image = "yell-thru-window.jpg";
    story = "<p>You run to the window and find that you are several stories up.</p>";
    button1 = 'do12()">Wildly yell out the window';
    button2 = 'do13()">Break the window';
    button3 = 'do10()">Panic!';
    continueStory();
}
var do6 = function() { // check
    console.log("do6()"); /** debug checkpoint */
    image = "save-cat.jpg";
    story = "<p>You put the stuffed cat on your shoulder. What do you do next?</p>";
    button1 = 'do1()">Yell FIRE! as loud as you can.'; /** Go to do1() */
    button2 = 'do2()">Grab the office cat.'; /** Go to do2() */
    button3 = 'do3()">Run to the front door.'; /** Go to do3() */
    continueStory();
}
var do7 = function() { //check
        image = "have-heart-attack.jpg"
        story = "<p>You Break down crying. Everyone quits what they are doing and comes to watch a grown man cry. Good things this was all a drill...</p><br><h3>The End</h3>";
        button1 = 'init()">Play Again??'; /** Go to do1() */
        button2 = 'init()">Play Again??'; /** Go to do2() */
        button3 = 'init()">Play Again??'; /** Go to do3() */
        continueStory();
    }
    /** Empty shell for the continuing story. */
var do8 = function() { //check
    console.log("doX()"); /** debug checkpoint */
    image = "really-hot-door.jpg";
    story = "<p>Its Really HOT! you burn your hand. Now what?</p>";
    button1 = 'do17()">Try another door';
    button2 = 'do5()">Try the window';
    button3 = 'do9()">Try the ceiling';
    continueStory();
}
var do9 = function() { // check
    console.log("doX()"); /** debug checkpoint */
    image = "go-thru-ceiling.jpg";
    story = "<p>You desperatly try and scramble through the panels in the ceiling...</p>";
    button1 = 'doA()">wait for it';
    button2 = 'doB()">wait for it';
    button3 = 'doC()">wait for it';
    setTimeout(do14(), 10000);
    continueStory();
}
var do10 = function() { //check
    console.log("doX()"); /** debug checkpoint */
    image = "have-heart-attack.jpg";
    story = "<p>You Panic. Your vision slowly closes in and you feel tight pain all through your chest. Being scared in a fire is a bad idea. Good thing is was all a drill</p>";
    button1 = 'init()">Play Again??'; /** Go to do1() */
    button2 = 'init()">Play Again??'; /** Go to do2() */
    button3 = 'init()">Play Again??'; /** Go to do3() */
    continueStory();
}
var do11 = function() { // check
    console.log("doX()"); /** debug checkpoint */
    image = "use-the-surge.jpg";
    story = "<p>Your co-worker gets ticked and points at you very angrily. I wish he would say something because this is very confusing.</p>";
    button1 = 'do3()">Try the front door';
    button2 = 'do5()">Try the window';
    button3 = 'do9()">Try the ceiling';
    continueStory();
}
var do12 = function() { //check
    console.log("doX()"); /** debug checkpoint */
    image = "yell-thru-window.jpg";
    story = "<p>You wildly yell out the window... nothing happens. What now?</p>";
    button1 = 'do13()">Break the window';
    button2 = 'do15()">Break the vending machine';
    button3 = 'do10()">Panic!!';
    continueStory();
}
var do13 = function() { //check
    console.log("doX()"); /** debug checkpoint */
    image = "transparancy-thru-window.jpg";
    story = "<p>You grab the nearest object... an overhead projector(who still has those by the way??) and chuck it at the window. It flies through the window and crushes your own car... Well Done. </p>";
    button1 = 'do10()">Panic!!';
    button2 = 'do16()">Jump';
    button3 = 'do9()">Try the ceiling';
    continueStory();
}
var do14 = function() { //check
    console.log("doX()"); /** debug checkpoint */
    image = "fall-thru-ceiling.jpg";
    story = "<p>Didn't work... now what?</p>";
    button1 = 'do3()">Try the front door';
    button2 = 'do5()">Try the window';
    button3 = 'do10()">Panic';
    continueStory();
}
var do15 = function() { //check
    console.log("doX()"); /** debug checkpoint */
    image = "raid-vending-machine.jpg";
    story = "<p>You raid the vending machine. Its Super Effective! You recieved 37 candy bars. On your way out of the room your fellow co-worker takes notice.</p>";
    button1 = 'do11()">Try and sneak away';
    button2 = 'do11()">Confront him';
    button3 = 'do11()">Eat your candy';
    continueStory();
}
var do16 = function() { //check
    console.log("doX()"); /** debug checkpoint */
    image = "splat.JPG";
    story = "<p>SSSSSSSSSSSSSPPPPPPPLLLLLAAT! Ouch!</p>";
    button1 = 'init()">Play Again??'; /** Go to do1() */
    button2 = 'init()">Play Again??'; /** Go to do2() */
    button3 = 'init()">Play Again??'; /** Go to do3() */
    continueStory();
}
var do17 = function() {
    console.log("doX()"); /** debug checkpoint */
    image = "test-another-door.JPG";
    story = "<p>You run to another door, and remembering your recent training, test the door.</p><p>The door handle is not hot.</p>";
    button1 = 'do18()">Go through the door.';
    button2 = 'do9()">Try the ceiling';
    button3 = 'do5()">Try the window';
    continueStory();
}
var do18 = function() {
    console.log("doX()"); /** debug checkpoint */
    image = "rush-into-next-room.jpg";
    story = "<p>You rush into the next room as fast as you can. Everyone in the office follows suit.</p><p>You happen to be on the top of the stairwell.";
    button1 = 'do2()">You forgot the office cat';
    button2 = 'do10()">Panic!';
    button3 = 'final()">Hurry down the stairs!';
    continueStory();
}
var final = function() {
    console.log("doX()"); /** debug checkpoint */
    image = "building-on-fire.jpg";
    story = "<p>You stumble out the side door.  What just happened?  You're not sure.  It's all a haze.  But you're safe and your co-workers are safe...  but where...  where's the office cat?</p>";
    button1 = 'init()">I forgot the cat...';
    button2 = 'init()">Play again!';
    button3 = 'init()">Exit, jk, start over!';
    continueStory();
}
var doX = function() {
    console.log("doX()"); /** debug checkpoint */
    image = "file.jpg";
    story = "<p>You stumble out the side door.  What just happened?  You're not sure.  It's all a haze.  But you're safe and your co-workers are safe...  but where...  where's the office cat?</p>";
    button1 = 'doA()">__';
    button2 = 'doB()">__';
    button3 = 'doC()">__';
    continueStory();
}