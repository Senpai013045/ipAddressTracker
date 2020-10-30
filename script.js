let map = L.map("map");
map.setView([-33.8688, 151.209], 0);
map.flyTo([-33.8688, 151.209], 15);
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KIgo2TvlDDD69kwl8OUo",
  {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
  }
).addTo(map);
let marker = L.marker([-33.8688, 151.209]).addTo(map);

function updateMap(lat, lng) {
  marker.setLatLng([lat, lng]);
  map.flyTo([lat, lng], 15);
}

const form = document.querySelector(".header__form");
const input = document.querySelector(".header__form__input");

function updateInfo(title, info) {
  let qs = "." + title + " " + ".panel__detail";
  console.log(qs);
  document.querySelector(qs).textContent = info;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  let query;
  if (value.trim() === "") {
    return;
  }
  if (typeof value[0] === "number") {
    query = "ipAddress";
  }
  if (typeof value[0] === "string") {
    query = "domain";
  }
  fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_X5XC3rVRJHHfJSpWjDql2Em5rxn1d&${query}=${value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.code) {
        document.querySelector(".header__form__error").innerHTML =
          data.messages;
      }

      updateMap(data.location.lat, data.location.lng);
      updateInfo("ip", data.ip);
      updateInfo(
        "location",
        `${data.location.region}, ${data.location.country}, ${data.location.postalCode}`
      );
      updateInfo("timezone", data.location.timezone);
      updateInfo("isp", data.isp);
      input.value = "";
      document.querySelector(".header__form__error").innerHTML = "";
    });
});
