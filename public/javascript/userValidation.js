let form = document.querySelector("#formRegister");
let inputName = document.querySelector("#name");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let imagen = document.querySelector("#imagen");
let terminos = document.querySelector("#terminos");
let btnSubmit = document.querySelector("#buttonSend");

//Contenedor errores
let erName = document.querySelector(".erName");
let erLastName = document.querySelector(".erLastName");
let erEmail = document.querySelector(".erEmail");
let erPassword = document.querySelector(".erPassword");
let erImageProfile = document.querySelector(".erImageProfile");
let erTerminos = document.querySelector(".erTerminos");

let errorContainer = document.querySelector("#errorContainer");
let errorContainerRegister = document.querySelector(".errorContainerRegister")

password.addEventListener("keyup", () =>{
      checkPassword(password.value);
})



function checkPassword(pass){
    let strengthBar = document.querySelector(".progress-bar")
    let strengthPassword = 0;
    if(pass.match(/[a-z]+/)){
        strengthPassword += 1
    }
    if(pass.match(/[A-Z]+/)){
        strengthPassword += 1
    }
    if(pass.match(/[0-9]+/)){
        strengthPassword += 1
    }
    if(pass.match(/[!@$%^&*()~<>?]+/)){
        strengthPassword += 1
    }
    if(pass.length > 7){
        strengthPassword += 1
    }
    
    switch(strengthPassword){
            case 0:
                strengthBar.style = "width: 0%";
                break
            case 1:
                strengthBar.style = "width: 20%";
                break
            case 2:
                strengthBar.style = "width: 40%";
                break
            case 3:
                strengthBar.style = "width: 60%";
                break
            case 4:
                strengthBar.style = "width: 80%";
                break
            case 5:
                strengthBar.style = "width: 100%";
                break
    }
}

btnSubmit.addEventListener("click", (event) =>{
    let errores = {};
    //La variable regex hace que corrobore que el mail que escribi?? el usuario sea v??lido
    let regex = /^[^\s@]+@[^\s@]+$/;
    //Validaciones 
    let validationNumber = /[0-9]+/;
    let validationLowercase = /[a-z]+/;
    let validationUppercase = /[A-Z]+/;
    let validationSpecialCaracter = /[~<>?!@$%^&*()]+/;
    //Validaciones im??genes
    let validationImageJpg = /\.jpe?g$/i;
    let validationImageJpeg = /\.jpeg?g$/i;
    let validationImagePng = /\.png?g$/i;
    let validationImageGif = /\.gif?g$/i;
    
    let checkedTerms = terminos.checked;

    
    
    //Validaci??n Nombre
    if(inputName.value.length < 1){
        errores.name = "Es obligatorio que ingrese un Nombre";
    }else if (inputName.value.length < 3){
        errores.name = "El nombre debe contener almenos 3 caracteres";
    } 
    //Validaci??n Apellido
    if(apellido.value.length < 1){
        errores.lastName = "Es obligatorio que ingrese un Apellido";
    }else if (apellido.value.length < 3){
        errores.lastName = "El apellido debe contener almenos 3 caracteres";
    }
    //Validaci??n email
    if(email.value.length < 1){
        errores.email = "Es obligatorio que ingrese un Email";
    }else if(!regex.test(email.value)){
        errores.email = "Debe ingresar un mail v??lido";
    }
    //Validaci??n contrase??a
    if(password.value.length < 1){
        errores.password = "Es obligatorio que ingrese una contrase??a";
    }else if (password.value.length < 8){
        errores.password = "La contrase??a debe poseer almenos 8 caracteres";
    }else if(!validationUppercase.test(password.value)){
        errores.password = "La contrase??a debe contener almenos una mayuscula"
    }
    else if(!validationLowercase.test(password.value)){
        errores.password = "La contrase??a debe contener almenos una min??scula"
    }
    else if(!validationNumber.test(password.value)){
        errores.password = "La contrase??a debe contener almenos un n??mero"
    }
    else if(!validationSpecialCaracter.test(password.value)){
        errores.password = "La contrase??a debe contener almenos un caracter raro"
    }
    //Validaci??n Imagen
    if(!validationImageJpg.test(imagen.value) && !validationImageJpeg.test(imagen.value) && !validationImagePng.test(imagen.value) && !validationImageGif.test(imagen.value)){
        errores.imagen = "La imagen debe contener un archivo JPG, JPEG, PNG o GIF";
    }
    //Validaci??n Terminos y condiciones
    if(!checkedTerms){
        errores.terminos = "Es necesario que acepte los t??rminos y condiciones";
    } 




    if(Object.keys(errores).length >= 1){
        event.preventDefault();
        errorContainerRegister.style.display = "flex";
        erName.innerText = (errores.name) ? errores.name : "";
        erLastName.innerText = (errores.lastName) ? errores.lastName : "";
        erEmail.innerText = (errores.email) ? errores.email : "";
        erPassword.innerText = (errores.password) ? errores.password : "";
        erImageProfile.innerText = (errores.imagen) ? errores.imagen : "";
        erTerminos.innerText = (errores.terminos) ? errores.terminos : "";
    } else{
        btnSubmit.submit();
    }
})