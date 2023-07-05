window.setInterval("displayClock()",1000);
window.setInterval("changeBGColor()",1000);

// displaying digital clock
function displayClock()
{
    let d = new Date();
    let st = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}\n:${d.toDateString()}  `;
    time.value = st;

}

function changeBGColor()
{
    // random() generates a random between 0 to 1
    let c = parseInt(Math.random()*1000000);
    document.getElementById("b").style.backgroundColor=`#${c}`;//changing the bg color
    document.getElementById("b").style.color=`#${c}`;
    console.log(c);
}