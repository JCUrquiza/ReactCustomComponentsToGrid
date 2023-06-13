import { useState } from 'react';
import { CenterPage, FooterPage, LeftPage, RightPage, TopPage } from './components/mains';
import { NewsPage, TablePage, WeatherPage } from './components/secondary';

const App = () => {

  const [componenteBottom, setComponenteBottom] = useState(0);
  // const ubicaciones = [ TopPage, LeftPage, CenterPage, RightPage, FooterPage ];
  const componentes = [ WeatherPage, NewsPage, TablePage ];

  const [contenedor, setContenedor] = useState('');
  const [page, setPage] = useState();

  // const cambiarComponente = () => {
  //   const indiceSiguiente = ( componenteBottom + 1 ) % componentes.length;
  //   setComponenteBottom(indiceSiguiente);
  // }

  const PageToFooter = componentes[componenteBottom];

  // const PageToTop = componentes[componenteBottom];


  const handleConteiner = (event) => {
    setContenedor(event.target.value);
  }

  const handlePage = (event) => {
    setPage(event.target.value);
    console.log( typeof(page) );
  }

  const moveElement = () => {
    console.log(contenedor);
    console.log(page);

    switch (contenedor) {
      case "arriba":
        console.log('arriba');
        break;
      case "abajo":
        console.log('abajo');
        break;
      case "izquierda":
        console.log('izquierda');
        break;
      case "derecha":
        console.log('derecha');
        break;
      default:
        break;
    }

    return (
      <>
        <p>moveElement</p>
      </>
    );
    
    
  }

  return (
    <div className='app-container'>

      <div style={{ display: 'flex', alignItems: 'center' }}>  
        <div style={{ marginRight: '100px' }}>
          <h3>Ubicacion:</h3>
          <select value={contenedor} onChange={handleConteiner}>
            <option value="">Seleccionar</option>
            <option value="arriba">Arriba</option>
            <option value="abajo">Abajo</option>
            <option value="izquierda">Izquierda</option>
            <option value="derecha">Derecha</option>
          </select>
          <p>Opción seleccionada: {contenedor}</p>
        </div>


        <div>
          <h3>Elemento:</h3>
          <select value={page} onChange={handlePage}>
            <option value="">Seleccionar</option>
            <option value="0">Weither</option>
            <option value="1">News</option>
            <option value="2">Table</option>
          </select>
          <p>Opción seleccionada: {page}</p>
        </div>
      </div>

      <button className='button' onClick={moveElement}>Mover componente</button>
      {/* <button className='button' onClick={cambiarComponente} >Cambiar componente</button> */}


      <TopPage />
      <div className='left-right-container'>
        <LeftPage />
        <CenterPage />
        <RightPage />
      </div>
      <FooterPage componente={<PageToFooter />} />
      

      {
        moveElement()
      }
      
    </div>
  )
}

export default App
