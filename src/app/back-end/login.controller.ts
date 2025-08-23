// import { Request, Response } from "express";
// import { oracleQueryParams } from "../db/oracleQuery";
// import { UsuarioLogin, UsuarioToken } from '../interfaces/login.interface';
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// // import { generarRespuesta } from "../interfaces/response";
// import RespSrv, { generarRespuesta } from '../interfaces/response';
// import { httpMsg } from "../config/parametros.constantes";
// // import 'dotenv/config'

// const headersColumn = [
//   "idUsuario",
//   "usuario",
//   "pass"
// ];

// export const getAutenticacion = async (req: Request, resp: Response) => {
//   const { usuario, pass } = req.body;
//   let respSrv: RespSrv;
//   let respSrvUser: RespSrv;
//   let respSrvRol: RespSrv;
//   let query = "select " + headersColumn.join(",")
//             + " from usuario where usuario = :usuario "; 
//   //Busca si existe usuario
//   respSrvUser = await oracleQueryParams(query,{ usuario },false,headersColumn);

//   const userLogin = <UsuarioLogin>respSrvUser!.data[0];
  
//   if(respSrvUser!.success){
//     if (respSrvUser!.data[0] != null) {
//       if (userLogin.pass !== null || userLogin.pass !== undefined || userLogin.pass !== "") {
//         //Valida contraseña
//         const isValid = await bcrypt.compare(pass, userLogin.pass || "");
//         if (isValid) {

//           // const idUsuario = userLogin.idUsuario;
//           // let idPerfiles = "";
//           // query = "SELECT cp.idPerfil "
//           //       + "from cat_perfil cp "
//           //       + "join (select idUsuario, idPerfil from rol where idUsuario = :idUsuario) r on r.idPerfil = cp.idPerfil ";
//           // //Busca roles asignados al usuario
//           // respSrvRol = await oracleQueryParams(query,{ idUsuario },false,['idPerfil']);

//           // if (respSrvRol!.success && respSrvRol!.data.length > 0) {

//           //   for(let rol of respSrvRol!.data){
//           //     idPerfiles += rol.idPerfil + ","
//           //   }
//           //   idPerfiles = idPerfiles.substring(0,idPerfiles.length-1);
//           // }else {
//           //   idPerfiles = "_0";//Sin perfil asignado
//           // }

//           const token = jwt.sign(
//             { idUsuario: userLogin.idUsuario,
//               usuario: userLogin.usuario
//               //  ,rol: idPerfiles 
//               },
//             process.env.TOKEN_STRING!,
//             // { expiresIn: "2h" }
//             { expiresIn: "60m" }
//           );
//           resp
//             .cookie("ac_sua", token, {
//               httpOnly: true,
//               secure: false,
//               sameSite: "strict", 
//               /*Dominio necesario para publicación */
//               domain:'216pneicsd64b87',
//               // domain:'.dpeii.local',
               

//               // maxAge: 1000 * 60 * 60, 
//               // maxAge: 1000 * 120, 
//               maxAge: 1000 * 60 * 60, 
//             });

//             respSrv = {
//               success: true,
//               data: [{}],
//               // message: {code:"200", msg: "Autenticado. " + idPerfiles}
//               message: {code:"200", msg: "Autenticado. "} 
//             };
//             // console.log("Autenticado");
//         } else {
//           respSrv = {
//             success: false,
//             data: [{}],
//             message: {code:"400", msg: "Usuario y/o contraseña incorrecta."}
//           };
//           // console.log("Contraseña incorrecta");
//         }
//       } else {
//         respSrv = {
//           success: false,
//           data: [{}],
//           message: {code:"400", msg: "Usuario y/o contraseña incorrecta."}
//         };
//         // console.log("Usuario y/o contraseña incorrecta");
//       }
//     } else if (respSrvUser!.success) {
//       respSrv = {
//         success: false,
//         data: [{}],
//         message: {code:"400", msg: "Usuario y/o contraseña incorrecta."}
//       };
//       // console.log("Usuario incorrecto");
//     }
//   }else{
//     respSrv = respSrvUser;
//   }

//   resp.json(respSrv!);
// };


// export const isLoggedIn = async (req: Request, resp: Response) => {

//   // let respSrv: RespSrv;

//   const respToken = verificaToken(req);
//   // console.log("respToken:::");
//   // console.log(respToken);
//   if(respToken.success){
//     // console.log("respToken.data.usuario:::");
//     // console.log(respToken.data.usuario);
//   }else{
//     logout(resp);
//     // resp.clearCookie("ac_sua");
//     // respSrv = respToken;
//   }
// resp.json(respToken);

// }

// // export const isAuthorized = async (req: Request, resp: Response) => {
// //   const { idUsuario, pathVista } = req.params;
// //   let respSrv: RespSrv;
// //   let isAuthorized = false;

