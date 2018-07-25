import {Card,Icon, Avatar,Row,Col,Pagination} from 'antd';

const { Meta } = Card;

function TableCard(){
    function onChange(){

    }
    return(
        <div>
            <Row gutter={16} style={{marginTop:'15px'}}>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        title="2018联字0000766"
                        description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="2018联字0000761"
                        description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="2018联字0000760"
                        description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{marginTop:'15px'}}>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{ width: '100%' }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="file-text" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>
            <Pagination 
            current={1} 
            onChange={onChange} 
            total={50}
            style={{float:'right'}}
            />
        </div>
    )
}

export default TableCard;