import "./Cards.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import code2 from "../../components/Cards/ImagesCards/code2.jpg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Cards() {
    return (
        <Row xs={1} md={2} xl={3} className="gy-5 mx-auto p-5">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col key={idx}>
        <Card className="">
          <Card.Img  src={code2} />
          <Card.Body className="Title Text botonc">
            <Card.Title>Titulo 1</Card.Title>
            <Card.Text className="Text">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button className="botonc"  style={{backgroundColor:"#45b8ac"}}>Comprar</Button>
                  <Card.Footer className="footerC">
            <div className="footer-price" style={{color:"white"}}>000€</div>
                    </Card.Footer>
                </Card.Body>
         
                
          </Card>
         </Col>
      ))}
    </Row>
        
         )
}
export default Cards;
       




        /*<div className="">
            <div className="wrapper overflow-hidden text-center">
                <div className="row gap-5">
                           
            <div className="card">
                <img src={Img1} />
                <div className="info">
                    <h1>Título 1</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    
                    <h1 className="price">000€</h1>
                    <a href="" className="btn"> Comprar</a>
                            
                </div>
            </div>

            <div className="card ">
                <img src={Img2} />
                <div className="info">
                    <h1>Título 2</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
            </div>

            <div className="card ">
                <img src={Img3} />
                <div className="info">
                    <h1>Título 3</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
                        </div>
                    
                        
        
            <div className="card  ">
                <img src={Img4} />
                <div className="info">
                    <h1>Título 4</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
            </div>

            <div className="card ">
                <img src={Img5} />
                <div className="info">
                    <h1>Título 5</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
            </div>

            <div className="card ">
                <img src={Img6} />
                <div className="info">
                    <h1>Título 6</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo diam, mollis eget lectus et, ultrices pretium eros. Sed gravida vel nunc sit amet volutpat. </p>
                    <a href="" className="btn"> Comprar</a>
                </div>
                </div>
            </div>

      
            



                   
                </div>
            </div>*/
       
