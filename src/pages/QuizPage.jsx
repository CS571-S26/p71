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
                <Button variant="danger" onClick={() => alert("Incorrect!")}>c3</Button>
            
            
            </Card> 
                        <Card>
                <h1>What move can the sicilian defense be played against</h1>
                <Button variant="primary" onClick={() => alert("Incorrect!")}>d4</Button>
                <Button variant="success" onClick={() => alert("Correct!")}>e4</Button>
                <Button variant="warning" onClick={() => alert("Incorrect!")}>h4</Button>
                <Button variant="danger" onClick={() => alert("Incorrect!")}>c3</Button>
            
            
            </Card> 
                <Card>
                <h1>What is the first move the sicilian defense?</h1>
                <Button variant="primary" onClick={() => alert("Incorrect!")}>e5</Button>
                <Button variant="success" onClick={() => alert("Incorrect!")}>d6</Button>
                <Button variant="warning" onClick={() => alert("Incorrect!")}>a5</Button>
                <Button variant="danger" onClick={() => alert("Correct!")}>c5</Button>
            
            
            </Card> 

            <Card>
                <h1>What isn't a variation of the sicilian defense?</h1>
                <Button variant="primary" onClick={() => alert("Incorrect!")}>open variation</Button>
                <Button variant="success" onClick={() => alert("Incorrect!")}>closed variation</Button>
                <Button variant="warning" onClick={() => alert("Incorrect!")}>Smith-Morra Gambit</Button>
                <Button variant="danger" onClick={() => alert("Correct!")}>Krause variation</Button>
            
            
            </Card> 

        <p>More questions coming soon!</p>
        </div>
    )
}