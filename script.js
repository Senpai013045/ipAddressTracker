document.querySelector(".header__form").addEventListener("submit", (e) => {
  e.preventDefault();
});

let map = L.map("map").setView([0, 0], 2);
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KIgo2TvlDDD69kwl8OUo",
  {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
  }
).addTo(map);
let marker = L.marker([40.650002, -73.949997]).addTo(map);
// fetch(
//   `https://geo.ipify.org/api/v1?apiKey=at_X5XC3rVRJHHfJSpWjDql2Em5rxn1d&ipAddress=8.8.8.8`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     // map = L.map("map").setView([[data.location.lat, data.location.lng], 10]);
//     let marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
