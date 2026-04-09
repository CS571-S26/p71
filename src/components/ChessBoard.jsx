import {Chess} from 'chess.js';
import {Chessboard} from 'react-chessboard';
import {Button, Card} from 'react-bootstrap';
import {useState} from 'react'
export default function ChessBoard(){
    const [game, setGame] = useState(new Chess());

    function pieceMove(previousLoc, newLoc){
        const updatedGame = new Chess(game.fen());

        const move = updatedGame.move({
            from:previousLoc,
            to:newLoc,
            promotion:'q'
        });

        if(move === null){
            return false;
        }

        setGame(updatedGame)
        return true;
        }

        return(
            <Card>
                <div style={{width:"400px", height:"400px"}}>
                <Chessboard position={game.fen()} onPieceDrop={pieceMove}/>
                </div>
            </Card>
        )
}