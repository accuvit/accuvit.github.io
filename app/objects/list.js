import React from 'react';
import AboutMePage from 'containers/AboutMePage';
import StudiesPage from 'containers/StudiesPage';
import ExperiencesPage from '../containers/ExperiencesPage';

const list = {
  objects: [
    {
      name: 'Sobre mim',
      iconName: 'issue',
      target: <AboutMePage />,
      key: '',
      isFocus: false,
    },
    {
      name: 'Meus cursos',
      iconName: 'bookmark',
      target: <StudiesPage />,
      key: '',
      isFocus: false,
    },
    {
      name: 'Minhas Experiências',
      iconName: 'folder',
      target: <ExperiencesPage />,
      key: '',
      isFocus: false,
    },
  ],
};

export default list;
