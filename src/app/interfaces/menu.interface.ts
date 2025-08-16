// export type MenuItem = {
//     icon: string
//     label: string
//     route?: string
//     titleMI?: string
//     subtitleMI?: string
//     descMI?: string

//     subItems?: MenuItem[]
// }

export interface MenuCategoria {
    categoria?: string;
    ordenCategoria?: number;
    iconCategoria?: string;
    rutaCategoria?: string;
    desplegable?: MenuDesplegable[];
}

export interface MenuDesplegable {
    rutaMenu?: string;
    iconMenu?: string;
    etiquetaMenu?: string;
    ordenMenu?: number;
}