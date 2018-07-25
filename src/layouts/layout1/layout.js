import { Layout, Icon  } from 'antd';
import React from 'react';
import styles from './index.css';

import Left from './Left.js';
import Top from './Top.js';

const { Sider, Content } = Layout;


class Layout1 extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{height:'100%',backgroundColor:'transparent'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth={60}
          width={250}
          style={{backgroundColor:'transparent',padding :'0 10px',overflow:'hidden'}}
        >
          <Left 
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            location={this.props.location}
          />
          
        </Sider>
        <Layout style={{backgroundColor:'transparent'}}>
          <Top/>
          <Content style={{ margin: '0', padding: 0, background: '#f5f5f5' }}>
            <div className={styles.conentTop}>
              <span className={styles.toTopLeft}></span>
              <span className={styles.torightBottom}></span>
              <div className={styles.positonInfo}>
                <Icon type="home" style={{marginRight:'5px'}}/>
                <Icon type="right" style={{marginRight:'5px'}}/>
                受理中心
                <Icon type="right" style={{marginRight:'5px'}}/>
                待受理
              </div>
            </div>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}




export default Layout1;