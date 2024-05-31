import React from "react";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player"






const Course = () => {
    return (
        <>
            <Container>
                <Row className="my-5 d-flex justify-content-between">
                    <Col sm={12} xl={6} className="" >
                        <ReactPlayer className="d-flex justify-content-center align-items-center" style={{margin:"0 auto"}}
                            url={"https://www.youtube.com/watch?v=pqa09f7NaAo"}
                            width="100%"
                            playing={true}
                            controls={true}
                        muted={true}>

                        </ReactPlayer>
                        
                        
                    </Col>
                    <Col md={12} xl={5} className="">
                        <h1 className="text-center" style={{ color: "#45B8AC" }}>Título del curso</h1>
                        <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus bibendum, vehicula purus sit amet, imperdiet eros. Nulla quis semper velit, non viverra nisl.</p>
                        <div className="text-white rounded d-flex justify-content-center align-items-center py-2" style={{border:"2px solid #45B8AC "}}>
                      {" "}
                     <i className="bi bi-clock text-white me-2"></i> 7.5 hrs{" "}
                        </div>
                        <div className="text-white  rounded d-flex justify-content-evenly align-items-center py-2" style={{border:"2px solid #45B8AC "}}>
                            <h1 className="text-white " > precio </h1>
                            <i className="bi bi-heart fs-2"></i>
                        <Button
                      className="btncompra">
                      <span className="IconContainer">
                        <i className="bi bi-cart2" height="1em"></i>
                      </span>
                      <p className="add">Añadir al carrito</p>
                            </Button>
                            
                        </div>
                    </Col>
                </Row>

                <Row className="my-5 d-flex justify-content-between">
                    <Col xl={6} className="text-white">
                        <h2 style={{ color: "#45B8AC" }}>Lo que aprenderás</h2>
                        <Row>
                            <Col lg={6}>
                        <ul className="list-unstyled">
                            <li className="mb-2" > <i className="bi bi-check2 " style={{ color: "#45B8AC" }}></i>  Lorem ipsum dolor sit amet. </li>
                            <li  className="mb-2"> <i className="bi bi-check2 " style={{ color: "#45B8AC" }}></i>  Lorem ipsum dolor sit amet. </li>
                            <li  className="mb-2"> <i className="bi bi-check2 " style={{ color: "#45B8AC" }}></i>  Lorem ipsum dolor sit amet. </li>
                            <li  className="mb-2"> <i className="bi bi-check2 " style={{ color: "#45B8AC" }}></i> Lorem ipsum dolor sit amet.  </li>
                               </ul>
                            </Col>
                            <Col lg={6}>
                        <ul className="list-unstyled">
                            <li  className="mb-2"> <i className="bi bi-check2 " style={{ color: "#45B8AC" }}></i> Lorem ipsum dolor sit amet.  </li>
                            <li  className="mb-2"> <i className="bi bi-check2 " style={{ color: "#45B8AC" }}></i>  Lorem ipsum dolor sit amet. </li>
                            <li  className="mb-2"> <i className="bi bi-check2 " style={{ color: "#45B8AC" }}></i>  Lorem ipsum dolor sit amet. </li>
                            <li  className="mb-2"> <i className="bi bi-check2 " style={{ color: "#45B8AC" }}> </i>  Lorem ipsum dolor sit amet.</li>
                               </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={5} className="text-white">
                        <h2 style={{ color: "#45B8AC" }}>Sobre el curso</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus bibendum, vehicula purus sit amet, imperdiet eros. Nulla quis semper velit, non viverra nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus bibendum, vehicula purus sit amet, imperdiet eros. Nulla quis semper velit, non viverra nisl.</p>
                    </Col>
                </Row>
            </Container>




            <button onClick={() => window.scrollTo(0, 0)} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <i class="bi bi-arrow-up-circle"></i>
            </button>

           
           
        </>

    )
}



export default Course;