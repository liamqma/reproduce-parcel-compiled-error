import React from 'react';
import { render } from 'react-dom';
import Foo from './ui';

const container = document.getElementById('app');
render(<Foo>12345</Foo>, container);
