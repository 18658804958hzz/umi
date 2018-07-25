import React from 'react';
import withRouter from 'umi/withRouter';

import Layout1 from './layout1/layout';
import Layout2 from './layout2/layout'

function SiderDemo ({ children, location }){
    return (
      <Layout2
      children={children}
      location={location}
      />
    );
}

export default withRouter(SiderDemo);