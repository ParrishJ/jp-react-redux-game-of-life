import React from 'react';

import Grid from './components/Grid'
import ControlPanel from './components/ControlPanel'

import Modals from './components/Modals'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import sun from './images/sun-1.svg'

import './App.scss';


function App() {
  return (
    <div className="App" id="app">
      <div className="containerContainer d-flex mx-auto justify-content-center align-items-center">
        <Container className="appContainer" fluid>
        <Row className="m-0 h-100 flex-column-reverse flex-lg-row">
          <Col className="p-0 p-lg-2 p-xl-5 mb-5 mb-xl-0" xs={12} lg={5}>
            <ControlPanel />
          </Col>
          <Col className="p-0 p-lg-5" xs={12} lg={7}>
            <Grid />
          </Col>
        </Row>
        <Modals />
        </Container>
        <Figure className="sun">
        <Figure.Image
          alt="sun-image"
          src={sun}
        />
      </Figure>
      </div>
    </div>
  );
}

export default App


/* Software used in the creation of this project:
_________________________________________________________________________________________________________________________

create-react-app - License: MIT, Copyright (c) 2013-present, Facebook, Inc.

@testing-library/jest-dom - License: MIT, Copyright (c) 2017 Kent C. Dodds

@testing-library/react - License: MIT, Copyright (c) 2017 Kent C. Dodds

@testing-library/user-event - License: MIT, Copyright (c) 2020 Giorgio Polvara

bootstrap - License: MIT, Copyright: Copyright (c) 2011-2020 Twitter, Inc., Copyright (c) 2011-2020 The Bootstrap Authors

node-sass - License: MIT, Copyright (c) 2013-2016 Andrew Nesbitt

react - License: MIT, Copyright (c) Facebook, Inc. and its affiliates.

react-bootstrap - License: MIT, Copyright (c) 2014-present Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff

react-dom - License: MIT, Copyright (c) Facebook, Inc. and its affiliates.

react-redux - License: MIT, Copyright (c) 2015-present Dan Abramov

create-react-app - License: MIT, Copyright (c) 2013-present, Facebook, Inc.

redux - License: MIT, Copyright (c) 2015-present Dan Abramov

redux-logger - License: MIT, Copyright (c) 2016 Eugene Rodionov

redux-thunk - License: MIT, Copyright (c) 2015-present Dan Abramov


MIT License
_____________________________________________________________________________________________________________________

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */