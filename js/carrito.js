const opciones = () => {
    let evento = $('#evento').text()
    let subtotal = 0;
    $('.resumen-table>tbody').empty()
    document.querySelectorAll('.detalles-resumen tbody tr').forEach(function (e) {
        var valor = e.querySelector('.total').innerText.replace("$", "")
        subtotal += parseFloat(valor)
        var filas = "<tr><td class='lugar'>" + evento + "</td>"
        filas = filas + "<td class='localidad'>" + e.querySelector('.localidad').innerText + "</td>"
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


var detalle_de_compra  =[];
var evento_seleccionado="";
const tarjeta = document.getElementById('pagar-td')
tarjeta.addEventListener('click', async function (event){
    event.preventDefault()
   event.path[2].classList.add('was-validated')
  if (!document.getElementById('idcard').value || !document.getElementById('titular').value || !document.getElementById('fechaex').value) return
  if (!document.getElementById('codigo') || !document.getElementById('diferir') ) return
  let compre={
    "cedula":$('#dni-resumen').text(),
    "metodo_envio":$('#envio-resumen').val(),
    "metodo_pago":$('#metodo-de').text(),
    "#tarjeta":$('#idcard').val(),"titualr":$('#titular').val(),
    "fecha_tarjeta":$('#fechaex').val(),
    "codigo_tarje":$('#codigo').val(),
    "difiere":$('#diferir').val(),
    "detalle":detalle_de_compra  
}
Swal.fire('Transacción Guardad','retire su boleto con su tarjeta','success')
    
})
const pagar = () => {  
    evento_seleccionado = $('#evento').text()
    document.querySelectorAll('.resumen-table tbody tr').forEach(function(e){
        let filas = {
            localidad: e.querySelector('.localidad').innerText,
            fila: e.querySelector('.filas').innerText,
            asiento: e.querySelector('.cantida').innerText,
            total: e.querySelector('.valor').innerText.replace("$","")
          }
          detalle_de_compra.push(filas);
    })    
  
  
}




