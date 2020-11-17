import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import ControlPanel from './ControlPanel';


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { cellReducer } from '../reducers/cellReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(cellReducer, applyMiddleware(thunk, logger))

test('renders app without ', () => {
   render(  
        <Provider store={store}>
            <ControlPanel />
        </Provider> );
  });