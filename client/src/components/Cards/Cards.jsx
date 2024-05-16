import "./Cards.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import code2 from "../../components/Cards/ImagesCards/code2.jpg";
import Img2 from "../../components/Cards/ImagesCards/Img2.jpg";
import Img3 from "../../components/Cards/ImagesCards/Img3.jpg";
import Img4 from "../../components/Cards/ImagesCards/Img4.jpg";
import Img5 from "../../components/Cards/ImagesCards/Img5.jpg";
import Img6 from "../../components/Cards/ImagesCards/Img6.jpg";


function Cards() {
    return (
        <CardGroup className="gap-5 container-sm mt-3">
        <Card className="container-sm" >
          <Card.Img  src={code2} />
          <Card.Body className="Title Text botonc">
            <Card.Title className="Title">Titulo 1</Card.Title>
            <Card.Text className="Text">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button className="botonc" style={{backgroundColor:"#45b8ac"}}>Comprar</Button>
                  <Card.Footer className="footerC">
            <div className="footer-price" style={{color:"white"}}>000€</div>
                    </Card.Footer>
                </Card.Body>
            </Card>
            
            <Card className="">
          <Card.Img variant="top" src={code2} />
          <Card.Body className="Title Text botonc">
            <Card.Title className="Title">Titulo 1</Card.Title>
            <Card.Text className="Text">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button className="botonc" style={{backgroundColor:"#45b8ac"}}>Comprar</Button>
                  <Card.Footer className="footerC">
            <div className="footer-price" style={{color:"white"}}>000€</div>
                    </Card.Footer>
                </Card.Body>
            </Card>
            
            <Card className="">
          <Card.Img variant="top" src={code2} />
          <Card.Body className="Title Text botonc">
            <Card.Title className="Title">Titulo 2</Card.Title>
            <Card.Text className="Text">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button className="botonc" style={{backgroundColor:"#45b8ac"}}>Comprar</Button>
                  <Card.Footer className="footerC">
            <div className="footer-price" style={{color:"white"}}>000€</div>
                    </Card.Footer>
                </Card.Body>
          </Card>
        
           </CardGroup>


     
        
     
       




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
       
    )
}
export default Cards;