import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Features from './Features';

import gsoc from './assets/gsoc-logo.svg'
import rc from './assets/rc-logo.svg'
import rocket from './assets/rc-symbol.svg'
import octocat from './assets/octocat.svg';
import pixel1 from './assets/pixel1.svg'
import pixel2 from './assets/pixel2.svg'

import ss1 from './assets/ss1.png'
import ss2 from './assets/ss2.png'
import ss3 from './assets/ss3.png'
import ss4 from './assets/ss4.png'
import ss5 from './assets/ss5.png'
import ss6 from './assets/ss6.png'
import ss7 from './assets/ss7.png'
import ss8 from './assets/ss8.png'
import ss9 from './assets/ss9.png'

import martin from './assets/martin.png'
import me from './assets/me.png'

const ScreenShot = (props) => (
  <Container>
    <Row className="mt-5">
      <Col>
        <Image src={props.ss} className="img-fluid" alt="screenshot of project" />
      </Col>
    </Row>
    <Row>
      <Col className="ss-title text-center">{props.title}</Col>
    </Row>
  </Container>
);

const PR = () => (
  <Row className="gp my-3 py-2 d-flex flex-row align-items-center justify-content-between" onClick={() => { window.location.href = 'https://github.com/RocketChat/Rocket.Chat/pull/22455' }}>
    <Col xs={3}>
      <Image src={octocat} alt='Octocat' width='30px' />
    </Col>
    <Col xs={9}>
      <Row className="gp-name">RocketChat/Rocket.Chat</Row>
      <Row className="gp-name">PR&nbsp;#22455</Row>
    </Col>
  </Row>
);

const GithubProfile = (props) => (
  <Row className="gp my-3 p-2 d-flex flex-row align-items-center justify-content-between" onClick={() => { window.location.href = props.mentor ? 'https://github.com/MartinSchoeler' : 'https://github.com/im-adithya' }}>
    <Col xs={5}>
      <Image src={props.mentor ? martin : me} alt={props.mentor ? 'Martin Schoeler' : 'Adithya Vardhan'} width='60px' />
    </Col>
    <Col xs={{ span: 6, offset: 1 }}>
      <Row className="gp-header">{props.mentor ? 'Mentor' : 'Mentee'}</Row>
      <Row className="gp-name">{props.mentor ? 'Martin Schoeler' : 'Adithya Vardhan'}</Row>
      <Row className="gp-git">{props.mentor ? '@MartinSchoeler' : '@im-adithya'}</Row>
    </Col>
  </Row>
);

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs md={4} className="mt-3">
            <Image src={gsoc} className="gsoc" alt="GSoC logo" />
          </Col>
          <Col md={{ span: 2, offset: 6 }} className="d-none d-md-block">
            <Image src={pixel1} className="pixelone" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5">
          <Col xs={{ span: 6, offset: 3 }} md={{ span: 3, offset: 0 }}>
            <Image src={rc} />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Row className='heading mt-2 mt-md-5 justify-content-center justify-content-md-start text-center'>
              Channel Discovery
            </Row>
            <Row className='heading-title mt-4 justify-content-center justify-content-md-start'>
              Know what's happening on your RC servers!
            </Row>
            <Features />
          </Col>
          <Col md={4} className="mt-4 d-flex flex-column align-items-center justify-content-center">
            <PR />
            <GithubProfile mentor />
            <GithubProfile mentee />
          </Col>
        </Row>

        {/*----------------------- VIDEO STARTS HERE -----------------------*/}
        <Row>
          <Col className='headingsmall mt-6 mb-4 mb-md-5'>Video</Col>
        </Row>
        <Row>
          <Col className='embed-responsive embed-responsive-16by9 m-2'>
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/_tySmRgNNNs`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Channels Discovery | GSoC '21 x Rocket.Chat | Adithya Vardhan"
            />
          </Col>
        </Row>
        {/*----------------------- ABSTRACT STARTS HERE -----------------------*/}

        <Row>
          <Col className='headingsmall mt-6 mb-4 mb-md-5'>Abstract</Col>
        </Row>
        <Row>
          <Col className='abstract-point my-3'>To add a page where users can discover new channels, see the trending channels and get recommendations</Col>
        </Row>
        <Row>
          <Col className='abstract-point my-3'>This is decided on total number of Users, Messages, Topics, whether if it’s Trending etc.</Col>
        </Row>
        <Row>
          <Col className='abstract-point my-3'>Also adding tags for this purpose of recommending and using the topics for sorting channels</Col>
        </Row>
        <Row>
          <Col className='abstract-point my-3'>The ultimate aim of the project is to add a sprinkle of social aspects to rocket.chat which can especially benefit the communities using RC</Col>
        </Row>

        {/*----------------------- SCREENSHOTS START HERE -----------------------*/}

        <Row>
          <Col className='headingsmall mt-6 mb-4 mb-md-5'>Screenshots</Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <ScreenShot ss={ss1} title="Adding tags to public channels" />
          </Col>
          <Col xs={12} md={4}>
            <ScreenShot ss={ss2} title="Viewing tags in Room Info" />
          </Col>
          <Col xs={12} md={4}>
            <ScreenShot ss={ss3} title="Editing tags in a room" />
          </Col>
          <Col xs={12}>
            <ScreenShot ss={ss4} title="Administration side: Used to enable discovery, set the tags in server and give permissions to set and edit required tags for channels" />
          </Col>
          <Col xs={12}>
            <ScreenShot ss={ss5} title="Channel Discovery Screen with Trending, Recommended and All Tabs" />
          </Col>
          <Col xs={12} md={4}>
            <ScreenShot ss={ss6} title="How we solved the lack of space issue while displaying tags" />
          </Col>
          <Col xs={12} md={8}>
            <ScreenShot ss={ss7} title="Search for channels and tags" />
          </Col>
          <Col xs={12}>
            <ScreenShot ss={ss8} title="Tag Search" />
          </Col>
        </Row>

        {/*----------------------- HOW WE DTC STARTS HERE -----------------------*/}

        <Row>
          <Col className='headingsmall mt-6 mb-4 mb-md-5'>How we decided the Trending Channels</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Image src={ss9} className="img-fluid mx-auto d-block" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-6">
        <Row>
          <Col md={2} className="d-none d-md-block">
            <Image src={pixel2} className="pixelone" />
          </Col>
          <Col xs md={{ span: 4, offset: 6 }} className="mt-3 mb-3 theend">
            The End
            <Image src={rocket} width='40px' className='mx-4' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
