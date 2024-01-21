import { Container, Row } from "react-bootstrap";
import LeftCol from "./components/left-col";
import RightCol from "./components/right-col";
import "./components/style.scss"


function App() {
  return (
    <main>
        <Container fluid className="main-container">
          <Row>
            <LeftCol/>
            <RightCol/>
          </Row>
        </Container>
    </main>
  );
}

export default App;