// //   isAuthorized = await isAuthorizedVista(parseInt(idUsuario), pathVista);
// //   if(isAuthorized){
// //     respSrv = {
// //       success: isAuthorized,
// //       data: isAuthorized,
// //       message: {code:"200", msg: httpMsg.HTTP_200_AUTH_APROBADO}
// //     }
// //   } else{
// //     respSrv = {
// //       success: isAuthorized,
// //       data: isAuthorized,
// //       message: {code:"400", msg: httpMsg.HTTP_400_AUTH_DENEGADO}
// //     }
// //   }

// //   resp.json(respSrv);
// // }

// export const isAuthorized = async (req: Request, resp: Response) => {
//   const { idUsuario, pathVista } = req.params;
//   let respSrv: RespSrv;

//   respSrv = await isAuthorizedVista(parseInt(idUsuario), pathVista, "consultar");
//   if(respSrv.success){
//     respSrv.message = {code:"200", msg: httpMsg.HTTP_200_AUTH_APROBADO}
//   } else{
//     respSrv.message = {code:"400", msg: httpMsg.HTTP_400_AUTH_DENEGADO}
//   }

//   resp.json(respSrv);
// }

// export function verificaToken(req: Request): RespSrv {
//   const cookieTkn = req.cookies.ac_sua;
//   let respToken: RespSrv;
//   let usuarioToken: UsuarioToken;
//   //Valida que la cookie exista
//   if(cookieTkn != null && cookieTkn != undefined && cookieTkn != ""){
    
//     usuarioToken = <UsuarioToken>jwt.verify(cookieTkn, process.env.TOKEN_STRING!);
//     //Valida que la cookie tenga los datos correspondientes
//     if(usuarioToken.usuario != null && usuarioToken.usuario != undefined && usuarioToken.usuario != ""){
//       // Valida expiración de token
//       if(Date.now() < usuarioToken.exp * 1000){
//         //Encontró cookie con token valido, sin expirar
//         const usuarioLogin: UsuarioLogin = {
//           idUsuario: usuarioToken.idUsuario,
//           usuario: usuarioToken.usuario
//         }
//         respToken = {
//           success: true,
//           data: usuarioLogin,
//           message: {code:"200", msg: httpMsg.HTTP_200_TOKEN_VALIDO}
//         }
//       } else{
//         //El token expiró
//         respToken = {
//           success: false,
//           data: null,
//           message: {code:"403", msg: httpMsg.HTTP_400_TOKEN_EXPIRADO}
//         }
//       }
//     } else{
//       //No se encontraron datos correctos en cookie
//       respToken = {
//         success: false,
//         data: null,
//         message: {code:"403", msg: httpMsg.HTTP_400_TOKEN_INVALIDO}
//       }
//     }
//   } else{
//     //No se encontró la cookie
//     respToken = {
//       success: false,
//       data: null,
//       message: {code:"403", msg: httpMsg.HTTP_400_COOKIE_NOTFOUND}
//     }
//   }
//   return respToken;
//   // return jwt.verify(cookieTkn, process.env.TOKEN_STRING!);
// }

// /**
//  * 
// **/
// export async function isAuthorizedVista(idUsuario: number, pathVista: string, permiso: string): Promise<RespSrv>{
//   console.log('idUsuario:', idUsuario)
//   console.log('pathVista:', pathVista)
//   let isAuthorized = false;

//   const headersColumn = ['permisos'];

//   const query = "select LISTAGG(cp.permiso,',') "
//               + "within group (order by cp.permiso) permiso "
//               + "from ( "
//               + "    select idPermiso, cv.vista "
//               + "    from perfil_vista pvv "
//               + "    join cat_vista cv on pvv.idVista = cv.idVista "
//               + "    where exists (select idPerfil from rol rr where idUsuario = :idUsuario and pvv.idPerfil = rr.idPerfil) "
//               + "    and cv.vista = :pathVista "
//               + ") pvr "
//               + "join cat_permiso cp on pvr.idPermiso = cp.idPermiso "
//               + "order by 1";
  

//   const respSrv = await oracleQueryParams(query,{idUsuario,pathVista},false,headersColumn);
  
//   // console.log("respSrv:::");
//   // console.log(respSrv);
//   if(respSrv.success){
//     let permisos = respSrv.data[0].permisos
//     if (permisos != null){
//       const permisosLst: string[] = respSrv.data[0].permisos.toString().split(","); 
//       // console.log("permisosLst:::");
//       // console.log(permisosLst);
//       // if(respSrv.data[0].permisos == 1){
//       respSrv.data=permisosLst;
//       if(permisosLst.includes(permiso)){
//         isAuthorized = true;
//       } else{
//         respSrv.data=null;
//       }
//     } else {
//       respSrv.data=null;
//     }
//   }
//   respSrv.success=isAuthorized;

//   return respSrv;
// }

// export const setLogout = async (req: Request, resp: Response) => {
//   // console.log("setLogout");
//   logout(resp);
//   const respSrv: RespSrv = {
//     success: true,
//     data: null,
//     message: {code:"403", msg:"Cierre de sesión"}
//   }
//   resp.json(respSrv);
// }

// export function logout(resp: Response) {
//   resp.clearCookie("ac_sua");
// }
