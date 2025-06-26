document.addEventListener("DOMContentLoaded", () => {
    // Datos simulados (reemplázalos con datos de tu API luego)
    const datos = {
      ventasContado: 78,
      catalogo: 64,
      transacciones: 45,
      ventasCredito: 100
    };

    document.getElementById("ventasPorcentaje").innerText = `${datos.ventasContado}%`;
    document.getElementById("ventasBarra").style.width = `${datos.ventasContado}%`;

    document.getElementById("catalogoPorcentaje").innerText = `${datos.catalogo}%`;
    document.getElementById("catalogoBarra").style.width = `${datos.catalogo}%`;

    document.getElementById("personalizadasPorcentaje").innerText = `${datos.transacciones}%`;
    document.getElementById("personalizadasBarra").style.width = `${datos.transacciones}%`;

    document.getElementById("ordenesPorcentaje").innerText = `${datos.ventasCredito}%`;
    document.getElementById("ordenesBarra").style.width = `${datos.ventasCredito}%`;
  });