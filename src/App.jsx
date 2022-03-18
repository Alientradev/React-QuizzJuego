import {useState} from 'react'
import Juego from './components/Juego'

function App() {

  const [inicio, setInicio] = useState(false)

  return (
    <div>
      { inicio ? <Juego setInicio={setInicio}/> : (
        <div>
            <h1>Juego de Preguntas</h1>
            <div className='inicio-container'>
              <h2>Indicaciones:</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sapien condimentum, sollicitudin lectus porta, facilisis massa. Curabitur lobortis ac turpis vitae condimentum. Suspendisse euismod sit amet quam sed tempor. Donec quis rhoncus dolor, vel venenatis lorem. Integer rutrum ipsum metus, nec tempus urna maximus ut.</p>
              <button
                className='inicio-btn'
                type="button"
                onClick={ () => setInicio(true) }
                >
                Iniciar Juego
              </button>
            </div>
            
        </div>
      )}
    </div>
  )
}

export default App
