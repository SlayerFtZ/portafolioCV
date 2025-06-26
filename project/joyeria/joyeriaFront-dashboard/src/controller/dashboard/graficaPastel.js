document.addEventListener("DOMContentLoaded", () => {
  // Función para generar datos simulados de ventas y gastos
  function generarDatosSimulados(min, max, cantidad) {
    const datos = [];
    for (let i = 0; i < cantidad; i++) {
      datos.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return datos;
  }

  // Generar totales mensuales simulados para ventas y gastos
  const ventas = generarDatosSimulados(5000, 15000, 12);  // 12 meses
  const gastos = generarDatosSimulados(2000, 7000, 12);

  const totalVentas = ventas.reduce((acc, val) => acc + val, 0);
  const totalGastos = gastos.reduce((acc, val) => acc + val, 0);
  const resultado = totalVentas - totalGastos;

  // Actualizar botones con valores
  document.getElementById('totalVentasBtn').textContent = `Ventas: $${totalVentas.toLocaleString()}`;
  document.getElementById('totalGastosBtn').textContent = `Gastos: $${totalGastos.toLocaleString()}`;
  document.getElementById('resultadoBtn').textContent = `Resultado: $${resultado.toLocaleString()}`;

  // Inicializar gráfica de pastel con ECharts
  const chartPie = echarts.init(document.getElementById('graficaPastel'));

  chartPie.setOption({
    tooltip: {
      trigger: 'item',
      formatter: '{b}: ${c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 10,
      data: ['Ventas', 'Gastos']
    },
    series: [
      {
        name: 'Totales',
        type: 'pie',
        radius: '50%',
        data: [
          { value: totalVentas, name: 'Ventas', itemStyle: { color: '#28a745' } },  // verde
          { value: totalGastos, name: 'Gastos', itemStyle: { color: '#ffc107' } }   // amarillo
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
});
