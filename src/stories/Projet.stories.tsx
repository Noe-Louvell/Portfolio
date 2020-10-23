import React from 'react';
import { Projet } from '../component/Projet';
import { projets, projet } from '../mocks/Projet.mocks';

export default {
    title: 'Components/Site/Show'
}

const Template = (args) => <Projet {...args} />

export const ProjetsCards = Template.bind({});
ProjetsCards.args = {
    data : projets
}

export const ProjetCard = Template.bind({});
ProjetCard.args = {
    data : projet
}