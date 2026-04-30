import Header from '../components/Header'
import QuizCard from '../components/QuizCard'

export default function QuizPage() {
  return (
    <div>
      <Header
        title="Opening Quiz"
        badge="Knowledge Check"
        subtitle="Test what you know about the Sicilian Defense and London System."
      />

      <QuizCard
        question="What is the first move in the London System?"
        answers={['d4', 'e4', 'h4', 'c3']}
        correctAnswer="d4"
        explanation="The London System usually starts with 1. d4."
      />

      <QuizCard
        question="What is Black’s first move in the Sicilian Defense?"
        answers={['c5', 'e5', 'd5', 'Nf6']}
        correctAnswer="c5"
        explanation="The Sicilian Defense begins with 1. e4 c5."
      />

      <QuizCard
        question="What is one major goal of opening play?"
        answers={['Develop pieces', 'Move the queen repeatedly', 'Ignore the center', 'Avoid castling']}
        correctAnswer="Develop pieces"
        explanation="Good openings usually focus on development, king safety, and central control."
      />
    </div>
  )
}