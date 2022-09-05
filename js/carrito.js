


const opciones =()=>{
    const detalle =[]
document.querySelectorAll('.detalles-resumen tbody tr').forEach(function(e){
    //console.log(e.querySelector('.localidad').innerText)
    var filas ="<tr><td class='lugar'>Concierto selecionado</td>"
    filas= filas +"<td class='lugar'>"+e.querySelector('.localidad').innerText+"</td>"
    filas = filas + "<td class='filas'>"+e.querySelector('.fila').innerText+"</td>"
    filas = filas + "<td class='cantida'>"+e.querySelector('.asiento').innerText+"</td>"
    filas = filas + "<td class='valor'>"+e.querySelector('.total').innerText+"</td></tr>"
    console.log(filas)
    $('.resumen-table>tbody').append(filas)
 let fila = {
    localidad: e.querySelector('.localidad').innerText,
    fila: e.querySelector('.fila').innerText,
    asiento: e.querySelector('.asiento').innerText,
    total: e.querySelector('.total').innerText
  };
  detalle.push(fila);
});
    if($('#chektarjeta').is(":checked")){
        $('#metodo-de').text('tarjeta de credito')
        $('#carritocoompra').modal('hide')
        $('#detallecomp').modal('show')        
 }
 if($('#deposito-tarj').is(":checked")){
    $('#metodo-de').text('Deposito')
    $('#carritocoompra').modal('hide')
    $('#detallecomp').modal('show')  
 }
 //if(true) { $('#detallecomp').modal('show')}
    //if(true){ $('').classlist.toggle(d-none)}

}
const pagar =()=>{
    
}
$("document").ready(function() {

   


  });
  