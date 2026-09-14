import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-spring-angular',
    title: 'E-Commerce Platform Full-Stack',
    shortDescription:
      'Plataforma e-commerce robusta con autenticación JWT, catálogo de productos y persistencia en PostgreSQL.',
    fullDescription:
      'Aplicación web completa construida con arquitectura en capas. Utiliza Spring Boot 3 con Spring Security y JWT en el backend, y un frontend dinámico en Angular 17+ con Tailwind CSS.',
    tags: [
      'Java',
      'Spring Boot 3',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Angular 17',
      'Tailwind CSS',
    ],
    imageUrl: 'https://via.placeholder.com/600x350?text=E-Commerce+Full-Stack',
    githubUrl: 'https://github.com/tu-usuario/ecommerce-backend',
    featured: true,
    highlights: [
      'Autenticación y autorización mediante JWT (Stateless Security).',
      'Base de datos relacional con PostgreSQL y Spring Data JPA.',
      'API RESTful documentada para la gestión de productos y categorías.',
      'Control de acceso basado en roles (ROLE_ADMIN, ROLE_USER).',
    ],
  },
];
