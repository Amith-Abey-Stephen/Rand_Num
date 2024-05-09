const min=1000;
const max=9999;



document.getElementById("sub").onclick= function(){
    let randomnom = Math.floor(Math.random() *(max-min))+min;
    console.log(randomnom);
    document.getElementById("value").textContent = randomnom;
}