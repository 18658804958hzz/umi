import React from 'react';
import {Input,Collapse,Icon,Button,message  } from 'antd';
import { connect } from 'dva';
import styles from './index.css';

import TableList from '../components/TableList';
import TableCard from '../components/TableCard';
import TabsForTable from '../components/TabsForTable'

const Panel = Collapse.Panel;
const Search = Input.Search;
const searchHeader = function(){
  return (
    <div>
      <span>筛选条件</span>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200,float:'right','marginTop':'-5px','borderRadius':'10px','marginRight':'16px' }}
      />
    </div>
  )
}

/**
 * 待受理页面
 */

class IndexPage extends React.Component {
  state={
    showTable : true,//用于控制筛选条件及列表是否显示
    selectedRows:[]
  }

  //动态控制列表是否显示方法
  toggleTable = (flag) =>{
    //如果标签页没有，则一直显示列表
    if(flag){
      this.setState({
        showTable:true
      })
    }else{
      this.setState({
        showTable:!this.state.showTable
      })
    }
    /*
    this.setState({
	    showTable:(flag?true:false)
	  })
    */
  }
	
  caseDell = () => {
  	/*
  	if(e){
  		this.refs.table.state.selectedRows.push(e)
  	}
  	*/
    if(this.refs.table.state.selectedRows.length==0){
      message.warning('请先选择一条或多条案件！');
      return;
    }
    this.setState({
      showTable:false,
      selectedRows:this.refs.table.state.selectedRows
    })
    this.refs.tabs.showTabs()
  }

  render(){
    return (
      <div>
        <TabsForTable 
        ref='tabs'
        toggleTable={this.toggleTable}
        clear={()=>{this.setState({
        	selectedRows:[]})}}
        selectedRows = {this.state.selectedRows}
        />
        <div style={{display:this.state.showTable?'block':'none'}}>
          <div className={styles.filter}>
            <Collapse onChange={(key)=>{console.log(key)}}>	
                <Panel header={searchHeader()} key="1" style={{borderRadius:"0"}}>
                  <ul>
                    <li><span>上报时间:</span></li>
                    <li><a className={styles.active}>全部</a></li>
                    <li><a>当日</a></li>
                    <li><a>本周</a></li>
                    <li><a>本月</a></li>
                    <li><a>本年</a></li>
                  </ul>
                  <ul>
                    <li><span>案件主题:</span></li>
                    <li><a className={styles.active}>全部</a></li>
                    <li><a>环境保护</a></li>
                    <li><a>社会治安</a></li>
                    <li><a>安全生产</a></li>
                    <li><a>城市管理</a></li>
                    <li><a>公众咨询</a></li>
                    <li><a>治安稳定</a></li>
                  </ul>
                  <ul>
                    <li><span>案件来源:</span></li>
                    <li><a className={styles.active}>全部</a></li>
                    <li><a>区数字城管平台</a></li>
                    <li><a>监控摄像头</a></li>
                    <li><a>社会公众</a></li>
                    <li><a>领导交办</a></li>
                    <li><a>区级巡查员</a></li>
                    <li><a>区政府网站</a></li>
                    <li><a>市便民平台</a></li>
                    <li><a>12345热线</a></li>
                  </ul>
                  <ul>
                    <li><span>案件状态:</span></li>
                    <li><a className={styles.active}>全部</a></li>
                    <li><a>待立案</a></li>
                    <li><a>待处置</a></li>
                    <li><a>待核实</a></li>
                    <li><a>待派遣</a></li>
                    <li><a>待结案</a></li>
                    <li><a>废案</a></li>
                  </ul>
                </Panel>
              </Collapse>
          </div>
          <div className={styles.sort}>
            <Icon type="bars" style={{color: 'rgba(0,0,0,.85)', float: 'left',paddingLeft: '15px',marginTop: '18px'}}/>
            <ul>
              <li><span>综合排序</span></li>
              <li><a>案件编号</a></li>
              <li><a>上报时间</a></li>
              <li><a>处置时限</a></li>
            </ul>
            <div style={{float:'right',marginTop:'5px',marginRight: '15px' }}>
              <Button type="primary" ghost onClick={this.caseDell}>业务办理</Button>
              <Button type="primary" ghost>取消签收</Button>
              <Button type="primary" ghost>列表导出</Button>
            </div>
          </div>
          <TableList addTabPane={this.addTabPane} ref='table' caseDell={this.caseDell.bind(this)} />
        </div>
      </div>
    )
  }
}

export default connect()(IndexPage);