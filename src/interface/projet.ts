interface projet_interface {
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

export default projet_interface