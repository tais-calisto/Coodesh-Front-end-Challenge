import profileImgAna from '../assets/profileAna.svg';

export const comments = [
  {
    _id: 123,
    name: 'Samuel Vidal Hernández',
    initials: 'SV',
    time: '2 meses',
    comment:
      'Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.',
  },
  {
    _id: 456,
    name: 'Francisco José Sacedo',
    initials: 'F',
    time: '3 meses',
    comment:
      'Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.',
    response:
      'Este texto es una simulación de una contestación del equipo o del profesor directamente. El texto tendrá un aspecto diferenciado, y también tendrá un destaque mayor.',
    responseByTeam: true,
    responseTime: '3 meses',
  },
  {
    _id: 789,
    name: 'Ana Milena Gómez',
    profile: profileImgAna,
    time: '3 meses',
    comment: 'Profundizar en el entrenamiento y proceso de enseñanza',
    response:
      'Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!',
    responseBy: 'Mireia Belmonte',
    position: 'Profesor',
    responseTime: '3 meses',
  },
];
