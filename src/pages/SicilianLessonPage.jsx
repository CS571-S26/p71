import ChessBoard from '../components/ChessBoard'
import LessonCard from '../components/LessonCard'
import OpeningMoves from '../components/OpeningMoves'
import Header from '../components/Header'
import Tips from '../components/tips'

export default function SicilianLessonPage() {
  const sicilianFen = 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'

  return (
    <div>
      <Header
        title="Sicilian Defense"
        badge="Black Opening"
        subtitle="The Sicilian Defense begins with 1. e4 c5 and creates an aggressive, unbalanced game."
      />

      <LessonCard title="Main idea">
        <p>
          Instead of matching White with 1...e5, Black plays 1...c5 to fight for
          the center from the side. This often leads to sharp games where Black
          gets counterplay on the queenside.
        </p>
      </LessonCard>

      <LessonCard title="Typical goals">
        <ul>
          <li>Pressure the d4 square.</li>
          <li>Create queenside counterplay.</li>
          <li>Avoid symmetrical positions.</li>
          <li>Develop quickly and castle safely.</li>
        </ul>
      </LessonCard>

      <OpeningMoves
        moves={[
          'White plays 1. e4 to control the center.',
          'Black responds 1...c5, starting the Sicilian Defense.',
          'White often continues with Nf3 and d4.',
          'Black usually develops knights and prepares active counterplay.'
        ]}
      />

      <Tips>
        In the Sicilian, Black often allows White to build the center first, then attacks it later.
      </Tips>

      <ChessBoard
        title="Sicilian Practice Board"
        description="This board starts after 1. e4 c5. Try exploring White’s next moves."
        initialFen={sicilianFen}
      />
    </div>
  )
}