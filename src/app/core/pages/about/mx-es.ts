const summary = `Mi nombre es Marcos López, soy Ingeniero en Sistemas Computacionales
    egresado de la Escuela Superior de Cómputo por el Instituto Politécnico
    Nacional (México). Actualmente me desempeño como desarrollador backend en
    Palo IT. Me considero una persona entusiasta, alegre y dispuesto a colaborar
    con otras personas en proyectos que representen un reto; tengo el compromiso
    personal y el entusiasmo de capacitarme continuamente para crecer
    profesionalmente. Tengo más de 5 años de experiencia como desarrollador y he
    utilizado múltiples lenguajes de programación`;

const courses = [
  {
    title: 'Ing. en Sistemas Computacionales',
    subtitle: 'Instituto Politécnico Nacional',
    description: 'Licenciatura',
  },
  {
    title: 'Consultor Java',
    subtitle: 'CertificaTic',
    description: 'Diplomado 280 hrs',
  },
  {
    title: 'Principios S.O.L.I.D.',
    subtitle: 'Udemy',
    description: 'Curso 6.5 hrs',
  },
  {
    title: 'Angular: De cero a experto',
    subtitle: 'Udemy',
    description: 'Curso 45 hrs',
  },
];

const jobs = [
  {
    title: 'Palo IT',
    subtitle: 'Desarrollador Backend Senior',
    description: 'Abril 2022 - Presente',
    body: `Desarrollo backend con arquitectura de microservicios para el proyecto portal SAC de
          atención a clientes. Desarrollo de microservicios para el proyecto Coppel
          Celulares. Análisis, assesment y testing para SPIN. Proyecto RUN Fábrica en
          donde se atendian requerimientos nuevos, mantenimiento de microservicios y atención de
          incidentes.`,
  },
  {
    title: 'Afirma Solutions',
    subtitle: 'Líder Técnico de squad',
    description: 'Mayo 2021 - Mayo 2022',
    body: `Reingenieria del sistema de notificaciones bancario basado en arquitectura
          de microservicios con comunicación REST y JMS. Los microservicios fueron
          desarrollados utilizando Java 8 y Spring Boot.`,
  },
  {
    title: 'SbFix',
    subtitle: 'Líder Técnico',
    description: 'Febrero 2021 - Mayo 2023',
    body: `Desarrollo de Lambda Functions utilizando NodeJS, persistencia de datos en
          Dynamo DB e implementación de frontend con Angular 13. Integración con API
          de banxico para generación de órdenes de cobro y de pago usando CoDi.`,
  },
  {
    title: 'Laboratorio de Innovación Tecnológica',
    subtitle: 'Desarrollador Full Stack',
    description: 'Febrero 2019 - Diciembre 2020',
    body: `Desarrollo de portal web para el programa del gobierno Juntos por la Paz
          utilizando Angular 8. Desarrollo de aplicación móvil con Framework 7
          Implementación de backend con Python (Django REST) y Mongo DB.`,
  },
];

const skills = [
  { name: 'Java', value: 90 },
  { name: 'Spring', value: 85 },
  { name: 'Python', value: 85 },
  { name: 'Django', value: 75 },
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 80 },
  { name: 'JS', value: 90 },
  { name: 'Angular', value: 90 },
  { name: 'Ingles', value: 80 },
];

export const RESUME = {
  summary,
  courses,
  jobs,
  skills,
};