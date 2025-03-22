const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        label: "Cases of Human Rights Violations",
        data: [120, 150, 180, 200, 170, 220, 240, 289, 160, 400],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const map = L.map("map").setView([1.2921, 36.8219], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const kenyaMarker = L.marker([1.2921, 36.8219]).addTo(map);

kenyaMarker
  .bindPopup("<b>Kenya</b><br>Capital: Nairobi<br>Region: East Africa")
  .openPopup();
