import React from 'react';
import {Button} from 'antd';
import CaseContent from './CaseContent'

import styles from './CaseInfo.css';

class CaseInfo extends React.Component{
    render(){
        return(
            <div class={styles.box}>
                <p>上一次操作信息：
                    <span>吴中区联动中心（117）操作'上报区级'业务</span>
                    <Button 
                    type="primary"
                    ghost
                    icon='upload'
                    size='small'
                    style={{float:'right',marginTop:'-5px'}}
                    >
                        案件导出
                    </Button>
                </p>
                <CaseContent/>
            </div>
        )
    }
}

export default CaseInfo;