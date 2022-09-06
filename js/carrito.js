

$('.btncontinuar').click(function () {

})
const opciones = () => {
    let evento = $('#evento').text()
    let subtotal = 0;
    $('.resumen-table>tbody').empty()
    document.querySelectorAll('.detalles-resumen tbody tr').forEach(function (e) {
        var valor = e.querySelector('.total').innerText.replace("$", "")
        subtotal += parseFloat(valor)
        var filas = "<tr><td class='lugar'>" + evento + "</td>"
        filas = filas + "<td class='lugar'>" + e.querySelector('.localidad').innerText + "</td>"
        filas = filas + "<td class='filas'>" + e.querySelector('.fila').innerText + "</td>"
        filas = filas + "<td class='cantida'>" + e.querySelector('.asiento').innerText + "</td>"
        filas = filas + "<td class='valor'>" + e.querySelector('.total').innerText + "</td></tr>"
        $('.resumen-table>tbody').append(filas)
    });
    let total = parseFloat(subtotal) + parseFloat(6)
    $('.subtotal').text("$" + subtotal)
    $('.total-text').text("$" + total)
    if ($('#chektarjeta').is(":checked")) {
        $('#metodo-de').text('tarjeta de credito')
    }
    if ($('#deposito-tarj').is(":checked")) { $('#metodo-de').text('Deposito') }
}

const pagar = () => {
    console.log($('#termino-bole').is(":checked"), $('#termino-acep').is(":checked"))
    if ($('#termino-bole').is(":checked") && $('#termino-acep').is(":checked")) {
        return
    }
    Swal.fire('info', 'Acepte los Términos y condiciones', 'info')
    /*let fila = {
    localidad: e.querySelector('.localidad').innerText,
    fila: e.querySelector('.fila').innerText,
    asiento: e.querySelector('.asiento').innerText,
    total: e.querySelector('.total').innerText
  };
  detalle.push(fila);*/

}

