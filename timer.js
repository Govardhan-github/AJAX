function showTime(){
    const date = new Date;
    return date.getHours() + "Hrs:" +date.getMinutes() +"Mins:"+ date.getSeconds() +"Secs:"; 
    
}
function showsessionExpire(){
    console.log("Activity-B: Your Session expired at "+showTime());

}
console.log("Axtivity-A: Triggering Activity-B at "+showTime());
setTimeout(showsessionExpire,5000);
console.log("Activity-A: Triggered Activity-B at "+showTime()+" will wxcute after 5scs");