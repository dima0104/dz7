const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const URLP2 = '&units=metric&appid=';
const APIKEY = 'ae999d758e6fc36a4e3135d2707edf2f';
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let contain = document.querySelector('.ContainForInfo');
let ContainForTemp_FL = document.querySelector('.ContainForTemp_FL');
let ContainForClouds = document.querySelector('.ContainForClouds');
let ContainForImg = document.querySelector('.ContainForImg')
let city;
let info;

btn.addEventListener('click' , function(e){
    e.preventDefault();
    city = inp.value;
    inp.value = '';
    console.log(city)
    let req = fetch(`${URL}${city}${URLP2}${APIKEY}`);
    req     
    .then((response) => {
        if(response.ok === false){
            alert('There is no such city!');
        }
        return response.json();  
    })
    .then((data) => {
        info = data ;
        inf(info);
        contain.classList.add('able');
    });
})

let div_temp = document.createElement('div');
let div_feels_like = document.createElement('div');
let div_clouds = document.createElement('div');
let div_description = document.createElement('div');
let img_icon = document.createElement('img');

function inf(){
    //temp
    div_temp.textContent =  info.main.temp + ' ℃';
    div_temp.classList.add('divinfo')
    ContainForTemp_FL.append(div_temp);
    //feels_like
    div_feels_like.textContent = 'Feels like: '+ info.main.feels_like;
    div_feels_like.classList.add('divinfo')
    ContainForTemp_FL.append(div_feels_like);
    //clouds
    div_clouds.textContent =  info.weather[0].main;
    div_clouds.classList.add('divinfo');
    ContainForClouds.append(div_clouds);
    //description
    div_description.textContent =  info.weather[0].description;
    div_description.classList.add('divinfo');
    ContainForClouds.append(div_description);
    //icon
    img_icon.src = 'http://openweathermap.org/img/wn/' + info.weather[0].icon + '.png';
    img_icon.classList.add('icon');
    ContainForImg.append(img_icon);
}


