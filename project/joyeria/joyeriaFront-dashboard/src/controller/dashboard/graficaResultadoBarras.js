document.addEventListener("DOMContentLoaded", () => {
  const sucursales = ["Sucursal 1", "Sucursal 2", "Sucursal 3"];

  function generarDatos(min, max) {
    return sucursales.map(() => Math.floor(Math.random() * (max - min + 1)) + min);
  }

  // Datos simulados por sucursal
  const ventasCreditoSuc = generarDatos(2000, 6000);
  const ventasContadoSuc = generarDatos(1500, 5500);

  // Totales por tipo de venta
  const totalCreditoSuc = ventasCreditoSuc.reduce((a, b) => a + b, 0);
  const totalContadoSuc = ventasContadoSuc.reduce((a, b) => a + b, 0);
  const totalSuc = totalCreditoSuc + totalContadoSuc;

  // Actualiza botones
  document.getElementById('totalIngresoSuc').textContent = `Ventas a crédito: $${totalCreditoSuc.toLocaleString()}`;
  document.getElementById('totalEgresoSuc').textContent = `Ventas de contado: $${totalContadoSuc.toLocaleString()}`;
  document.getElementById('totalSuc').textContent = `Ventas totales: $${totalSuc.toLocaleString()}`;

  // Inicializar gráfico de barras
  const chartSuc = echarts.init(document.getElementById("estadoSucursal"));

  chartSuc.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['Ventas crédito', 'Ventas contado'],
      left: 'left'
    },
    xAxis: {
      type: 'category',
      data: sucursales
    },
    yAxis: {
      type: 'value',
      axisLabel: { formatter: '${value}' }
    },
    series: [
      {
        name: 'Ventas crédito',
        type: 'bar',
        data: ventasCreditoSuc,
        itemStyle: { color: '#0d6efd' }
      },
      {
        name: 'Ventas contado',
        type: 'bar',
        data: ventasContadoSuc,
        itemStyle: { color: '#20c997' }
      }
    ]
  });
});