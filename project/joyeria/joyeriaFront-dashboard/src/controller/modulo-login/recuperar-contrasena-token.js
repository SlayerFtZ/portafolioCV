document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tokenInput = document.getElementById("token");
    const passwordInput = document.getElementById("password");
    const confirmInput = document.getElementById("confirm_password");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const token = tokenInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmInput.value.trim();

        if (!token || !password || !confirmPassword) {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Por favor completa todos los campos.",
                confirmButtonColor: "#6c757d"
            });
            return;
        }

        // Validación de token
        const tokenValido = "123456";

        if (token !== tokenValido) {
            Swal.fire({
                icon: "error",
                title: "Token inválido",
                text: "El token ingresado no es válido.",
                confirmButtonColor: "#dc3545"
            });
            return;
        }

        if (password.length < 6) {
            Swal.fire({
                icon: "warning",
                title: "Contraseña muy corta",
                text: "La contraseña debe tener al menos 6 caracteres.",
                confirmButtonColor: "#ffc107"
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Contraseñas no coinciden",
                text: "La confirmación no coincide con la contraseña.",
                confirmButtonColor: "#dc3545"
            });
            return;
        }

        // Simulación de éxito
        await new Promise(resolve => setTimeout(resolve, 1000));

        Swal.fire({
            icon: "success",
            title: "Contraseña cambiada",
            text: "Tu contraseña ha sido restablecida correctamente.",
            confirmButtonColor: "#198754",
            timer: 3000,
            showConfirmButton: false
        });

        // Redirige a login
        setTimeout(() => {
            window.location.href = "../modulo-login/iniciar-sesion.html";
        }, 3000);
    });
});
