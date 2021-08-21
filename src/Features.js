import { Col, Image, Row } from 'react-bootstrap';

import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'

function Features() {
    return (
        <div className="features">
            <Row className="mt-5">
                <Col md={6} className="features py-3">
                    <Row className="align-items-center">
                        <Col xs={3} lg={2}>
                            <Image src={icon1} width='25px' className='mx-3' />
                        </Col>
                        <Col xs={9} lg={10}>
                            Set tags for public channels
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="features py-3">
                    <Row className="align-items-center">
                        <Col xs={3} lg={2}>
                            <Image src={icon2} width='25px' className='mx-3' />
                        </Col>
                        <Col xs={9} lg={10}>
                            Search for channels using hashtags
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="features py-3">
                    <Row className="align-items-center">
                        <Col xs={3} lg={2}>
                            <Image src={icon3} width='25px' className='mx-3' />
                        </Col>
                        <Col xs={9} lg={10}>
                            View your server's trending channels
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="features py-3">
                    <Row className="align-items-center">
                        <Col xs={3} lg={2}>
                            <Image src={icon4} width='25px' className='mx-3' />
                        </Col>
                        <Col xs={9} lg={10}>
                            Get channel recommendations as per your liking!
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Features;