import React from 'react';

import projet_interface from '../interface/projet';
interface projet_props {
    data_projet: projet_interface[];
}

export const Projet: React.FC<projet_props> = ({ data_projet }: projet_props) => {

    return <div>
        {data_projet.map(({ id, titre, sous_titre, description, lien, image, status, groupe, type }) => {
            return <ProjetItem key={id}
                id={id}
                titre={titre}
                sous_titre={sous_titre}
                description={description}
                lien={lien}
                image={image}
                status={status}
                groupe={groupe}
                type={type}>
            </ProjetItem>
        })}
    </div>

}

const ProjetItem: React.FC<projet_interface> = ({ id, titre, sous_titre, description, lien, image, status, groupe = false, type }: projet_interface) => {

    return <div className="card-box">
        <div className="card-verso">
            <h1>{titre}</h1>
            <h3>{sous_titre}</h3>
            <img src={image} alt="Ilustration du projet" />
        </div>

        <div className="card-recto">
            <h1>{titre}</h1>
        </div>

    </div>
}

