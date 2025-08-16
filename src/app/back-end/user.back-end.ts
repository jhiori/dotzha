import { UserInfo } from "os";
import { User_Info } from "../interfaces/usuario.interface"
import { UsuarioService } from "../services/usuario.service"


export class User_BackEnd {


    constructor(private _usuarioService: UsuarioService,){}

    getUsuarioInfo_BE(userInfo: User_Info): User_Info{
        let userInfo_ = {}

        this._usuarioService.getUsuarioInfoById(userInfo.idUser!).subscribe(resp => {
            console.log('User info: ', resp)
            if(resp.success && resp.data.lenght != 0)
                // userInfo = resp.data[0]
                //Filtrar datos para buscar usuario
                console.log(resp.data)
                userInfo_ = resp.data.filter((x:any) => x.idUser === userInfo.idUser)
                console.log('Usuario filtrado', userInfo_)
            })

        return userInfo_
    }
    
}
