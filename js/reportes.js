
const valida=async(e)=>{
    const num = document.getElementById(e).value
    if (!num) return

  try{
 
    const { data } = await axios.get("https://rec.netbot.ec/pdfqr/api/v1/cedula/"+num)
    const{message}= await  data;
    const email = message['email']? message['email'] : '';
    const edad = message['fecha_nacimiento'] ? message['fecha_nacimiento']: '';
    const telefono =message['telefono'] ? message['telefono']: '';
    const nombres = message['name']? message['name']:'';   
   
    document.getElementById('correos').value= email
    document.getElementById('fechas').value=edad
    document.getElementById('telefonos').value=telefono
    document.getElementById('nombres_apelli').value=nombres             
   }catch (Error){
     alert('Hubo un error en su Cédula')
     
  
     return Error;
   
   }

}
function reportatarjeta(e){
    //document.getElementById("report").reset();
    document.getElementById('nombres_apelli').value=''
        document.getElementById('cedulas').value=''
        document.getElementById('correos').value=''
       document.getElementById('fechas').value=''
        document.getElementById('bancos').value=''
       document.getElementById('comprobantes').value=''
        document.getElementById('formulario').value=''
        document.getElementById('telefonos').value =''
    
    $('#Modaltarjeta').modal('show',{backdrop: 'static', keyboard: false});
    
    document.getElementById('formulario').value=e;
    $( '#titel' ).text( e );
  
  }
  //$('#myModalExito').modal('hide'); 
  
  
  const registro =async(info)=>{
   
    
    
  
    
  }

  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  const report = document.getElementById('tc')
 
  report.addEventListener('click',async function(event){    
    event.preventDefault()
    
    let _datos = {
        u_nombre: document.getElementById('nombres_apelli').value,
        u_cedula: document.getElementById('cedulas').value, 
        u_correo:document.getElementById('correos').value,
        u_fecha:document.getElementById('fechas').value,
        u_banco:document.getElementById('bancos').value,
        u_transaci:document.getElementById('comprobantes').value,
        u_form:document.getElementById('formulario').value,
        u_telefono:document.getElementById('telefonos').value 
      }   
     try {
        const registro = await fetch('http://localhost:4000/api/usuario',{method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}}).then(response => response.json())
    const resultado = registro
    if(!resultado) return
    Swal.fire(
        'Su informacion a sido guardada',
        'Espere a que un colaborador se contacte con usted',
        'success'
      )
    ('#Modaltarjeta').modal('hide')
     } catch (error) {
        
    ('#Modaltarjeta').modal('hide')
       
        
     } 
      

    
  })
 