import { Card } from "react-bootstrap"

export default function LessonCard({title, text}){
    return (
        <Card className="h-100 shadow-sm border-0 rounded-4">
            <Card.Body>
                <h2 className="h5">{title}</h2>
                <p className="text-muted mb-0">{text}</p>
            </Card.Body>
        </Card>
    )
}