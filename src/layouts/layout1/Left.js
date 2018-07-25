import React from 'react';
import { Icon ,Input,Badge,Tooltip  } from 'antd';

import Link from 'umi/link';

import styles from './Left.css'

const toggleIcon = {
    fontSize: '14px',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,.3)',
    padding: '6px 12px',
    position: 'absolute',
    right: '10px',
    top: '22px',
    borderRadius: '4px'
}

class Left extends React.Component{
	state = {
    collapsed: false,
  };
  toggle = () => {
    this.props.toggle();
  }
  render(){
  	return (
  		<div>
  			<div className={styles.logo}>
            <h1 style={{'display':this.props.collapsed?'none':'block'}}>
              协同办公<span>V5.0</span>
            </h1>
          </div>
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
            style={toggleIcon}
          />

          <Input
            prefix={<Icon type="search" style={{ color: '#fff',fontSize:'14px' }} />}
            placeholder="input search text"
            style={{ width: this.props.collapsed?'36px':'230px' }}
            className={styles.searchMenu}
          />

          <div className={styles.menu}>
            <div className={styles.box}>
              <div className={styles.title} style={{'display':this.props.collapsed?'none':'block'}}>
                <span>受理中心</span>
                <Icon type='setting' className={styles.titleIcon}/>
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <i className={styles.liActive}>
                      <Icon type="caret-right" style={{fontSize:'12px',color:'#fff','marginLeft':'-3px'}}/>
                    </i>
                    <Tooltip placement="left" title='待受理'>
                      <Icon type='edit' style={{fontSize:'18px',color:'#fff'}}/>
                    </Tooltip>
                    <Badge count={111} 
                      style={{backgroundColor: 'rgb(13, 184, 223)',border:'none',boxShadow:'none' }}
                      overflowCount={99}
                      offset={[10,120]}
                    >
                      <Link to="/">
                        待受理
                      </Link>
                    </Badge>
                  </li>
                  <li>
                    <i className={styles.liActive}>
                      <Icon type="caret-right" style={{fontSize:'12px',color:'#fff','marginLeft':'-3px'}}/>
                    </i>
                    <Tooltip placement="left" title='已受理'>
                      <Icon type='code-o' style={{fontSize:'18px',color:'#fff'}}/>
                    </Tooltip>                    
                    <a >已受理</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title} style={{'display':this.props.collapsed?'none':'block'}}>
                <span>处置中心</span>
                <Icon type='setting' className={styles.titleIcon}/>
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <i className={styles.liActive}>
                        <Icon type="caret-right" style={{fontSize:'12px',color:'#fff','marginLeft':'-3px'}}/>
                    </i>
                    <Tooltip placement="left" title='待处置'>
                      <Icon type='edit' style={{fontSize:'18px',color:'#fff'}}/>
                    </Tooltip>
                    
                    <Badge count={25} 
                        style={{backgroundColor: 'rgb(13, 184, 223)',border:'none',boxShadow:'none' }}
                        overflowCount={99}
                        offset={[10,120]}
                      >
                        <a>待处置</a>
                    </Badge>
                  </li>
                  <li>
                    <i className={styles.liActive}>
                      <Icon type="caret-right" style={{fontSize:'12px',color:'#fff','marginLeft':'-3px'}}/>
                    </i>
                    <Tooltip placement="left" title='已处置'>
                     <Icon type='code-o' style={{fontSize:'18px',color:'#fff'}}/>
                    </Tooltip>
                    
                    <a>已处置</a>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className={styles.box}>
              <div className={styles.title} style={{'display':this.props.collapsed?'none':'block'}}>
                <span>决策中心</span>
                <Icon type='setting' className={styles.titleIcon}/>
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                      <i className={styles.liActive}>
                        <Icon type="caret-right" style={{fontSize:'12px',color:'#fff','marginLeft':'-3px'}}/>
                      </i>
                    <Tooltip placement="left" title='综合查询'>
                     <Icon type='search' style={{fontSize:'18px',color:'#fff'}}/>
                    </Tooltip>
                   
                    <a>综合查询</a>
                  </li>
                  <li>
                    <i className={styles.liActive}>
                        <Icon type="caret-right" style={{fontSize:'12px',color:'#fff','marginLeft':'-3px'}}/>
                    </i>
                    <Tooltip placement="left" title='审批'>
                     <Icon type='code-o' style={{fontSize:'18px',color:'#fff'}}/>
                    </Tooltip>
                    
                    <a>审批</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
  		</div>
  	)
  }
}

export default Left;