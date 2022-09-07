$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
    let subtotal = 0;
    document.querySelectorAll('.detalles-resumen tbody tr').forEach(function (e) {
        var valor = e.querySelector('.total').innerText.replace("$", "")
        subtotal += parseFloat(valor)
    });
    $('.total-detalle').text("$" + subtotal)
});
$(document).on('click', '.asientos', function () {
    var localidad = $(this).parents("tr").find("td p")[0].innerHTML;
    var valor = $(this).parents("tr").find("td")[1].innerHTML.replace("$", "");
    var val = $(this).closest('tr').find('td div input').val();
    var total = valor * val
    var filas2 = "<tr><td class='localidad'style='font-size: 0.8em;'>" + localidad + "</td>"
    filas2 = filas2 + "<td class='fila'style='font-size: 0.8em;'>f1</td>"
    filas2 = filas2 + "<td class='asiento'style='font-size: 0.8em;'>" + val + "</td>"
    filas2 = filas2 + "<td class='total'style='font-size: 0.8em;'>$" + total + "</td>"
    filas2 = filas2 + "<td ><button class='btn btn-primary badge text-bg-primary borrar'>ELIMINAR</button></td></tr>"
    $('.detalles-resumen>tbody').append(filas2)
    let subtotal = 0;
    document.querySelectorAll('.detalles-resumen tbody tr').forEach(function (e) {
        var valor = e.querySelector('.total').innerText.replace("$", "")
        subtotal += parseFloat(valor)
    });
    $('.total-detalle').text("$" + subtotal)
});
$(document).ready(function () {

    $('#termino-bole').val(this.checked);

    $('#termino-bole').change(function () {
        if (this.checked && $('#termino-acep').is(":checked")) {
            $("#pagarcuenta").removeAttr('disabled');
        } else { $("#pagarcuenta").attr("disabled", true); }

    });
    $('#termino-acep').change(function () {
        if (this.checked && $('#termino-bole').is(":checked")) {
            $("#pagarcuenta").removeAttr('disabled');
        } else { $("#pagarcuenta").attr("disabled", true); }
    })
});
const incrementa = document.querySelectorAll('p.resta')

const decrementa = document.querySelectorAll('p.suma')
incrementa.forEach(e => (e.addEventListener('click', (e) => {
    const datos = e.path[2].querySelector("input").value
    const incre = parseInt(datos) - 1
    if (datos > 1) e.path[2].querySelector("input").value = "" + incre;
})))

decrementa.forEach(e => (e.addEventListener('click', (e) => {
    const datos = e.path[2].querySelector("input").value
    const incre = parseInt(datos) + 1
    e.path[2].querySelector("input").value = "" + incre;
})))
