import Button from 'react-bootstrap/Button';
import "./Botones.css"


const Botones = () => {
  return (
    <div className="container-fluid d-flex justify-content-center gap-3 mb-5">
      <Button className='button'>
        <i className="bi bi-bar-chart-fill me-2"></i>
        Recientes</Button> {''}
      <Button className='button'>
        <i className="bi bi-search me-2"></i>
        Más buscados</Button>{''}
      <Button className='button'>
        <i className="bi bi-coin me-2"></i>
        En oferta</Button>{' '}
          </div>
  );
}

export default Botones;