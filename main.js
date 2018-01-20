var sections = new Array(parseInt(prompt("How many Sections?")));



function Timer(time) {
    this.time = time * 60; /* how long the timer runs for */
    this.initialOffset = '440';
    this.i = 1
    this.timeObj = {}


}

function drawTimer() {
    var timer = currentTimer;
    console.log("hi!");
    $('.circle_animation').css('stroke-dashoffset', timer.initialOffset - (timer.i * (timer.initialOffset / timer.time)));

    timer.timeObj.hrs = Math.floor((timer.time - timer.i) / 60 / 60);
    timer.timeObj.min = Math.floor((timer.time - timer.i) / 60) - timer.timeObj.hrs * 60;
    timer.timeObj.sec = (Math.floor((timer.time - timer.i)) - timer.timeObj.min * 60) - timer.timeObj.hrs * 60 * 60;

    timer.timeObj.text = ("Hours: " + timer.timeObj.hrs + ", Minutes: " + timer.timeObj.min + ", Seconds: " + timer.timeObj.sec);

    $('h2.timeleft').text(timer.timeObj.text);
    $('h2.section').text(currentSection);

    if (timer.i == timer.time) {

        timer.i = 1;
        currentSection++;
        timer.time = sections[currentSection];
    }
    timer.i++;

}

for (let i = 0; i < sections.length; i++) {
    sections[i] = prompt("Length (Minutes) of Section #" + i + ":");

}

var currentSection = 0;
var tim = new Timer(sections[currentSection]);

var currentTimer = tim;
setInterval(drawTimer, 1000);