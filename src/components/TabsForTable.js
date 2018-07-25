import React from 'react';
import { Tabs,Icon,Collapse } from 'antd';

import CaseInfo from './CaseInfo'

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

/**
 * 可动态显示多个案件的标签页组件，主要用于多个案件对比和处理
 */
class TabsForTable extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [];
    this.state = {
      activeKey: '',//默认选中标签
      panes:[],//标签页数据数组
      isShow:true
    };
  }
  
  componentWillReceiveProps(props){
    if(props.selectedRows.length>0){
      this.setState({
        activeKey:props.selectedRows[props.selectedRows.length-1].ajh,
        panes:props.selectedRows
      })
    }
  }
  
  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  showTabs = () =>  {
    this.setState({
      isShow:true
    })
  }

  callback = (a,b) =>{
    debugger
    this.toggleTable()
  }
  //动态显示隐藏列表
  toggleTable=()=>{
    this.props.toggleTable()
  }
  close=()=>{
	  this.props.clear();
	  this.setState({
	    isShow:false,
	    panes:[]
	  });
	  
	  console.log(this.state.panes,'11111111111111',this.props.selectedRows);
	  this.props.toggleTable(true);
  }
  remove = (targetKey) => { //debugger
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.ajh === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.ajh !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].ajh;
    }
    this.setState({ panes, activeKey });
    if(this.state.panes.length==1)this.close();
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  render() {
    // 当标签数组为空时，渲染一句话
    if(this.state.panes.length>0){
      const toggleTable = <Icon type="bars" onClick={this.toggleTable}/>;
      const self = this;
      const header=()=>{
        return(
          <div style={{overflow:'hidden'}}>
            <span style={{float:'left'}}>案件办理</span>
            <p style={{float:'left',marginLeft:'10px',fontSize:'12px',color:'rgba(0,0,0,.8)'}}>
              当前有<strong style={{color:'rgb(19, 194, 194)'}}> {this.state.panes.length} </strong>条案件正在处理
            </p>
            <a href = '#' onClick = {()=>this.close()}>
              <Icon 
                style={{float:'right',fontSize:'18px','color':'#999',marginRight:'15px'}} 
                type="close-circle-o" 
              />
            </a>
          </div>
        )
      }
      return (
        <Collapse 
          defaultActiveKey={['1']} 
          onChange={this.callback}
          activeKey={'1'}
          style={{display:this.state.isShow?'block':'none'}}>
            <Panel header={header()} key="1">
              <Tabs
                hideAdd
                onChange={this.onChange}
                onEdit={this.onEdit}
                activeKey={this.state.activeKey}
                //type='card'
                type="editable-card"
                style={{margin:'15px 16px'}}
                tabBarExtraContent={toggleTable}
              >
                {this.state.panes.map(pane => <TabPane tab={pane.ajh} key={pane.ajh}><CaseInfo/></TabPane>)}
              </Tabs>
            </Panel>
        </Collapse>
        
      );
    }else{
      return(
        <p style={{padding:'0 16px'}}>您还没选择一条案件，请选择案件！</p>
      )
    }
  }
}
export default TabsForTable;