/*
2. Sistema de inicio de sesión y registro con arrays(menú incluído).
*/

var usuarios = ["Carolina", "Yolanda", "Ares" ];
var contraseñas = [];

let option;
do{
    option = Number(prompt(
        "Elije la opcíon que prefieras:\n" +  
        "1.Registrarse\n" + 
        "2.Incio de sesión\n" +  
        "3.Ver usuarios\n" +  
        "4.Salir\n"));
    if (option == 1){
        var crearUsuario = prompt("Ingresa el nombre de usuario: ");
        let existe = false;
        for (let i=0; i< usuarios.length; i++){
            if(usuarios[i] === crearUsuario){
                existe = true;
            }
        }
        if(existe){
            alert("El usuario ya existe");
            //return;           // se sale al existir el usuario
        }
        usuarios.push(crearUsuario);

        var crearContraseña = Number(prompt("Introduce la contraseña: "));
        contraseñas.push(crearContraseña);

    }else if (option == 2){

    }




}while (option != 3);