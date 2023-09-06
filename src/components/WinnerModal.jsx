/* eslint-disable react/prop-types */ 
import { Square } from "./Square";

/**
 * Shows a modal window anouncing the end of the game
 * @export
 * @param { object } ModalParams 
 * @param { any } ModalParams.winner 
 * @param { function } ModalParams.resetGame 
 * @return {*} 
 */
export function WinnerModal({winner, resetGame}) {

    if (winner === null) return null;
 
    const winnterText = winner === false ? 'Empate': 'Ganó'
    return (
      <section className="winner">
        <div className="text">
          <h2> { winnterText } </h2>
          <header>
            { winner && <Square>{winner}</Square> }
          </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>

        </div>
      </section> 
      )
  }
