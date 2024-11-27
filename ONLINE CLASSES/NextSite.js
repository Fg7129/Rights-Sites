document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // You can add AJAX to send this data to the server or a service
    alert('Thank you for your idea.We appreciate it.');
  });

  const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line', // Type of chart: line chart
  data: {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Cases of Human Rights Violations',
      data: [120, 150, 180, 200, 170, 220, 240, 300, 350, 400], // Example data
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const map = L.map('map').setView([1.2921, 36.8219], 6);  // Nairobi's latitude and longitude

    // Add OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a marker for Nairobi, Kenya
    const kenyaMarker = L.marker([1.2921, 36.8219]).addTo(map);

    // Add a popup to the marker
    kenyaMarker.bindPopup("<b>Kenya</b><br>Capital: Nairobi<br>Region: East Africa").openPopup();



