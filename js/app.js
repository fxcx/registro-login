let usuarios = [];

class user {
    constructor(nombre,apellido,email,pais,passw){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pais = pais;
        this.passw = passw;
    }
}

function registrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let passw = document.getElementById("passw1").value;
    let count = 0;
    if(passw === document.getElementById("passw2").value){
        if(usuarios.length != 0){
            for(let i = 0; i < usuarios.length; i++){
                if(email != usuarios[i].email){
                    console.log("funciono1");
                    count++;
                    if (count === usuarios.length && usuarios.length != 0) {
                        console.log("funciono2");
                        let n = usuarios.length;
                        usuarios[n] = new user(nombre, apellido, email, pais, passw);
                        alert("Usuario creado correctamente.");
                    }
                } else{
                    count = 0;
                    alert("El E-mail ingresado ya se encuentra en uso. Por favor utilice otro o vaya a la sección de login.");
                }
            }
        } else{
            let n = usuarios.length;
            usuarios[n] = new user(nombre, apellido, email, pais, passw);
            alert("Usuario creado correctamente.");
        }
    } else{
        alert("Las contraseñas no coinciden. Vuelva a intentarlo.")
    }
}

function login(){
    let user = document.getElementById("user").value;
    let passwLog = document.getElementById("passwLog").value;
    if(usuarios.length != 0){
        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].email === user && usuarios[i].passw === passwLog){
                alert("Sesión iniciada con éxito.");
            } else{
                alert("El E-mail y/o contraseña ingresada son incorrectos. Por favor, intentelo nuevamente.");
            }
        }
    } else{
        alert("El E-mail y/o contraseña ingresada son incorrectos. Por favor, intentelo nuevamente.");
    }
}