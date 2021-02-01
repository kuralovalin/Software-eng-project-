import React from 'react'
import {Row,Col} from 'react-bootstrap'
const config={ span: 6, offset: 3 };
function Footer() {
    return (
        <Row
            style={{
                width:"100%",
                position:"fixed",
                bottom:0,
                backgroundColor:"#343a40",
                height:50,
                padding:0,
                margin: 0
            }}
        >
            <Col style={{margin:"auto", padding:0}} md={config} xl={config} lg={config}><h2 style={{color:"white"}}> Memovercity Copyright © </h2></Col>
        </Row>
    )
}

export default Footer
