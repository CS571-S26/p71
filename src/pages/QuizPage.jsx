// import ChessBoard from "../components/ChessBoard";
import {Card, Button, Alert} from 'react-bootstrap';

export default function QuizPage(){
    
    return(
        <div>
            <Card>
                <h1>What is the first move in the London System?</h1>
                <Button variant="primary" onClick={() => alert("Correct!")}>d4</Button>
                <Button variant="success" onClick={() => alert("Incorrect!")}>e4</Button>
                <Button variant="warning" onClick={() => alert("Incorrect!")}>h4</Button>
                <Button variant="danger" onClick={() => alert("Incorrect!!")}>c3</Button>
            
            
            </Card> 
        <p>More questions coming soon!</p>
        </div>
    )
}