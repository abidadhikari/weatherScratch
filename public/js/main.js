
const cityName=document.getElementById("cityName");
const submitBtn=document.getElementById("submitBtn");
const dataBox=document.getElementById("dataBox");
const getInfo=async(event)=>{
    event.preventDefault();
    let query=cityName.value;
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appId}`;
    if (query=="") {
        alert("khali xa ta bhai")
    } else {
        const request= await fetch(url);
        const raw=await request.json();
        const data=[raw][0];
        dataBox.innerHTML=data.main.temp;
    }
    
}

submitBtn.addEventListener("click",getInfo);
