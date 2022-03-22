export interface Annuncio {
  id: number,
  titolo: string,
  descrizione: string,
  autore: {
    nome:string,
    telefono:string,
    email:string
  }
}
