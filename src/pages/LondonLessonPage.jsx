import ChessBoard from '../components/ChessBoard'
import LessonCard from '../components/LessonCard'
import Header from '../components/Header'
import Tips from '../components/tips'
import OpeningMoves from '../components/OpeningMoves'

export default function LondonLessonPage() {
  const londonFen = 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1'

  return (
    <div>
      <Header
        title="London System"
        badge="White Opening"
        subtitle="The London System is a reliable opening setup for White based on d4, Bf4, Nf3, e3, and c3."
      />

      <LessonCard title="Main idea">
        <p>
          The London System is popular because White can use a similar setup
          against many Black defenses. It focuses on fast development, king
          safety, and a strong central structure.
        </p>
      </LessonCard>

      <LessonCard title="Typical goals">
        <ul>
          <li>Play d4 and develop the dark-square bishop to f4.</li>
          <li>Support the center with e3 and c3.</li>
          <li>Develop knights naturally to f3 and d2.</li>
          <li>Castle early and avoid unnecessary queen moves.</li>
        </ul>
      </LessonCard>

      <OpeningMoves
        moves={[
          'White starts with 1. d4.',
          'White often develops the bishop with Bf4.',
          'White supports the center with e3 and c3.',
          'White usually castles kingside after developing pieces.'
        ]}
      />

      <Tips>
        The London is especially useful for beginners because the setup is easy to remember.
      </Tips>

      <ChessBoard
        title="London Practice Board"
        description="This board starts after 1. d4. Try building the London setup."
        initialFen={londonFen}
      />
    </div>
  )
}