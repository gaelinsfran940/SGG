const usuarios = [

    {
        usuario: "alumno_prueba",
        pass: "1234"
    }

];

function irA(id) {

    document
        .querySelectorAll(".section")
        .forEach(s => s.classList.remove("active"));

    document
        .getElementById(id)
        .classList.add("active");

}

function ejecutarLogin() {

    const usuario = document
        .getElementById("login-usuario")
        .value;

    const pass = document
        .getElementById("login-pass")
        .value;

    const encontrado = usuarios.find(
        u => u.usuario === usuario && u.pass === pass
    );

    if (encontrado) {

        document.getElementById(
            "welcome-message"
        ).innerText = "Bienvenido " + usuario;

        irA("sec-dashboard");

    } else {

        document.getElementById(
            "msg-error"
        ).innerText = "Datos incorrectos";

    }

}

function ejecutarRegistro() {

    alert("Registro simulado");

    irA("sec-login");

}

function cambiarTema() {

    document.body.classList.toggle("dark");

}