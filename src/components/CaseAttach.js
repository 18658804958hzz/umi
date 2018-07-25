import {Row,Col} from 'antd';
import CaseMap from './CaseMap';
import CaseCarousel from './CaseCarousel';
function CaseAttarch(){
    return(
        <Row gutter={16}>
            <Col span={12}>
                <CaseMap/>
            </Col>
            <Col span={12}>
                <CaseCarousel/>
            </Col>
        </Row>
    )
}

export default CaseAttarch;