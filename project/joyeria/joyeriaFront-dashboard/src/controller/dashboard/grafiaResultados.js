document.addEventListener("DOMContentLoaded", () => {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  function generarDatosSimulados(min, max) {
    return meses.map(() =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  }

  const ventasCredito = generarDatosSimulados(2000, 6000);
  const ventasContado = generarDatosSimulados(1500, 5500);

  const totalCredito = ventasCredito.reduce((a, b) => a + b, 0);
  const totalContado = ventasContado.reduce((a, b) => a + b, 0);
  const totalVentas = totalCredito + totalContado;

  document.getElementById('totalIngresoMes').textContent = `Ventas a crédito: $${totalCredito.toLocaleString()}`;
  document.getElementById('totalEgresoMes').textContent = `Ventas de contado: $${totalContado.toLocaleString()}`;
  document.getElementById('totalMes').textContent = `Ventas totales: $${totalVentas.toLocaleString()}`;

  const chartMes = echarts.init(document.getElementById("estadoResultados"));

  chartMes.setOption({
    tooltip: { trigger: "axis" },
    legend: { data: ['Ventas contado', 'Ventas crédito'], left: 'left' },
    xAxis: { type: 'category', data: meses.map(m => m.charAt(0).toUpperCase() + m.slice(1)) },
    yAxis: { type: 'value', axisLabel: { formatter: '${value}' } },
    series: [
      { name: 'Ventas crédito', type: 'line', data: ventasCredito, smooth: true, color: '#dc3545' },
      { name: 'Ventas contado', type: 'line', data: ventasContado, smooth: true, color: '#06FFB4' }
    ]
  });
});