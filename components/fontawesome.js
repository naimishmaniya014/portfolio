// components/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faGithub } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add icons to the library
library.add(faGithub, faExternalLinkAlt);

export { FontAwesomeIcon };
