import { useState } from 'react'
import './App.css'
import BackgroundImage from './assets/system_images/background.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [count, setCount] = useState(0)

  const myStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    height: "100vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

  return (
    <>
      <div className="heading-div" style={myStyle}> 
        <h6>&bmsp;</h6>
        <h1>দীর্ঘমেয়াদে পায়ের ক্ষতি না করতে চাইলে চামড়ার লোফার জুতা ব্যাবহার করুন !</h1>
        <Container className='container'>
          <Row>
            <Col className='mid-div' xs lg="2">বায়ু প্রবাহের ক্ষেত্রে পশুর চামড়া অনেক বেশি কার্যকরী অতিরিক্ত ঘামায় না এবং দুর্গন্ধ ছড়ায় না!</Col>
            <Col className='mid-div' xs lg="2">বায়ু প্রবাহের ক্ষেত্রে পশুর চামড়া অনেক বেশি কার্যকরী অতিরিক্ত ঘামায় না এবং দুর্গন্ধ ছড়ায় না!</Col>
          </Row>
        </Container>

      </div>
           
    </>
  )
}

export default App
