let Edad_del_usuario = 25;
function Comprobar_requisitos_del_usuario(){
    let tieneVehiculo = true;
    if (Edad_del_usuario >= 18){
        if(tieneVehiculo===true){
            return true;
        }else {
            return false;
        }
    }else{
        return false;
    }
}
console.log(Comprobar_requisitos_del_usuario());