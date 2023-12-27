import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Question() {
    return ( 
        <Container>
          <h1 className='my-4'>Frequently Asked Questions</h1>
          <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" >
        <Accordion.Header >how does expedited shipping work?</Accordion.Header>
        <Accordion.Body style={myStyle}>
        When you add expedited delivery to your order, your order will be prioritized before everyone else's. Orders received after 12 a.m EST will be delivered not on the same day but the next day around 12 p.m EST. for example, if you ordered on Jan 1 - 5 a.m EST your order will be delivered on Jan 2 - 12 p.m EST.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>what cannot say in video message?</Accordion.Header>
        <Accordion.Body style={myStyle}>
        We want you to be genuine with your message but please do not use any profanity or talk about religion, politics, or other sensitive topics. We truly appreciate it!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Does the shoutout have to be English? Can i order the message shoutout in other languages</Accordion.Header>
        <Accordion.Body style={myStyle}>
        We have a premium A.I text-to-voice technology that will record your message in the language you provided with the correct accent and dialect. (*we do not use Google translate recordings) We will then play the recorded message for our cast crew so that they can shout it out in your language.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Where is my order</Accordion.Header>
        <Accordion.Body style={myStyle}>
        We will send to the email address you specified in the order. If you have not received your order but have received order delivery emails, please check junk/spam. You can also reach out to us at service@uniquewishes.shop or contact us through our WhatsApp
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
        
    );
}

const myStyle = {
  color: "black",
  backgroundColor: "#FFC107",
  fontFamily: "Sans-Serif"
};

export default Question;