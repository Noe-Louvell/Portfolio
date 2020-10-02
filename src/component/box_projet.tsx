import React from 'react';




import { Projet } from './projet';

const projetData = [
    {
        id: 1,
        titre: "Iss-Position",
        sous_titre: "Suivez l'ISS !",
        description: "Utilisation d'une API afin de récupérer la position de la station spaciale inter",
        lien: "lien",
        image: "image",
        status: true,
        groupe: false,
        type: "Application JavaScript",
    }
]



function Body() {





    return (

        <div className="body">
            < Projet data_projet={projetData} />
        </div>
    );
}

export default Body;
