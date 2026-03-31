// Wait for Loaded

document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById("cityInput");
    const button = document.getElementById("weatherBTN");
    const unit = ["metric", "imperial"];
    var option = 0;
    var degrees = "°C";

document
    .getElementById("unitSwitch")
    .addEventListener("change", optionSwitch);

document
    .getElementById("weatherBTN")
    .addEventListener("click", getWeather);

document.getElementById("homeBTN").onclick = () => window.open("index.html", "_self");
document.getElementById("searchBTN").onclick = () => window.open("search.html", "_self");
document.getElementById("radarBTN").onclick = () => window.open("radar.html", "_self");


// Random Integer

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    const result = Math.floor(Math.random() * (max - min)) + min;

    console.log(result);
    return(result);
}

async function optionSwitch(e) {
    try {

    if (e.target.checked) {
        option = 1;
        degrees = "°F";
        setCookie("lastDegrees", degrees, 7);

    } else {
        option = 0;
        degrees = "°C";
        setCookie("lastDegrees", degrees, 7);

    }

    response = unit[option];
    console.log(unit[option]);
    setCookie("lastUnits", unit[option], 7);
    cookieWeather()

    } catch (error) {
    console.log(error);
}
}

// Cookies

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days*24*60*60*1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    console.log("cookie saved")
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}

// Get the Cookies data

async function cookieWeather() {

    const city = getCookie("lastCity");
    const units = getCookie("lastUnits");
    const degrees = getCookie("lastDegrees")

    document.getElementById("weatherInfo").innerHTML = `
        <img src="media/loadingwheel.webp" class="scale-20">
    `;

    const response = await fetch(`/weather?city=${city}&units=${units}`);
    const data = await response.json();

    document.getElementById("title").innerHTML = `
        ${data.name} - weather.js
    `;

    document.getElementById("cityName").innerHTML = `
        <h1 id="cityname">${data.name}</h1>
    `;

    document.getElementById("weatherInfo").innerHTML = `
        <p id="temp">Current: ${Math.round(data.main.temp)}${degrees}</p>
        <p id="min">Min: ${Math.round(data.main.temp_min)}${degrees}</p>
        <p id="max">Max: ${Math.round(data.main.temp_max)}${degrees}</p>
        <p id="desc">${toTitleCase(data.weather[0].description)}</p>
        `;
}

// Search on enter

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
    event.preventDefault();
    button.click();
}
})

// Capitalize First Letters

function toTitleCase(str) {
    if (!str) return "";
    return str
        .split(" ")              
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Get the weather from the cookies

    cookieWeather();

// Get the unit from the cookies

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("unitSwitch").checked = getCookie("lastUnits") === unit[1]
});


// Get the weather

    async function getWeather() {
        try {
            document.getElementById("weatherInfo").innerHTML = `
                <img src="media/loadingwheel.webp" class="scale-20">
                `;
            const city = document.getElementById("cityInput").value;
            const units = unit[option];

            const response = await fetch(`/weather?city=${city}&units=${units}`);
            const data = await response.json();
            console.log(data);

            document.getElementById("cityName").innerHTML = `
                <h1 id="cityname">${data.name}</h1>
            `;

            document.getElementById("title").innerHTML = `
                ${data.name} - weather.js
            `;

            document.getElementById("subHeading").innerHTML = `
                Overview
            `;

            document.getElementById("weatherInfo").innerHTML = `
                <p id="temp">Current: ${Math.round(data.main.temp)}${degrees}</p>
                <p id="min">Min: ${Math.round(data.main.temp_min)}${degrees}</p>
                <p id="max">Max: ${Math.round(data.main.temp_max)}${degrees}</p>
                <p id="desc">${toTitleCase(data.weather[0].description)}</p>
            `;

            setCookie("lastCity", city, 7);

            } catch(error) {

                console.log(error);

                const city = document.getElementById("cityInput").value;

                document.getElementById("title").innerHTML = `
                error - weather.js
                `;

                document.getElementById("cityName").innerHTML = `
                    <h1 id="cityname">City Name</h1>
                `;

                document.getElementById("weatherInfo").innerHTML = `
                    <img src="media/loadingwheel.webp" class="scale-20">
                `;

                setTimeout(() => {
                document.getElementById("subHeading").innerHTML = `
                400
                `

                document.getElementById("weatherInfo").innerHTML = `
                    <p>${toTitleCase(city)} not found</p>
                    <p>Check spelling or try again</p>
                `;

                document.getElementById("cityName").innerHTML = `
                    <h1 id="cityname">Error :(</h1>
                `;

            }, Math.floor(getRandomInt(1000, 3000)));
    }

}})