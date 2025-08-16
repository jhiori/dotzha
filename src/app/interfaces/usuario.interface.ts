// import { CatNivel } from "./cat-nivel.interface";
// import { CatPuesto } from "./cat-puesto.interface";
// import { CatUnidad } from "./cat-unidad.interface";

export interface Usuario{
    idUsuario?: number;
    nombreUsuario?: string;
    aPaternoUsuario?: string;
    aMaternoUsuario?: string;
    usuario?: string;
    // idNivel?: number;
    // idPuesto?: number;
    // idUnidad?: number;
    activoUsuario?: number;
}

// export interface UsuarioAll{
//     idUsuario?: number;
//     nombreUsuario?: string;
//     aPaternoUsuario?: string;
//     aMaternoUsuario?: string;
//     usuario?: string;
//     nivel?: CatNivel;
//     puesto?: CatPuesto;
//     unidad?: CatUnidad;
//     activoUsuario?: number;
// }

export interface User_Info{
    idUser?: number;
    nameUser?: string;
    fullNameUser?: string;
    user?: string;
    userDesc?: string;
}