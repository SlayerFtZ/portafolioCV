document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            Swal.fire({
                icon: "warning",
                title: "Campos vacíos",
                text: "Por favor ingresa tu correo y contraseña.",
                confirmButtonColor: "#6c757d"
            });
            return;
        }

        try {
            // Simulación o conexión real con tu API
            const response = await fetch("https://tu-api.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido!",
                    text: "Inicio de sesión exitoso.",
                    confirmButtonColor: "#198754",
                    timer: 2000,
                    showConfirmButton: false
                });

                setTimeout(() => {
                    window.location.href = "../../view/dashboard/dashboard.html";
                }, 2000);

            } else {
                // Credenciales inválidas u otro error manejado por el backend
                Swal.fire({
                    icon: "error",
                    title: "Error de autenticación",
                    text: result.message || "Correo o contraseña incorrectos.",
                    confirmButtonColor: "#dc3545"
                });
            }

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error de conexión",
                text: "No se pudo conectar con el servidor. Intenta más tarde.",
                confirmButtonColor: "#dc3545"
            });
            console.error("Error al iniciar sesión:", error);
        }
    });
});
