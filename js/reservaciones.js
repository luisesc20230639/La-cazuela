function mostrarIconoPago() {
    var metodoPago = document.getElementById("metodo_pago").value;
    var iconoPago = document.getElementById("paymentIcon");
    if (metodoPago === "efectivo") {
        iconoPago.src = "https://image.flaticon.com/icons/svg/131/131778.svg";
    } else if (metodoPago === "tarjeta") {
        iconoPago.src = "https://image.flaticon.com/icons/svg/97/97995.svg";
    } else {
        iconoPago.src = "";
    }
}

function agregarPlatillo(nombrePlatillo) {
    var listaPlatillos = document.getElementById("platilloSeleccionado");
    var nuevoPlatillo = document.createElement("li");
    nuevoPlatillo.textContent = nombrePlatillo;
    nuevoPlatillo.classList.add("list-group-item");
    var botonQuitar = document.createElement("button");
    botonQuitar.textContent = "Quitar";
    botonQuitar.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
    botonQuitar.onclick = function () {
        listaPlatillos.removeChild(nuevoPlatillo);
    };
    nuevoPlatillo.appendChild(botonQuitar);
    listaPlatillos.appendChild(nuevoPlatillo);
}

document.getElementById("reservaForm").addEventListener("submit", function (event) {
    var platillosSeleccionados = document.getElementById("platilloSeleccionado").getElementsByTagName("li").length;
    if (platillosSeleccionados === 0) {

        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Por favor, selecciona al menos un platillo.'
        });

        event.preventDefault();
    } else {

        var codigoPedido = Math.floor(100000 + Math.random() * 900000);


        Swal.fire({
            icon: 'success',
            title: '¡Reserva enviada con éxito!',
            text: 'Código de Pedido: ' + codigoPedido,
            showConfirmButton: false,
            footer: '<button id="entendidoBtn" class="btn btn-primary">Entendido</button>'
        });


        this.reset();


        document.getElementById("platilloSeleccionado").innerHTML = "";


        event.preventDefault();


        document.getElementById("entendidoBtn").addEventListener("click", function () {

            Swal.close();
        });
    }
});