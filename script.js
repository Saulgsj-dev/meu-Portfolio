document.addEventListener("DOMContentLoaded", () => {
    const botaoModoEscuro = document.getElementById("modo-escuro");
    const body = document.body;

    // 🔥 Verifica se o usuário já ativou o modo escuro antes
    if (localStorage.getItem("modoEscuro") === "ativado") {
        body.classList.add("dark-mode");
        botaoModoEscuro.textContent = "☀️ Modo Claro";
    }

    botaoModoEscuro.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // 🔄 Salva a escolha do usuário no navegador
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("modoEscuro", "ativado");
            botaoModoEscuro.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("modoEscuro", "desativado");
            botaoModoEscuro.textContent = "🌙 Modo Escuro";
        }
    });

    // 🖱️ Efeito nos projetos ao passar o mouse
    const projetos = document.querySelectorAll(".projeto");

    projetos.forEach(projeto => {
        projeto.addEventListener("mouseover", () => {
            projeto.style.transform = "scale(1.1)";
        });

        projeto.addEventListener("mouseleave", () => {
            projeto.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".buto");

    button.addEventListener("click", function () {
        button.classList.add("clicked"); // Adiciona a classe da animação

        setTimeout(() => {
            button.classList.remove("clicked"); // Remove a classe após 300ms
        }, 300);
    });
});
