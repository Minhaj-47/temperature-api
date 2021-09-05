const apiKey=`c30c5e8b516cf3b53988b0285512d92a`;
const searchTemperature =()=> {
    const city= document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

};
// setting innertext of the temperature data 
const setInnerText =(id,text)=>{
    document.getElementById(id).innerText =text;
};
// displaying temperature data 
const displayTemperature =temperature=>{
    setInnerText('city',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    const urlIcon=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon =document.getElementById('weather-icon');
    imageIcon.setAttribute('src',urlIcon);
    
};