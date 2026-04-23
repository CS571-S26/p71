import { useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import { Button, Card, Stack, Badge } from 'react-bootstrap'

export default function ChessBoard({
  title = 'Interactive Chessboard',
  description = 'Play moves on the board.',
  initialFen = undefined
}) {
  const createGame = () => {
    const chess = new Chess()
    if (initialFen) {
      chess.load(initialFen)
    }
    return chess
  }

  const [game, setGame] = useState(createGame)
  const [moveList, setMoveList] = useState([])

  function pieceMove(previousLoc, newLoc) {
    const updatedGame = new Chess(game.fen())

    try {
      updatedGame.move({
        from: previousLoc,
        to: newLoc,
        promotion: 'q'
      })

      setGame(updatedGame)
      setMoveList(updatedGame.history())
      return true
    } catch {
      return false
    }
  }

  function resetBoard() {
    const resetGame = createGame()
    setGame(resetGame)
    setMoveList([])
  }

  function undoMove() {
    const updatedGame = new Chess(game.fen())
    updatedGame.undo()
    setGame(updatedGame)
    setMoveList(updatedGame.history())
  }

  const statusText = game.isCheckmate()
    ? 'Checkmate'
    : game.isDraw()
    ? 'Draw'
    : game.isCheck()
    ? `${game.turn() === 'w' ? 'White' : 'Black'} is in check`
    : `${game.turn() === 'w' ? 'White' : 'Black'} to move`

  return (
    <Card className="shadow-sm border-0 rounded-4 p-3">
      <Card.Body>
        <div className="text-center mb-3">
          <h3 className="mb-2">{title}</h3>
          <p className="text-muted mb-2">{description}</p>
          <Badge bg="dark">{statusText}</Badge>
        </div>

        <div style={{ width: 'min(420px, 100%)', margin: '0 auto' }}>
          <Chessboard
            position={game.fen()}
            onPieceDrop={pieceMove}
          />
        </div>

        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center mt-3 flex-wrap"
        >
          <Button variant="secondary" onClick={resetBoard}>
            Reset
          </Button>
          <Button variant="outline-dark" onClick={undoMove} disabled={moveList.length === 0}>
            Undo
          </Button>
        </Stack>

        <div className="mt-3">
          <strong>Moves:</strong>{' '}
          {moveList.length > 0 ? moveList.join(', ') : 'No moves yet'}
        </div>
      </Card.Body>
    </Card>
  )
}