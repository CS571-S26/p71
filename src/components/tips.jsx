import { Alert } from 'react-bootstrap'

export default function Tips({text}){
    return(
        <Alert variant="info" className="rounded-4">
            <strong>Tip:</strong> {text}
        </Alert>
    )
}