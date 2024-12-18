//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
// companies icons
import FreelancerBrandIcon from './img/brands/freelancer.png';
import UpworkBrandIcon from './img/brands/upwork.png';
import FiverBrandIcon from './img/brands/fiverr.png';
import BehanceBrandIcon from './img/brands/behance.png';
import DribbbleBrandIcon from './img/brands/dribbble.png';

// projects images
import Project1 from './img/projects/Jr2.1.png';
import Project2 from './img/projects/p2.webp';
import Project3 from './img/projects/p3.webp';
import Project4 from './img/projects/p4.webp';
import Project5 from './img/projects/p5.webp';
import Project6 from './img/projects/p6.webp';

// skills images
import SkillImg1 from './img/skills/html5.png';
import SkillImg2 from './img/skills/css3.png';
import SkillImg3 from './img/skills/js.png';
import SkillImg4 from './img/skills/reactjs.png';
import SkillImg5 from './img/skills/nextjs.png';
import SkillImg6 from './img/skills/nodejs.png';
import SkillImg7 from './img/skills/git.png';
import SkillImg8 from './img/skills/figma.png';

// testimonial images
import TestiImage1 from './img/testimonials/testimonial-1.webp';
import TestiImage2 from './img/testimonials/testimonial-2.webp';
import TestiImage3 from './img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'Accueil',
    href: 'home',
  },
  {
    name: 'A Propos',
    href: 'about',
  },
 
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'Temoignage',
    href: 'template',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: FiYoutube ,
    href: '',
  },
  {
    icon: FiInstagram ,
    href: '',
  },
  {
    icon: FiGithub ,
    href: '',
  },
  {
    icon: FiDribbble ,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'application',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'Web Development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'application',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'Web Development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'Web Development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'tout',
  },

  {
    name: 'Web Development',
  },
  {
    name: 'application',
  },
 
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
 /*  {
    image: SkillImg8,
  }, */
];

// services
export const services = [
  {
    icon: HiOutlineDevicePhoneMobile ,
    technologie: 'iPhone | Android | Cross Platform ',
    name: 'Mobile App ',
    description:
      "Donnez vie à vos projets mobiles grâce à des applications performantes et adaptées aux exigences de vos utilisateurs.",
  },
  {
    icon: FaLaptopCode ,
     technologie: 'React.js | Node.js | Next.js | MongoDB   ',
    name: 'Web Development',
    description:
      "Concevez un site web performant et élégant qui capte l’attention et engage vos utilisateurs, tout en reflétant vos valeurs.",
  },
  {
    icon: FiPenTool ,
     technologie: 'SEO | SEA | PPC | SMO ',
    name: 'Digital Marketing',
    description:
      "Augmentez vos ventes et votre notoriété grâce à des stratégies de marketing digital personnalisées, adaptées à votre marché et vos besoins.",
  },
  {
    icon: MdMarkEmailUnread ,
     technologie: 'Nexmo | Twillo | MailChimp ',
    name: 'Email & SMS Marketing',
    description:
      "Renforcez votre relation client avec des messages email et SMS ciblés, conçus pour engager et fidéliser durablement votre audience.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: FiMail ,
    title: 'Vous avez une question ?',
    subtitle: 'Je suis ici pour vous aider.',
    description: 'Envoyez-moi un e-mail à toybonadev@gmail.com',
  },
  {
    icon: FiMapPin ,
    title: 'Localisation actuelle',
    subtitle: 'Cotonou, Bénin',
    description: 'Au service des clients du monde entier',
  },
];
