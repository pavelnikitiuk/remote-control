import http from 'services/http';

import Section from './Section';
import './section.css';

http.recordings.temperature.getAll();

export default Section;
