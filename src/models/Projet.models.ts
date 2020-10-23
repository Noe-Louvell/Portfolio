export interface IProjet {
    id: number
    titre: string,
    sous_titre?: string,
    description: string,
    lien: string,
    image: string,
    status: boolean,
    groupe?:boolean,
    type:string,
}
