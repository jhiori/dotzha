// export type MenuItem = {
//     icon: string
//     label: string
//     route?: string
//     titleMI?: string
//     subtitleMI?: string
//     descMI?: string

//     subItems?: MenuItem[]
// }

export interface MenuOption {
    option?: string;
    ordenOption?: number;
    iconOption?: string;
    rutaOption?: string;
    desplegable?: boolean;
    desplegableValues?: MenuDesplegable[];
}

export interface MenuDesplegable {
    rutaMenu?: string;
    iconMenu?: string;
    etiquetaMenu?: string;
    ordenMenu?: number;
}