import React from 'react'
import './Statusbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Transaction from '../Transaction/Transaction';

const Statusbar = () => {
    return (
        <Container>
            <br/>
            <Row>
                <Col sm="6" className="text-center">
                    <h5> <div><i className="fa fa-cubes"></i></div> No. of Blocks Mined </h5> <hr/>
                    <h5 style={{color: '#007bff'}}>#<b>6</b></h5>
                </Col>
                <Col md="6" className="text-center"> <br/>
                    <h5> <div>Node Address (sync <a href=""><i className="fa fa-refresh"></i></a> )</div></h5> <hr/>
                    <h5 style={{color: '#007bff'}}>0x1002542</h5>
                </Col >
            </Row>
            <figure className="text-center my-5">
                <h1 className="display-3" style={{color:"#2f0f64",fontWeight:"bold"}}>Congratulation! Transaction successful.</h1>
            </figure>
            <br/><br/><br/>
        </Container>
    )
}

export default Statusbar
