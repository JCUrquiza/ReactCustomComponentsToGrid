import { useState } from 'react';
import { CenterPage, FooterPage, LeftPage, RightPage, TopPage } from './components/mains';
import { NewsPage, TablePage, WeatherPage } from './components/secondary';

const App = () => {
  
  const componentes = [WeatherPage, NewsPage, TablePage];

  const [contenedor, setContenedor] = useState('');
  const [page, setPage] = useState(0);

  const [ubicacionComponentes, setUbicacionComponentes] = useState({
    arriba: null,
    izquierda: null,
    centro: null,
    derecha: null,
    abajo: null,
  });

  const handleConteiner = (event) => {
    setContenedor(event.target.value);
  };

  const handlePage = (event) => {
    setPage(Number(event.target.value));
  };

  const moveElement = () => {
    switch (contenedor) {
      case 'arriba':
        setUbicacionComponentes((prevUbicacionComponentes) => ({
          ...prevUbicacionComponentes,
          arriba: componentes[page],
        }));
        break;
      case 'izquierda':
        setUbicacionComponentes((prevUbicacionComponentes) => ({
          ...prevUbicacionComponentes,
          izquierda: componentes[page],
        }));
        break;
      case 'centro':
        setUbicacionComponentes((prevUbicacionComponentes) => ({
          ...prevUbicacionComponentes,
          centro: componentes[page],
        }));
        break;
      case 'derecha':
        setUbicacionComponentes((prevUbicacionComponentes) => ({
          ...prevUbicacionComponentes,
          derecha: componentes[page],
        }));
        break;
      case 'abajo':
        setUbicacionComponentes((prevUbicacionComponentes) => ({
          ...prevUbicacionComponentes,
          abajo: componentes[page],
        }));
      break;
      default:
        break;
    }
  };

  const PageTop = ubicacionComponentes.arriba;
  const PageLeft = ubicacionComponentes.izquierda;
  const PageCenter = ubicacionComponentes.centro;
  const PageRight = ubicacionComponentes.derecha;
  const PageBottom = ubicacionComponentes.abajo;

  return (
    <div className="app-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '100px' }}>
          <h3>Ubicacion:</h3>
          <select value={contenedor} onChange={handleConteiner}>
            <option value="">Seleccionar</option>
            <option value="arriba">Arriba</option>
            <option value="izquierda">Izquierda</option>
            <option value="centro">Centro</option>
            <option value="derecha">Derecha</option>
            <option value="abajo">Abajo</option>
          </select>
        </div>

        <div>
          <h3>Elemento:</h3>
          <select value={page} onChange={handlePage}>
            <option value="">Seleccionar</option>
            <option value="0">Weather</option>
            <option value="1">News</option>
            <option value="2">Table</option>
          </select>
        </div>
      </div>

      <button className="button" onClick={moveElement}>
        Mover componente
      </button>

      <div className='top-component'>
        {PageTop && <TopPage componente={<PageTop />} />}
      </div>

      <div className="left-right-container">
        <div className='left-component'>
          {PageLeft && <LeftPage componente={<PageLeft />} />}
        </div>
        <div className='center-component'>
          {PageCenter && <CenterPage componente={<PageCenter />} />}
        </div>
        <div className='right-component'>
          {PageRight && <RightPage componente={<PageRight />} />}
        </div>
      </div>

      <div className='footer-component'>
        {PageBottom && <FooterPage componente={<PageBottom />} />}
      </div>
    </div>
  );
};

export default App;

