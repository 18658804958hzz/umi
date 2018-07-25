import React from 'react';
import { connect } from 'dva';

class Test extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			a:"还没有发送呢"
		}
	}
	requestRedux = () => {
		this.props.dispatch({
			type:'test/cs',
			a:'我是请求过来的action'
		})
		this.setState({
			a:this.props.a
		})
	}
	render(){
		const {dispatch,a} = this.props;
		return(
			<div>
				<p>我是一个测试页面！</p>
				<p>
					<strong>我接收到的是：</strong>{this.props.aaa}
				</p>
				<button>请求后台</button>

				<button onClick={this.requestRedux}>请求Redux</button>
				{this.state.a}
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	console.log('state.test.a',state.test.a)
	return {
		a:state.test.a
	}
}

export default connect(mapStateToProps)(Test);