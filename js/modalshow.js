

$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
    let subtotal = 0;

    document.querySelectorAll('.detalles-resumen tbody tr').forEach(function (e) {
        var valor = e.querySelector('.total').innerText.replace("$", "")
        subtotal += parseFloat(valor)
        /*var filas = "<tr><td class='lugar'>" + evento + "</td>"
        filas = filas + "<td class='lugar'>" + e.querySelector('.localidad').innerText + "</td>"
        filas = filas + "<td class='filas'>" + e.querySelector('.fila').innerText + "</td>"
        filas = filas + "<td class='cantida'>" + e.querySelector('.cantidad').innerText + "</td>"
        filas = filas + "<td class='valor'>" + e.querySelector('.total').innerText + "</td></tr>"*/
        // $('.resumen-table>tbody').append(filas)
    });
    $('.total-detalle').text(subtotal)
    console.log(subtotal)
});
$(document).on('click', '.asientos', function (event) {
    var valores = $(this).parents("tr").find("td p")[0].innerHTML;
});
$('.v-check').on('click', function (e) {
    console.log(e)
    /*if ($(this).is(':checked')) {
        // Hacer algo si el checkbox ha sido seleccionado
        alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
    } else {
        // Hacer algo si el checkbox ha sido deseleccionado
        alert("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
    }*/
});



