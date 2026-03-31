// Wait for Loaded

document.addEventListener('DOMContentLoaded', () => {

    const sydney = document.getElementById("sydney");
    const cairo = document.getElementById("cairo");
    const tokyo = document.getElementById("tokyo");
    const london = document.getElementById("london");
    const newYork = document.getElementById("nyc");
    const mexico = document.getElementById("mxc");

// Set units

const unit = ["metric", "imperial"];
var option = 0;
var degrees = "C°";

// Get the unit from the cookies

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("unitSwitch").checked = getCookie("lastUnits") === unit[1]
});

document
    .getElementById("unitSwitch")
    .addEventListener("change", optionSwitch);

// Unit switch function

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

    load();

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

// Go to search

document.getElementById("homeBTN").onclick = () => window.open("index.html", "_self");
document.getElementById("searchBTN").onclick = () => window.open("search.html", "_self");
document.getElementById("radarBTN").onclick = () => window.open("radar.html", "_self");

// Capitalize First Letters

function toTitleCase(str) {
    if (!str) return "";
    return str
        .split(" ")              
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Get weather

async function getWeather(city, output) {

    try {

        const units = getCookie("lastUnits");
        const degrees = getCookie("lastDegrees")

        const response = await fetch(`/weather?city=${city}&units=${units}`);
        const data = await response.json();
        console.log(data);

        document.getElementById(output).innerHTML = `
            <p id="temp">Current: ${Math.round(data.main.temp)}${degrees}</p>
            <p id="min">Min: ${Math.round(data.main.temp_min)}${degrees}</p>
            <p id="max">Max: ${Math.round(data.main.temp_max)}${degrees}</p>
            <p id="desc">${toTitleCase(data.weather[0].description)}</p>
        `;

        } catch(error) {
            console.log('ERROR: ', error);
            document.getElementById(output).innerHTML = `
            <h1>Loading...</h1>
            `;

            setTimeout(() => {
            document.getElementById(output).innerHTML = `
            <p>weather not found</p>
            `;

        }, 1200);
    }
}

// Load function

async function load() {
        getWeather("Brisbane", "bneOver");
        getWeather("Cairo", "cairoOver");
        getWeather("Tokyo", "tokyoOver");
        getWeather("London", "londonOver");
        getWeather("New York", "nycOver");
        getWeather("Tel Aviv", "mxcOver");
}

// Content

window.onload = () => {
        getWeather("Brisbane", "bneOver");
        getWeather("Cairo", "cairoOver");
        getWeather("Tokyo", "tokyoOver");
        getWeather("London", "londonOver");
        getWeather("New York", "nycOver");
        getWeather("Tel Aviv", "mxcOver");
}

});