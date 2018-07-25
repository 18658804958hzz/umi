import {Collapse} from 'antd';
import CaseInfoForm from './CaseInfoForm';
import CaseStandard from './CaseStandard';
import CaseAttach from './CaseAttach';
const Panel = Collapse.Panel;
function CaseLeft(){
    function callback(){

    }
    return(
        <Collapse defaultActiveKey={['1','3']} onChange={callback}>
            <Panel header="案件信息" key="1">
                <CaseInfoForm/>
            </Panel>
            <Panel header="标准规范" key="2">
                <CaseStandard/>
            </Panel>
            <Panel header="附件信息" key="3">
                <CaseAttach/>
            </Panel>
        </Collapse>
    )
}

export default CaseLeft;