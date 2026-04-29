import { Card } from 'react-bootstrap'

export default function LessonCard({ title, children }) {
  return (
    <Card className="shadow-sm border-0 rounded-4 mb-4">
      <Card.Body>
        <h2 className="h4 mb-3">{title}</h2>
        <div className="text-muted">{children}</div>
      </Card.Body>
    </Card>
  )
}