import { useState } from 'react'
import '../App.css'
import { Button, Card } from 'react-bootstrap'

import {useNavigate} from 'react-router-dom'
export default function HomePage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  return (
    <div className="w-400 h-400 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h1>Chess Tutor</h1>
          <p>Learn how to play chess openings! If you are a beginner or intermediate player, learning openings will help in improving rating!</p>
          {/* <h1>Hello World!</h1> */}
          {/* <Button onClick={() => setCount(o => o + 1)}>Count: {count}</Button> */}
        </Card.Body>
        <Button variant="secondary" onClick={() => navigate('/sicilian')}>Go to First Lesson!</Button>
      </Card>
    </div>
  )
}
