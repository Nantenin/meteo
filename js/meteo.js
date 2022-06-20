const APIKEY = `575414e22ab6abf1389270595ea66c4b`;

/* Appel a l'API openweather avec ville en paramètre de fonction  */
let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then(response => 
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
        
        document.querySelector('#icon').innerHTML =  data.weather[0].description ;
    })
    ).catch(err => console.log('Erreur : ' + err));


}
/* Ecouteur d'evenement sur la soumission du formulaire */
    document.querySelector('form').addEventListener('submit' , function(e) {
        e.preventDefault();
        let ville = document.querySelector('#inputCity').value;

        apiCall(ville);
    });

/** Appel par defaut au chargement */
    apiCall('Dakar');