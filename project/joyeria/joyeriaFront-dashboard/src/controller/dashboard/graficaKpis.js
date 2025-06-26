document.addEventListener("DOMContentLoaded", () => {
    // Simular productos y ventas
    const productos = ['Collar Oro', 'Anillo Diamante', 'Reloj Lujo', 'Aretes Plata', 'Pulsera Acero'];
    const ventasPorProducto = productos.map(() => Math.floor(Math.random() * 100) + 10);
    const topIndex = ventasPorProducto.indexOf(Math.max(...ventasPorProducto));

    // Simular indicadores
    const totalVentas = ventasPorProducto.reduce((a, b) => a + b, 0) * 1500; // suposición de $1500 por producto
    const totalTransacciones = ventasPorProducto.reduce((a, b) => a + b, 0);
    const totalClientes = Math.floor(totalTransacciones * 0.9); // 90% de clientes únicos

    // Mostrar en KPIs
    document.getElementById("kpiVentas").textContent = `$${totalVentas.toLocaleString()}`;
    document.getElementById("kpiTopProducto").textContent = productos[topIndex];
    document.getElementById("kpiTransacciones").textContent = totalTransacciones;
    document.getElementById("kpiClientes").textContent = totalClientes;
  });