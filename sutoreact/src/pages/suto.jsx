import "./suto.css";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import NavSuto from "../component/stnavbar"
import CardSuto from "../component/stCard"
import CarouselSuto from "../component/stCarousel"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Toast from 'react-bootstrap/Toast'

// Put any other imports below so that CSS from your
// components takes precedence over default styles.





const Suto = () => {

const [comment, setComment] = useState([]); // state for storing data from API

// console.log("state data", comment);

// // function to fetch url
// const getData = (url) => {
// axios.get(url).then((res) => setComment(res.data));
// };


// useEffect(
// () => {
// console.log("component mounting");
// getData("https://jsonplaceholder.typicode.com/comments");
// },
// // dependency
// []
// );

// const [showA, setShowA] = useState(true);
// const toggleShowA = () => setShowA(!showA);
// const [showB, setShowB] = useState(true);
// const toggleShowB = () => setShowB(!showB);
// const [showC, setShowC] = useState(true);
// const toggleShowC = () => setShowC(!showC);
// const [showD, setShowD] = useState(true);
// const toggleShowD = () => setShowD(!showD);
// const [showE, setShowE] = useState(true);
// const toggleShowE = () => setShowE(!showE);

return (

<div>


  <NavSuto />
  <CardSuto />


  <Container>
  {/* <a href="/suto/Heroes">
            <h1>Choose Your Heroes</h1>
            </a>
    <Row>
      <div className="row1">
      <div className="comment3">
          <Col>
          <Toast onClose={toggleShowA} show={showA} animation={false}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              <ol>
                {comment.filter((item, index) => index > 50 && index <= 75).map(item=>
                  <li >{item.email + ' : '}
                  {item.body}
                  </li>
                  )}
              </ol>
            </Toast.Body>
          </Toast>
          </Col>
          <Col xs={6}>
          <Button onClick={toggleShowA}>
          Comment Section <strong>1</strong>
          </Button>
          </Col>
        </div>

        <div className="comment1">
          <Col>
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Comment 1</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              <ol>
                {comment.filter((item, index) => index > 0 && index <= 25).map(item=>
                  <li >{item.email + ' : '}
                  {item.body}
                  </li>
                  )}
              </ol>
            </Toast.Body>
          </Toast>
          </Col>
          <Col xs={6}>
          <Button aria-label="Hide"onClick={toggleShowB}>
          Comment Section <strong>2</strong>
          </Button>
          </Col>
        </div>

        <div className="comment2">
          <Col>
          <Toast onClose={toggleShowC} show={showC} animation={false}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              <ol>
                {comment.filter((item, index) => index > 25 && index <= 50).map(item=>
                  <li >{item.email + ' : '}
                  {item.body}
                  </li>
                  )}
              </ol>
            </Toast.Body>
          </Toast>
          </Col>
          <Col xs={6}>
          <Button onClick={toggleShowC}>
          Comment Section <strong>3</strong>
          </Button>
          </Col>
        </div>

                <div className="comment4">
          <Col>
          <Toast onClose={toggleShowD} show={showD} animation={false}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
            <ol>{comment.filter((item, index) => index >= 75 && index <= 100).map(item=>
                  <li >
                    {item.email + ' : '}
                    {item.body}
                  </li>
                  )}
                  </ol>
            </Toast.Body>
          </Toast>
          </Col>
          <Col xs={6}>
          <Button onClick={toggleShowD}>
          Comment Section <strong>4</strong>
          </Button>
          </Col>
        </div>

        <div className="comment5">
          <Col>
          <Toast onClose={toggleShowE} show={showE} animation={false}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              <ol>
                {comment.filter((item, index) => index >= 125 && index <= 150).map(item=>
                  <li >
                    {item.email + ' : '}
                    {item.body}
                  </li>
                  )}
              </ol>
            </Toast.Body>
          </Toast>
          </Col>
          <Col xs={6}>
          <Button onClick={toggleShowE}>
            Comment Section <strong>5</strong>
          </Button>
          </Col>
        </div> */}


      {/* </div>
    </Row> */}
  
  </Container>



  <CarouselSuto />



</div>
);
};

export default Suto;