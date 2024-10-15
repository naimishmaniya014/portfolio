import { FaPython, FaJava, FaHtml5, FaReact, FaNodeJs} from "react-icons/fa";
import { SiCplusplus, SiC, SiCss3, SiJavascript, SiTailwindcss, SiD3Dotjs, SiChartdotjs, SiSpring, SiDjango, SiMysql, SiPostgresql, SiMongodb, SiPandas, SiNumpy, SiGit, SiGithub, SiJunit5, SiPycharm, SiIntellijidea, SiJupyter, SiEclipseide} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsdata = {
  Languages: [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'C', icon: <SiC /> },
  ],
  'Front-End': [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'D3.js', icon: <SiD3Dotjs /> },
    { name: 'Chart.js', icon: <SiChartdotjs /> }
  ],
  'Back End': [
    { name: 'Spring', icon: <SiSpring /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
  ],
  'Databases and DevOps': [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Numpy', icon: <SiNumpy /> }
  ],
  'Developer tools': [
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'VS Code', icon: <VscVscode /> },
    { name: 'JUnit', icon: <SiJunit5 /> },
    { name: 'Pycharm', icon: <SiPycharm /> },
    { name: 'IntelliJ', icon: <SiIntellijidea /> },
    { name: 'Jupyter', icon: <SiJupyter /> },
    { name: 'Eclipse', icon: <SiEclipseide /> }
  ]
};

export default skillsdata;
