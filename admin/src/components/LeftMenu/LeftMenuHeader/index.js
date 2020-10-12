import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

const LeftMenuHeader = () => (
  <Wrapper>
    <Link to="/" className="leftMenuHeaderLink projectName">
      <h3 className="name">AgroBook</h3>
    </Link>
  </Wrapper>
);

export default LeftMenuHeader;
