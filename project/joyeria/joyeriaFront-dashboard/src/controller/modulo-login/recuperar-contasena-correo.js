document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (!email) {
            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor ingresa tu correo electrónico.",
                confirmButtonColor: "#6c757d"
            });
            return;
        }

        try {
            // Simula o cambia por tu endpoint real
            const response = await fetch("https://tu-api.com/api/recuperar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Correo enviado",
                    text: "Te hemos enviado un token a tu correo.",
                    confirmButtonColor: "#198754",
                    timer: 3000,
                    showConfirmButton: false
                });

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: result.message || "No se encontró un usuario con ese correo.",
                    confirmButtonColor: "#dc3545"
                });
            }

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error de conexión",
                text: "Hubo un problema al conectar con el servidor.",
                confirmButtonColor: "#dc3545"
            });
            console.error("Error en recuperación:", error);
        }
    });
});
