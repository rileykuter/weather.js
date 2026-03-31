document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById("placeInput");
    const button = document.getElementById("inputBTN");

    document.getElementById("homeBTN").onclick = () => window.open("index.html", "_self");
    document.getElementById("searchBTN").onclick = () => window.open("search.html", "_self");
    document.getElementById("radarBTN").onclick = () => window.open("radar.html", "_self");

    // Trigger search on button click
    button.addEventListener("click", geoLocate);

    async function geoLocate() {
        const place = input.value;

        if (!place) {
            console.log("No place entered");
            return;
        }

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            if (!data.length) {
                console.log("No results found");
                return;
            }

            const lat = data[0].lat;
            const lon = data[0].lon;

            console.log(lat, lon);

        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

});