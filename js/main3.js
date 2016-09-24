
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } 
    return i;
}

function displayTime() {
    var currentTime = new Date();
    var h = currentTime.getHours();	
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    if (h > 12) {
        h -= 12;
    } 

    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(function () {
        displayTime()
    }, 1000);
}
