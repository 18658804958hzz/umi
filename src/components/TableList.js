
// import React from 'react';
// import {Table} from 'antd';
// const style=function(flag,color){
// 	return {
// 		width:15,height:15,
// 	    backgroundColor:color,borderRadius:'50%',
// 	    display:flag?'':'none',float:'left',marginLeft:3,
// 	    fontSize:12,color:'#fff',textAlign:'center',fontStyle: 'normal'
// 	}	
// }
// const columns = [{
//     title:' 区域一  ',
//     align:'left',
//     width:110,
//     height:110,
//     dataIndex: 'area1',
//     render:function(val){
//     	return (<img style={{width:110,height:110}} src={val.url} />)
//     }
    
//   },{
//     title: ' 区域二 ',
//     align:'left',
//     dataIndex: 'area2',
//     render:function (val){
//       return(
//         <div>
// 	        <li>案件号    : {val.ajh}</li>
// 	        <li>案件类型: {val.ajlx}</li>
// 			<li style={{display:'inline-block'}}>
// 				<span style={{float:'left'}}>案件状态: </span>
// 				<i style={style(val.czzt.qs,'#13c2c2')} title='签收'></i>
// 				<i style={style(val.czzt.sl,'#fa8c16')} title='受理'></i>
// 				<i style={style(val.czzt.db,'#fa541c')} title='督办'></i>
// 				<i style={style(val.czzt.cz,'#18900f')} title='处置'></i>
        
// 			</li>
//             <li>案件来源: {val.ajly}</li>
//         </div>
//       )
//     }
  
//   },{
//     title: ' 区域三  ',
//     align:'left',
//     dataIndex: 'area3',
//     render:(val)=>{
//     	return (
//     		<div>
//     			<li>案件类型: {val.ajlx}</li>
//     			<li>区域名称: {val.qymc}</li>
//     		</div>
//     	);
//     }
//   },{
//     title: ' 区域四 ',
//     align:'left',
//     dataIndex: 'area4',
//     render:(val)=>{
//     	return (
//     		<div>
//     			<li>上报时间: {val.sbsj}</li>
//     			<li>处置时限: {val.czsx}</li>
//     		</div>
//     	);
//     }
//   }];
  
  
//   const data = [];
//   for (let i = 0; i < 100; i++) {
//     if(i%3==0){
//       data.push({
//         key: i,
//         area1:{url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
//         area2:{ajh:`2018联字${i}`,ajlx: `案件类型. ${i}`,czzt:{qs:true,sl:true,db:false,cz:true},ajly: `区级巡查员. ${i}`},
//         area3:{ajlx: `案件类型. ${i}`,qymc: `区域. ${i}`},
//         area4:{sbsj: '2018-06-25 12:41',czsx: '2018-06-25 12:41'},
//         ajh:`2018联字${i}`
//       });
//     }else if(i%2==0){
//       data.push({
//         key: i,
//        	area1:{url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
//         area2:{ajh:`2018联字${i}`,ajlx: `案件类型 ${i}`,czzt:{qs:false,sl:true,db:false,cz:true},ajly: `区级巡查员. ${i}`},
//         area3:{ajlx: `案件类型. ${i}`,qymc: `区域. ${i}`},
//         area4:{sbsj: '2018-06-25 12:41',czsx: '2018-06-25 12:41'},
//         ajh:`2018联字${i}`
//       });
//     }else{
//       data.push({
//         key: i,
//         area1:{url:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
//         area2:{ajh:`2018联字${i}`,ajlx: `案件类型. ${i}`,czzt:{qs:true,sl:true,db:true,cz:true},ajly: `区级巡查员. ${i}`},
//         area3:{ajlx: `案件类型. ${i}`,qymc: `区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}`},
//         area4:{sbsj: '2018-06-25 12:41',czsx: '2018-06-25 12:41'},
//         ajh:`2018联字${i}`
//       });
//     }
//   }

// //
// //  传统列表显示方式
// //  addTabPane为父组件传递过来的回调函数，目的是获取唯一标识
// // 

// class TableList extends React.Component{
//   state = {
//     selectedRows: [], // Check here to configure the default column
//   };
//   onSelectChange = (selectedRowKeys) => {
//     this.setState({ selectedRowKeys });
//   }
//   render(){
//     return(
//       <Table
//       columns={columns} 
//       dataSource={data} 
//       onRow={(record) => {
// 	    return {
// 	      onDoubleClick:()=>{this.setState({selectedRows:[record]});this.props.caseDell()}
// 	      //onDoubleClick:()=>{this.state.selectedRows.push(record);this.props.caseDell()}
// 	    };
// 	  }}
//       pagination={{ pageSize: 10 }} 
//       style={{'margin':'15px 16px',boxShadow:'0 0 5px rgba(0,0,0,.2)'}}
//       rowSelection={{
//         onChange: (selectedRowKeys, selectedRows) => { 
//           console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//           this.setState({
//             selectedRows:selectedRows
//           })
//         },        
//         getCheckboxProps: record => ({
//           disabled: record.name === 'Disabled User', // Column configuration not to be checked
//           name: record.name,
//         }),
//         columnWidth:'30px'
//       }}
//       />
//   )
//   }  
// }
// export default TableList;


