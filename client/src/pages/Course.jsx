import React from "react";

import { Row, Col } from "react-bootstrap";






const Course = () => {
    return (
        <>

            <button onClick={() => window.scrollTo(0, 0)} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <i class="bi bi-arrow-up-circle"></i>
            </button>

            <div>
                <h1 className='text-white text-center'>Curso </h1>
            </div>
            <Row className='text-white'>
                <Col xxl={12}>

                </Col>
            </Row>
        </>

    )
}



export default Course;
