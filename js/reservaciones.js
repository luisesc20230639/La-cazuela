function mostrarIconoPago() {
    var metodoPago = document.getElementById("metodo_pago").value;
    var iconoPago = document.getElementById("paymentIcon");
    if (metodoPago === "efectivo") {
        iconoPago.src = "../imgs/billetes-de-banco.png";
    } else if (metodoPago === "tarjeta") {
        iconoPago.src = "../imgs/tarjeta-bancaria.png";
    } else {
        iconoPago.src = "";
    }
    iconoPago.style.display = "inline-block";
}