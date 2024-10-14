// components/Projects.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class ProjectSkill extends React.PureComponent {
  render() {
    return <span className="project-skill">{this.props.skill}</span>;
  }
}

class ProjectSkills extends React.PureComponent {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => (
          <ProjectSkill skill={skill} key={index} />
        ))}
      </div>
    );
  }
}

class ProjectLinks extends React.PureComponent {
  render() {
    const { github, preview } = this.props.links;
    return (
      <div className="project-links">
        {preview && (
          <a
            href={preview}
            rel="noopener noreferrer"
            target="_blank"
            className="project-link"
          >
            Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        )}
        <a
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="project-link secondary"
        >
          <FontAwesomeIcon icon={faGithub} /> View Source
        </a>
      </div>
    );
  }
}

class ProjectCard extends React.PureComponent {
  render() {
    const { image, title, description, skills, links } = this.props;

    return (
      <div className="project-card">
        <img className="project-image" src={image} alt={title} /> {/* Update to use src */}
        <div className="project-background" />
        <div className="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills skills={skills} />
          <ProjectLinks links={links} />
        </div>
      </div>
    );
  }
}

class Projects extends React.PureComponent {
  render() {
    const { projects = [] } = this.props;  // Provide default empty array
    return (
      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map((proj) => (
            <ProjectCard
              title={proj.title}
              description={proj.description}
              skills={proj.skills}
              links={proj.links}
              image={proj.image}  // Use the image path directly
              key={proj.title}
            />
          ))
        ) : (
          <p>No projects to display</p>  // Show a fallback message if no projects
        )}
      </div>
    );
  }
}

export default Projects;
