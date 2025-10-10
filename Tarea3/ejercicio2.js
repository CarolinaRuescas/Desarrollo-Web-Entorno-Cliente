/*
2. Sistema de inicio de sesión y registro con arrays(menú incluído).
*/

var usuarios = ["Carolina", "Yolanda", "Ares" ];
var contraseñas = [];
let nombreUsuario;
let usuarioValido = false;

let option;
do{
    option = Number(prompt(
        "Elije la opcíon que prefieras:\n" +  
        "1.Registrarse\n" + 
        "2.Incio de sesión\n" +  
        "3.Ver usuarios\n" +  
        "4.Salir\n"));
    if (option == 1){
        while(!usuarioValido){
            nombreUsuario = prompt("Introduce el nombre del usuario:");
            let existe = false;
            for(let i=0; i< usuarios.length; i++){
                if(usuarios[i] === nombreUsuario){
                    existe = true;
                }
            }
        }
        if (existe){
            alert("Ese nombre de usuario ya existe. Por favor, intenta con otro.")
        }else{
            usuarioValido = true;
        }
        let nuevaContraseña = prompt("Introduce la contraseña:");
        usuarios.push(nombreUsuario);
        contraseñas.push(nuevaContraseña);
        alert("Usuario registrado con éxito.");


    }else if (option == 2){
        usuarios = prompt("Ingresa tu usuario: ");
        let encontrado = false;
        for (let i=0; i < usuarios.length; i++){
                if (usuarios[i] === nombreIngresado){
                    encontrado=true;
                    let contraseñaIngresada = prompt("Ingresa tu contraseña:");
                if (contraseñaIngresada === contraseñas[i]){
                    alert("¡Bienvenido " + nombreIngresado + "!");
                }
                }else{
                    alert("contraseña incorrecta");
                }
        }
        if(!encontrado){
            alert("El usuario no existe");
        }




    }

}while (option != 3);