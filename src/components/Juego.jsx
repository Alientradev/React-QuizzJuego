import preguntas from "../Preguntas"
import { useState } from 'react'

const Juego = ({setInicio}) => {

    const [preguntaAcutal, setPreguntaActual] = useState(0)
    const [puntaje, setPuntaje] = useState(0)
    const [ganancias, setGanancias] = useState(0)
    const [esFinalizado, setEsFinalizado] = useState(false)

    const handleAnswerSubmit = (esCorrecta) => {
        
        // Sumador de Puntaje y ganancias
        if(esCorrecta){
            setPuntaje(puntaje +1);
            setGanancias(ganancias + preguntas[preguntaAcutal].ganancia)
        } 
        // Para pasar a la siguiente pregunta si es correcta, si es false, fin del juego
        if(preguntaAcutal === preguntas.length -1 || esCorrecta === false){
            setEsFinalizado(true);
        }else{
            setPreguntaActual(preguntaAcutal + 1)
        }
    }

    if(esFinalizado) return (
        <main className="container">
            <div className="juego-terminado">
                <h2>Acertaste {puntaje} preguntas de {preguntas.length}</h2>
                <h2>Ganaste un total de $<span className="ganancia">{ganancias}</span> Dolares</h2>
            </div>
            <button
                    type="button"
                    onClick={ () => setInicio(false) }>
                Volver a Jugar!
            </button>
        </main>
    )

    return (
        <main className="container"> 

            <div className="cuerpo-pregunta">

                <div className="titulo-pregunta">
                    <h2>{preguntas[preguntaAcutal].pregunta}</h2>
                </div>

                <div className="datos-pregunta">

                    <div className="info-pregunta">
                        <p>Pregunta <span>{preguntaAcutal+1}</span> de <span>{preguntas.length}</span></p>
                        <p>Categoría: <span>{preguntas[preguntaAcutal].categoria}</span></p>
                    </div>

                    <div className="info-pregunta">
                        <p>Dificultad: <span>{preguntas[preguntaAcutal].nivel}</span></p>
                        <p>Valor: <span>${preguntas[preguntaAcutal].ganancia} USD</span></p>
                    </div>
                    <div className="info-pregunta">
                        <p>Ganancia acumulada: $ <span className="ganancia">{ganancias}</span> USD</p>
                    </div>
                </div>
            </div>

            <div className="respuestas">
                {preguntas[preguntaAcutal].respuestas.map( respuesta => (
                    <button
                        key={respuesta.textoRespuesta}
                        onClick={ () => handleAnswerSubmit(respuesta.esCorrecta, respuesta.ganancia) }>
                        {respuesta.textoRespuesta}
                    </button>
                ))}
            </div>

        </main>
    )
}

export default Juego