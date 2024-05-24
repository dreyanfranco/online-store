import Button from 'react-bootstrap/Button';
import "./Botones.css"


const Botones = () => {
  return (
    <div className="container-fluid d-flex justify-content-evenly">
    <Button className='button '>Recientes</Button> {''}
    <Button className='button'>Más buscados</Button>{''}
    <Button className='button'>En oferta</Button>{' '}
          </div>
  );
}

export default Botones;