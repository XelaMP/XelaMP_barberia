

document.querySelector('#enviar').addEventListener('click', (e)=>{
    e.preventDefault();
   

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
	let telefono = "51920637237";
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let empleado = document.querySelector('#empleado').value;
    let servicio = document.querySelector('#servicio').value;
    let resp = document.querySelector('#respuesta');
   

    resp.classList.remove('fail');
    resp.classList.remove('send');

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=*_Barbería%20Nombre_*%0A*Reservas*%0A%0A*¿Cuál%20es%20tu%20nombre?*%0A${cliente}%0A*Indica%20la%20fecha%20de%20tu%20reserva*%0A${fecha}%0A*Indica%20la%20hora%20de%20tu%20reserva*%0A${hora}%0A*Empleado%20de%20preferencia*%0A${empleado}%0A*¿Cuál%20es&20el%20servicio%20que%20se%20desea%20realizar?*%0A${servicio}`;

    if(cliente === "" || fecha === "" || hora === ""){
        resp.classList.add('fail');
        resp.innerHTML= `Faltan algunos datos, ${cliente}`;
        return false;
    }
    resp.classList.remove('fail');
    resp.classList.add('send');
    resp.innerHTML= `Se ha enviado tu reserva, ${cliente}`;
    window.open(url);
////


       
 
    
        
   
    
    });



    


