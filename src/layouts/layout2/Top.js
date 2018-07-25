import { Layout,  Icon ,Badge ,Avatar, Dropdown, Menu } from 'antd';
import styles from './Top.css';
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">修改头像</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">修改密码</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">退出</Menu.Item>
  </Menu>
);
const { Header } = Layout;

function Top(){
	return (
		<Header style={{ background: 'transparent', padding: 0,overflow:'hidden',paddingLeft:'10px',height:'75px' }}>
      <div className={styles.logo}>
        <h1>
          吴中区社会综合治理联动中心<span>v5.0</span>
        </h1>
      </div>
      <div className={styles.notice}>
        <Badge count={25} 
          style={{backgroundColor: 'rgb(234, 63, 63)',border:'none',boxShadow:'none',borderRadius:'50%' }}
          overflowCount={99}
        >
          <Icon type="tags" style={{fontSize:'20px',color:'#fff'}}/>
        </Badge>
        <Badge count={5} 
          style={{backgroundColor: 'rgb(13, 184, 223)',border:'none',boxShadow:'none',borderRadius:'50%' }}
          overflowCount={99}
        >
          <Icon type="profile" style={{fontSize:'20px',color:'#fff',marginLeft:'30px'}}/>
        </Badge>
        <Badge count={0} 
          style={{backgroundColor: 'rgb(234, 63, 63)',border:'none',boxShadow:'none',borderRadius:'50%' }}
          overflowCount={99}
        >
        	<Icon type="flag" style={{fontSize:'20px',color:'#fff',marginLeft:'30px'}}/>
      	</Badge>
    	</div>
    
      <div className={styles.user}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={styles.userPhoto}/>
        <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" style={{color:'#f5f5f5',fontSize:'14px'}}>
          Hi, 小伙子 <Icon type="down" />
        </a>
      </Dropdown>
      </div>
  </Header>
	)
}

export default Top;