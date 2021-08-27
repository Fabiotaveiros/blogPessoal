import { Tema } from "./Tema"
import { Usuario } from "./Usuário"


export class Postagens{
public id : number
public titulo: string
public texto: string
public data: Date
public usuario: Usuario
public tema: Tema
}