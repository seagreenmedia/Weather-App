function getWeather() {

    let userZip = document.getElementById("userZip").value;

    weatherByZip = new XMLHttpRequest();

    weatherByZip.open("GET", `http://api.zippopotam.us/us/${userZip}`, true);
    weatherByZip.onload = function() {
        return userZip;
    }

    weatherByZip.onreadystatechange = function() {
        if (weatherByZip.readyState === 4 && weatherByZip.status === 200) {
            let data = JSON.parse(weatherByZip.response)
            console.log(data)
            document.getElementById("data").src = data.responseText

            let city = data.places[0]["place name"]
            let state = data.places[0]["state abbreviation"]
            document.getElementById("weatherByZip").innerHTML = `${city}, ${state}`;
        }
    }
    let getLongitude = data.places.longitude;
    let getLatitude = data.places.latitude;

    weatherData = new XMLHttpRequest();
    weatherData.open("GET", `http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0`, true);


    //request long and lat data from zippo

    weatherByZip.send();
}









// function newDogPic() {
//     let dogs = new XMLHttpRequest();
//     dogs.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             let doggy = JSON.parse(this.response);
//             document.getElementById("dogPic1").src = doggy.message[0];
//             document.getElementById("dogPic2").src = doggy.message[1];
//             document.getElementById("dogPic3").src = doggy.message[2];
//         }
//     };
//     dogs.open('GET', `https://dog.ceo/api/breeds/image/random/3`, true);
//     dogs.send();
// }


// // Input Element to get number
// // Button to trigger fetch (onclick)
// // Call the Pokemons (rest request sent to server)
// // Update HTML

// let sampleData = {
//     "id": 8,
//     "name": "Wartortle",
//     "img": "https://img.pokemondb.net/sprites/bank/normal/wartortle.png"
// }

// function updateHTML(data) {
//     document.getElementById("img").src = data.img;
//     document.getElementById("name").innerText = data.name;
// }

// updateHTML(sampleData);

// //

// function getPokemonData(id) {

//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let data = JSON.parse(this.response)
//             updateHTML(data);
//         }
//     };

//     xhttp.open("GET", `https://127.0.0.1:3000/pokemon/${id}`, true);
//     xhttp.send();
// }

// function updatePokemon() {
//     document.getElementById("pokemonId").value;
//     getPokemonData(pokemonId);
// }