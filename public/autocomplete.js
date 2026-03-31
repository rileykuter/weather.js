document.addEventListener('DOMContentLoaded', () =>{

    const input = document.getElementById("cityInput");
    const dropdown = document.getElementById("dropdown");

const cities = [
"Sydney, Australia", "Melbourne, Australia", "Brisbane, Australia", "Perth, Australia", "Adelaide, Australia", "Canberra, Australia", "Hobart, Australia", "Darwin, Australia", "Gold Coast, Australia", "Newcastle, Australia",
"Auckland, New Zealand", "Wellington, New Zealand", "Christchurch, New Zealand", "Hamilton, New Zealand", "Dunedin, New Zealand", "Queenstown, New Zealand",
"New York, United States", "Los Angeles, United States", "Chicago, United States", "Houston, United States", "Phoenix, United States", "Philadelphia, United States", "San Antonio, United States", "San Diego, United States", "Dallas, United States", "San Jose, United States",
"Austin, United States", "Jacksonville, United States", "Fort Worth, United States", "Columbus, United States", "Charlotte, United States", "San Francisco, United States", "Indianapolis, United States", "Seattle, United States", "Denver, United States", "Washington, United States",
"Boston, United States", "El Paso, United States", "Nashville, United States", "Detroit, United States", "Oklahoma City, United States", "Portland, United States", "Las Vegas, United States", "Memphis, United States", "Louisville, United States", "Baltimore, United States",
"Milwaukee, United States", "Albuquerque, United States", "Tucson, United States", "Fresno, United States", "Sacramento, United States", "Kansas City, United States", "Atlanta, United States", "Miami, United States", "Raleigh, United States", "Omaha, United States",
"Toronto, Canada", "Montreal, Canada", "Vancouver, Canada", "Calgary, Canada", "Edmonton, Canada", "Ottawa, Canada", "Winnipeg, Canada", "Quebec City, Canada", "Hamilton, Canada", "Kitchener, Canada",
"Mexico City, Mexico", "Guadalajara, Mexico", "Monterrey, Mexico", "Puebla, Mexico", "Tijuana, Mexico", "Leon, Mexico", "Juarez, Mexico",
"London, United Kingdom", "Birmingham, United Kingdom", "Manchester, United Kingdom", "Liverpool, United Kingdom", "Leeds, United Kingdom", "Glasgow, United Kingdom", "Edinburgh, United Kingdom", "Bristol, United Kingdom", "Cardiff, United Kingdom", "Belfast, United Kingdom",
"Paris, France", "Marseille, France", "Lyon, France", "Toulouse, France", "Nice, France", "Nantes, France", "Strasbourg, France", "Montpellier, France", "Bordeaux, France", "Lille, France",
"Berlin, Germany", "Hamburg, Germany", "Munich, Germany", "Cologne, Germany", "Frankfurt, Germany", "Stuttgart, Germany", "Dusseldorf, Germany", "Dortmund, Germany", "Essen, Germany", "Leipzig, Germany",
"Madrid, Spain", "Barcelona, Spain", "Valencia, Spain", "Seville, Spain", "Zaragoza, Spain", "Malaga, Spain", "Bilbao, Spain", "Granada, Spain",
"Rome, Italy", "Milan, Italy", "Naples, Italy", "Turin, Italy", "Palermo, Italy", "Genoa, Italy", "Bologna, Italy", "Florence, Italy", "Venice, Italy", "Verona, Italy",
"Amsterdam, Netherlands", "Rotterdam, Netherlands", "The Hague, Netherlands", "Utrecht, Netherlands", "Eindhoven, Netherlands",
"Brussels, Belgium", "Antwerp, Belgium", "Ghent, Belgium", "Charleroi, Belgium",
"Vienna, Austria", "Graz, Austria", "Linz, Austria", "Salzburg, Austria",
"Zurich, Switzerland", "Geneva, Switzerland", "Basel, Switzerland", "Lausanne, Switzerland",
"Stockholm, Sweden", "Gothenburg, Sweden", "Malmo, Sweden", "Uppsala, Sweden",
"Oslo, Norway", "Bergen, Norway", "Trondheim, Norway",
"Copenhagen, Denmark", "Aarhus, Denmark", "Odense, Denmark",
"Helsinki, Finland", "Espoo, Finland", "Tampere, Finland",
"Warsaw, Poland", "Krakow, Poland", "Lodz, Poland", "Wroclaw, Poland", "Poznan, Poland",
"Prague, Czech Republic", "Brno, Czech Republic", "Ostrava, Czech Republic",
"Budapest, Hungary", "Debrecen, Hungary", "Szeged, Hungary",
"Athens, Greece", "Thessaloniki, Greece", "Patras, Greece",
"Lisbon, Portugal", "Porto, Portugal", "Braga, Portugal",
"Dublin, Ireland", "Cork, Ireland", "Limerick, Ireland",
"Moscow, Russia", "Saint Petersburg, Russia", "Novosibirsk, Russia", "Yekaterinburg, Russia", "Kazan, Russia",
"Istanbul, Turkey", "Ankara, Turkey", "Izmir, Turkey", "Bursa, Turkey", "Antalya, Turkey",
"Tokyo, Japan", "Yokohama, Japan", "Osaka, Japan", "Nagoya, Japan", "Sapporo, Japan", "Kobe, Japan", "Kyoto, Japan", "Fukuoka, Japan", "Hiroshima, Japan", "Sendai, Japan",
"Seoul, South Korea", "Busan, South Korea", "Incheon, South Korea", "Daegu, South Korea", "Daejeon, South Korea",
"Beijing, China", "Shanghai, China", "Guangzhou, China", "Shenzhen, China", "Chengdu, China", "Chongqing, China", "Tianjin, China", "Wuhan, China", "Xi'an, China", "Hangzhou, China",
"Nanjing, China", "Harbin, China", "Suzhou, China", "Qingdao, China", "Dalian, China",
"Mumbai, India", "Delhi, India", "Bangalore, India", "Hyderabad, India", "Ahmedabad, India", "Chennai, India", "Kolkata, India", "Pune, India", "Jaipur, India", "Surat, India",
"Bangkok, Thailand", "Chiang Mai, Thailand", "Phuket, Thailand",
"Hanoi, Vietnam", "Ho Chi Minh City, Vietnam", "Da Nang, Vietnam",
"Jakarta, Indonesia", "Surabaya, Indonesia", "Bandung, Indonesia",
"Manila, Philippines", "Quezon City, Philippines", "Cebu City, Philippines",
"Kuala Lumpur, Malaysia", "George Town, Malaysia", "Johor Bahru, Malaysia",
"Singapore, Singapore",
"Dubai, United Arab Emirates", "Abu Dhabi, United Arab Emirates", "Sharjah, United Arab Emirates",
"Riyadh, Saudi Arabia", "Jeddah, Saudi Arabia", "Mecca, Saudi Arabia", "Medina, Saudi Arabia",
"Doha, Qatar",
"Kuwait City, Kuwait",
"Muscat, Oman",
"Tel Aviv, Israel", "Jerusalem, Israel", "Haifa, Israel",
"Cairo, Egypt", "Alexandria, Egypt", "Giza, Egypt",
"Lagos, Nigeria", "Abuja, Nigeria", "Kano, Nigeria", "Ibadan, Nigeria",
"Nairobi, Kenya", "Mombasa, Kenya",
"Johannesburg, South Africa", "Cape Town, South Africa", "Durban, South Africa", "Pretoria, South Africa",
"Casablanca, Morocco", "Rabat, Morocco", "Marrakesh, Morocco",
"Algiers, Algeria", "Oran, Algeria",
"Tunis, Tunisia", "Sfax, Tunisia",
"Accra, Ghana", "Kumasi, Ghana",
"Dakar, Senegal",
"Addis Ababa, Ethiopia",
"Dar es Salaam, Tanzania",
"Kampala, Uganda",
"Harare, Zimbabwe",
"Sao Paulo, Brazil", "Rio de Janeiro, Brazil", "Brasilia, Brazil", "Salvador, Brazil", "Fortaleza, Brazil", "Belo Horizonte, Brazil", "Manaus, Brazil", "Curitiba, Brazil", "Recife, Brazil", "Porto Alegre, Brazil",
"Buenos Aires, Argentina", "Cordoba, Argentina", "Rosario, Argentina",
"Santiago, Chile", "Valparaiso, Chile",
"Lima, Peru", "Arequipa, Peru",
"Bogota, Colombia", "Medellin, Colombia", "Cali, Colombia",
"Caracas, Venezuela",
"Quito, Ecuador", "Guayaquil, Ecuador",
"Montevideo, Uruguay",
"Asuncion, Paraguay",
"La Paz, Bolivia", "Santa Cruz, Bolivia"
]

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    dropdown.innerHTML = "";

    if (!value) {
        dropdown.classList.add("hidden");
        return;
    }

    const filtered = cities.filter(city =>
        city.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
        dropdown.classList.add("hidden");
        return;
    }

    filtered.forEach(city => {
        const item = document.createElement("div");
        item.textContent = city;
        item.className =
        "p-2 cursor-pointer hover:bg-[#454647]";

    item.addEventListener("click", () => {
        input.value = city;
        dropdown.classList.add("hidden");
        });

        dropdown.appendChild(item);
    });

    dropdown.classList.remove("hidden");
    });

// Hide dropdown if clicking outside
    document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add("hidden");
    }
    });
});