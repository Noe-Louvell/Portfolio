import React, { FunctionComponent } from 'react';
import { IProjet } from '../models/Projet.models';
import styled from 'styled-components';
import Theme from "../themes/theme";
interface IProjetProps {
    data: IProjet[];
}
const Card = styled.section`
    display: flex;
    width: 70%;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    background-color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts[0]};
    margin:15px;
    padding:15px;
`;



export const Projet: FunctionComponent<IProjetProps> = ({ data = [] }) => {


    return <Theme>


        {data.map(({ id, titre, sous_titre, description, lien, image, status = true, groupe = false, type }, index) => {
            return <Card key={id}>
                <h3>{titre}</h3>
                <h5>{sous_titre}</h5>
                </Card>

        })}


    </Theme>
}


export default Projet;

