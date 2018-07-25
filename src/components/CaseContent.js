import {Row,Col} from 'antd';
import CaseLeft from './CaseLeft';
import CaseRight from './CaseRight';

function CaseContent(){
    return(
        <Row gutter={16}>
            <Col span={12}><CaseLeft/></Col>
            <Col span={12}><CaseRight/></Col>
        </Row>
    )
}

export default CaseContent