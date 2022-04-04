

function validarForm(){
    let select1 = document.getElementById("regiones").value;
    let select2 = document.getElementById("comunas").value;
    let sector = document.getElementById("Sector").value;
    let nombre= document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cel = document.getElementById("celular").value;
    let inicio = document.getElementById("Inicio").value;
    let tema = document.getElementById("tema").value;
    let foto = document.getElementById("file").value;
    let contacto = document.getElementById("Contacto");
    let errors = "";
    
   

    if (!validarNombre(nombre)){
        errors += '<p>El nombre es invalido</p>';
        document.getElementById("nameError").innerHTML = 'El nombre es invalido';
        document.getElementById('name').style.borderColor = "#FF0000";
    } else{
        document.getElementById("nameError").innerHTML = '';
        document.getElementById('name').style.borderColor = "#00FF00";
    }


    if(!validarEmail(email)){
        errors += '<p>El mail es invalido</p>';
        document.getElementById("emailError").innerHTML = 'El mail es invalido';
        document.getElementById('email').style.borderColor = "#FF0000";
    }else{
        document.getElementById("emailError").innerHTML = '';
        document.getElementById('email').style.borderColor = "#00FF00";
    }
    
    if (!validarDate(inicio)){
        errors += '<p>La fecha de inicio no es valida</p>';
        document.getElementById("dateError").innerHTML = 'La fecha de inicio no es valida';
        document.getElementById('Inicio').style.borderColor = "#FF0000";
    } else{
        document.getElementById("dateError").innerHTML = '';
        document.getElementById('Inicio').style.borderColor = "#00FF00";
    }

    if(!validarTema(tema)){
        errors += '<p>Eliga un tema porfavor</p>';
        document.getElementById("temaError").innerHTML = 'Eliga un tema porfavor';
        document.getElementById('tema').style.borderColor = "#FF0000";
    }else{
        if(tema=="otro"){
            let temainput= document.getElementById("tema_input_div").value;
            if(temainput=="" || temainput.length<3 || temainput.length>15){
                errors += "<p>Minimo 3 caracteres maximo 15</p>"
                document.getElementById("temaError").innerHTML = 'Minimo 3 caracteres maximo 15';
                document.getElementById('tema').style.borderColor = "#FF0000";
            }else{
                document.getElementById("temaError").innerHTML = '';
                document.getElementById('tema').style.borderColor = "#00FF00";
            }

        }else{
            document.getElementById("temaError").innerHTML = '';
            document.getElementById('tema').style.borderColor = "#00FF00";
        }
    }

    if(!validarFoto(foto)){
        errors += '<p>Adjunte una foto porfavor</p>';
        document.getElementById("fotoError").innerHTML = 'Adjunte una foto porfavor';
        document.getElementById('file').style.borderColor = "#FF0000";
    }else{
        document.getElementById("fotoError").innerHTML = '';
        document.getElementById('file').style.borderColor = "#00FF00";
    }

    if(!validarRegion(select1)){
        errors += '<p>Seleccione una Region</p>';
        document.getElementById("regionError").innerHTML = 'Seleccione una Region';
        document.getElementById('regiones').style.borderColor = "#FF0000";
    }else{
        document.getElementById("regionError").innerHTML = '';
        document.getElementById('regiones').style.borderColor = "#00FF00";
    }


    if(!validarComuna(select2)){
        errors += '<p>Seleccione una Comuna</p>';
        document.getElementById("comunasError").innerHTML = 'Seleccione una Comuna';
        document.getElementById('comunas').style.borderColor = "#FF0000";
    }else{
        document.getElementById("comunasError").innerHTML = '';
        document.getElementById('comunas').style.borderColor = "#00FF00";
    }

    if(!validarSector(sector)){
        errors += '<p>Maximo 100 caracteres</p>';
        document.getElementById("sectorError").innerHTML = 'Maximo 100 caracteres';
        document.getElementById('Sector').style.borderColor = "#FF0000";
    }else{
        document.getElementById("sectorError").innerHTML = '';
        if(document.getElementById('Sector').style.borderColor == "#FF0000"){
            document.getElementById('Sector').style.borderColor = "#00FF00";
        }else{
            document.getElementById('Sector').style.borderColor = "#808080";
        }
    }

    if(!validarNumero(cel)){
        errors += '<p>Numero invalido</p>';
        document.getElementById("celError").innerHTML = 'Numero invalido';
        document.getElementById('celular').style.borderColor = "#FF0000";
    }else{
        document.getElementById("celError").innerHTML = '';
        if(document.getElementById('celular').style.borderColor == "#FF0000"){
            document.getElementById('celular').style.borderColor = "#00FF00";
        }else{
            document.getElementById('celular').style.borderColor = "#808080";
        }
    }
    errors+= validarContactoTodo(errors);
    

    if(errors != ''){
        document.getElementById('contenedorErrores').innerHTML = errors;
        return false;
    }
}


