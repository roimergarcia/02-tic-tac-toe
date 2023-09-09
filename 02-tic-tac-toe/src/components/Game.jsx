/* eslint-disable react/prop-types */
import { Square } from "./Square"

/**
 * 
 * @param {object} param 
 * @param {function} param.updateBoard function for updaen a board's square when pressed.
 * @param {Square[]} param.board array of squares that composes the board 
 * @returns  
 */
export function Game({updateBoard, board}){

  return <section className="game">
        {
          board.map( (_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}>
                  {board[index]}
              </Square>
            )
          })
        }
      </section>

}