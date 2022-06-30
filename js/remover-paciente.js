var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("tbody")
tabela.addEventListener("dblclick", function(event) {

    event.target.parentNode.classList.add("fadeOut");

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();
    // mesma coisa
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});



/*
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();

    });
});
*/