function showTime(){
    const currentTime=new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    console.log(time);
    document.getElementById('Time').innerText=time;
}
showTime();
let interval=setInterval(showTime,1000);
const button=document.getElementById('stop-btn');
button.addEventListener('click',()=>{
    clearInterval(interval);
})
function stopTimer(){

}