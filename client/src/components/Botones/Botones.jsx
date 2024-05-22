import Button from 'react-bootstrap/Button';


const Botones = () => {
  return (
    <div className="container-fluid d-flex justify-content-evenly">
    <Button variant="outline-light">Recientes</Button> {''}
    <Button variant="outline-light">Más buscados</Button>{''}
    <Button variant="outline-light">En oferta</Button>{' '}
          </div>
  );
}

export default Botones;