import {Collapse,Tag} from 'antd';

import CaseTable from './CaseTable';
const Panel = Collapse.Panel;
function CaseRight(){
    function callback(){

    }
    return(
         <Collapse defaultActiveKey={['1','2','3']} onChange={callback}>
            <Panel header="历史环节" key="1">
                <div style={{'padding':'15px 10px'}}>
                    <Tag >上报区级</Tag>
                    <Tag>案件修改</Tag>
                </div>
            </Panel>
            <Panel header="当前操作" key="2">
                <div style={{'padding':'15px 10px'}}>
                    <Tag color='blue'>下派区级部门</Tag>
                    <Tag color='blue'>下派街道</Tag>
                    <Tag color='blue'>核实派遣</Tag>
                    <Tag color='blue'>废案</Tag>
                    <Tag color='blue'>上报市级</Tag>
                </div>
            </Panel>
            <Panel header="办理进度" key="3">
                <CaseTable/>
            </Panel>
        </Collapse>
    )
}

export default CaseRight;