function validarNombre(nombre){

    let regex = /^[a-zA-Z ]*$/;

    if (nombre.length == 0 | nombre.length > 200 | !regex.test(nombre)){
        return false;
    }

    return true;

}

function validarEmail(email){
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.length == 0 | !regex.test(email)){
        return false;
    }

    return true;
}

function validarDate(inicio){
    let regex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/

    if (inicio.length == 0 | !regex.test(inicio)){
        return false;
    }

    return true;

}

function validarTema(tema){
    if(tema == ""){
        return false;
    }
    return true;
}

function validarFoto(foto){
    if(foto == ''){
        return false;
    }

    return true;

}

function validarRegion(select){
    if(select == "sin-region"){
        return false;
    }
    return true;

}

function validarComuna(select){
    if(select == 'sin-region' || select=="sin-comuna"){
        return false;
    }
    return true;

}

function validarSector(sector){
    if(sector.length > 100){
        return false;
    }
    return true;
}

function validarNumero(numero){
    let regex = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

    if(numero.length>0 && !regex.test(numero)){
        return false;
    }
    return true;

}

function setDate(){
    var date = new Date();
    var output = date.getFullYear()+'-'+("0" + (date.getMonth() + 1)).slice(-2)+'-'+("0" + date.getDate()).slice(-2)+'-'+date.getHours()+'-'+date.getMinutes();
    var v = document.getElementById("Inicio");
    v.value = output;
}

var cnt = 0;
function temaOtro(){
    let tema = document.getElementById("tema").value;
    var temainput = document.createElement("input");
    temainput.type = "text";
    temainput.id = "tema_input_div";
    temainput.name = temainput.id;
    let father = document.getElementById("Tema")
    if(tema == "otro" && cnt == 0){
        father.appendChild(temainput);
        cnt++;
    }else{
        if(father.childNodes.length==8){
            let child = document.getElementById("tema_input_div")
            father.removeChild(child);
            cnt--;
        }
    }
}


function validarContactoInput(input){
    if(input.length<4 || input.length>50){
        return false;
    }
    return true
}

var total_contactos = 1;
function crearContacto(){
    if(total_contactos==5){
        return
    }
    let c = document.getElementById("contacto_div_1");
	let select = c.cloneNode(true);
	select.id = "contacto_div_"+ (++total_contactos);
	select.name = select.id;
    let contenedor = document.getElementById("Contactodivfather");
    contenedor.appendChild(select);
    return
}

function validarSelect(select){
    if(select.value==""){
        return false;
    }
    return true;
}

function validarContactoTodo(errors){
    let father = document.getElementById("Contactodivfather");
    let children = father.children;

    for(let i = 0;i<children.length;i++){
        let childrenchild = children[i].children;
        if(childrenchild[0].value!="" && childrenchild[1].value!=""){
            let truthy = validarContactoInput(childrenchild[1].value);
            if(!truthy){
                errors += '<p>Minimo 4 caracteres maximo 50</p>';
                childrenchild[2].innerHTML = 'Minimo 4 caracteres maximo 50';
                childrenchild[1].style.borderColor = "#FF0000";
                return errors;
            }else{
                errors += '';
                childrenchild[2].innerHTML = '';
                childrenchild[1].style.borderColor = "#00FF00";
                return errors;
            }
        }else if(childrenchild[0].value=="" && childrenchild[1].value != ""){
                errors += '<p>Eliga un metodo de contacto porfavor</p>';
                childrenchild[2].innerHTML = 'Eliga un metodo de contacto porfavor';
                childrenchild[1].style.borderColor = "#FF0000";
                return errors;
        }else if(childrenchild[0].value!="" && childrenchild[1].value==""){
                errors += '<p>Minimo 4 caracteres maximo 50</p>';
                childrenchild[2].innerHTML = 'Minimo 4 caracteres maximo 50';
                childrenchild[1].style.borderColor = "#FF0000";
                return errors;
        }
        else{
            errors += '';
            childrenchild[2].innerHTML = '';
            return errors;
        }
      
    }
}


