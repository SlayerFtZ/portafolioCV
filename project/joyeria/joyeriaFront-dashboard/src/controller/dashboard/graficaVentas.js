 const ctx = document.getElementById('graficaComparativaSucursales').getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sucursal Centro', 'Sucursal La Perla', 'Sucursal Teziutlán'],
        datasets: [
          {
            label: 'Ventas Realizadas',
            data: [45, 62, 37],
            backgroundColor: 'rgba(0, 123, 255, 0.7)'
          },
          {
            label: 'Productos Vendidos',
            data: [78, 105, 64],
            backgroundColor: 'rgba(40, 167, 69, 0.7)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cantidad'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Sucursales'
            }
          }
        }
      }
    });