import React from 'react';
import {Table} from 'antd';

const columns = [{
    title:'处置状态',
    dataIndex:'czzt',
    align:'center',
    width:110,
    render:function (record){
      return(
        <div style={{display:'inline-block'}}>
          <i 
            style={{width:'15px',height:'15px',
            backgroundColor:'#13c2c2',borderRadius:'50%',
            display:record.qs?'':'none',float:'left',marginLeft:'3px',
            fontSize:'12px',color:'#fff',textAlign:'center',fontStyle: 'normal'}}
            title='签收'
          ></i>
          <i 
            style={{width:'15px',height:'15px',backgroundColor:'#fa8c16',borderRadius:'50%',
            display:record.sl?'':'none',float:'left',marginLeft:'3px',fontStyle: 'normal'}}
            title='受理'
          ></i>
          <i 
            style={{width:'15px',height:'15px',backgroundColor:'#fa541c',lineHeight:'15px',
            borderRadius:'50%',display:record.db?'':'none',float:'left',marginLeft:'3px',
            fontSize:'12px',color:'#fff',textAlign:'center',fontStyle: 'normal'
          }}
            title='督办'
            >5</i>
          <i 
            style={{width:'15px',height:'15px',backgroundColor:'#18900f',
            borderRadius:'50%',display:record.cz?'':'none',float:'left',
            marginLeft:'3px',fontStyle: 'normal'}}
            title='处置'  
          ></i>
        </div>
      )
    }
  },{
    title: '案卷号',
    align:'center',
    dataIndex: 'ajh'
  
  },{
    title: '案件来源',
    align:'center',
    dataIndex: 'ajly'
  },{
    title: '案件状态',
    align:'center',
    dataIndex: 'ajzt'
  },{
    title: '案件类型',
    align:'center',
    dataIndex: 'ajlx',
    width:'300px',
    render:(record)=>{
      return(
        <p 
        title={record}
        style={{width:'300px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}
        >
          {record}
        </p>
      )
    }
  },{
    title: '区域名称',
    align:'center',
    dataIndex: 'qymc',
    width:'200px',
    render:(record)=>{
      return(
        <p 
        title={record}
        style={{width:'200px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}
        >
          {record}
        </p>
      )
    }
  },{
    title: '上报时间',
    align:'center',
    dataIndex: 'sbsj'
  },{
    title: '处置时限',
    align:'center',
    dataIndex: 'czsx',
  }];
  
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    if(i%3==0){
      data.push({
        key: i,
        czzt:{qs:true,sl:true,db:false,cz:true},
        ajh: `2018联字${i}`,
        ajly: `区级巡查员. ${i}`,
        ajzt: `已立案`,
        ajlx: `案件类型. ${i}`,
        qymc: `区域. ${i}`,
        sbsj: '2018-06-25 12:41',
        czsx: '2018-06-25 12:41',
      });
    }else if(i%2==0){
      data.push({
        key: i,
        czzt:{qs:false,sl:true,db:false,cz:true},
        ajh: `2018联字${i}`,
        ajly: `区级巡查员. ${i}`,
        ajzt: `已立案`,
        ajlx: `案件类型. ${i}案件类型. ${i}案件类型. ${i}案件类型. ${i}案件类型. ${i}案件类型. ${i}案件类型. ${i}`,
        qymc: `区域. ${i}`,
        sbsj: '2018-06-25 12:41',
        czsx: '2018-06-25 12:41',
      });
    }else{
      data.push({
        key: i,
        czzt:{qs:true,sl:true,db:true,cz:true},
        ajh: `2018联字${i}`,
        ajly: `区级巡查员. ${i}`,
        ajzt: `已立案`,
        ajlx: `案件类型. ${i}`,
        qymc: `区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}区域. ${i}`,
        sbsj: '2018-06-25 12:41',
        czsx: '2018-06-25 12:41',
      });
    }
  }

//
//  传统列表显示方式
//  addTabPane为父组件传递过来的回调函数，目的是获取唯一标识
// 

class TableList extends React.Component{
  state = {
    selectedRows: [], // Check here to configure the default column
  };
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  render(){
    return(
      <Table
      columns={columns} 
      dataSource={data} 
      onRow={(record) => {
	    return {
	      onDoubleClick:()=>{this.setState({selectedRows:[record]});this.props.caseDell()}
	      //onDoubleClick:()=>{this.state.selectedRows.push(record);this.props.caseDell()}
	    };
	  }}
      pagination={{ pageSize: 10 }} 
      style={{'margin':'15px 16px',boxShadow:'0 0 5px rgba(0,0,0,.2)'}}
      rowSelection={{
        onChange: (selectedRowKeys, selectedRows) => { 
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          this.setState({
            selectedRows:selectedRows
          })
        },        
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
        columnWidth:'30px'
      }}
      />
  )
  }  
}
export default TableList;
