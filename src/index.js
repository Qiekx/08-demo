import React from 'react';
import {render} from 'react-dom';

import Routers from './routers.js';
import './main.css';
import 'highlight.js/styles/arta.css'
import './post.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(<Routers />,document.getElementById('root'));
