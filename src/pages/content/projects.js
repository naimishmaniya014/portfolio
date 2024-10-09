import vdohio from './images/vdohio.png';
import natn from './images/natn.png';
import sortingalgo from './images/sortingalgo.png';
import portfolio from './images/portfolio.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Visualizing Fabric Of Ohio City',
    description:
      'Developed a web app to explore and visualize demographic data for Ohio city. Focused on optimizing performance and creating interactive elements to enhance user experience.',
    skills: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'D3.js'],
    image: vdohio,
    links: {
      github: 'https://github.com/naimishmaniya014/Visualizing-Fabric-Of-Ohio-City',
    },
  },
  {
    title: 'News Aggregator - Tagged News',
    description:
      'Developed a platform for real-time news discussions, enabling users to submit, comment, and engage with community-driven content through an interactive voting system and structured reply threads.',
    skills: ['Python', 'HTML5', 'CSS3', 'Material UI'],
    image: natn,
    links: {
      github: 'https://github.com/naimishmaniya014/Project-News-Aggregator-Tagged-News',
    },
  },
  {
    title: 'Sorting Algorithm Visualizer',
    description:
      'Built an interactive tool to visualize and compare sorting algorithms, providing users with real-time displays and insights into time and space complexity.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NextJS'],
    image: sortingalgo,
    links: {
      github: 'https://github.com/naimishmaniya014/Sorting-Algorithm-Visualizer',
      preview: 'https://sorting-algorithm-visualizer-tan.vercel.app/',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/vai0/portfolio',
    },
  },
];
