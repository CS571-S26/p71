import { useState } from 'react'
import '../App.css'
import { Button, Card } from 'react-bootstrap'

import {useNavigate} from 'react-router-dom'
export default function HomePage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  function goToRandomLesson(){
    const lessons = ['/sicilian', '/london'];
    navigate(lessons[Math.floor(Math.random()*lessons.length)]);
  }

  
  return (
    <div className="w-400 h-400 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h1>Chess Tutor</h1>
          <p>Learn how to play chess openings! If you are a beginner or intermediate player, learning openings will help in improving rating!</p>

        </Card.Body>
        <Button variant="dark" onClick={() => navigate('/sicilian')}>Go to the Sicilian Lesson!</Button>
        <Button variant="secondary" onClick={() => navigate('/london')}>Go to the London Lesson!</Button>

        <Button variant="outline-dark" onClick={goToRandomLesson}>Go to a Random Lesson!</Button>
      </Card>
    </div>
  )
}
