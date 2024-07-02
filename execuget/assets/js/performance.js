const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'line', // or 'bar', 'pie', etc.
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Job Views',
            data: [200, 300, 400, 500, 600, 700],
            backgroundColor: 'rgba(25, 55, 104, 0.2)',
            borderColor: 'rgba(25, 55, 104, 1)',
            borderWidth: 1
        },
        {
            label: 'Applications',
            data: [50, 60, 70, 80, 90, 100],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
