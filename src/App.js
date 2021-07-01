import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/style.scss";
import Header from './components/header/Header'
import { Container } from 'react-bootstrap'
import Router from './pages/Router'

function App() {
  return (
    <Container className="mx-auto" fluid >
     <Header/>
     <Router/>
    </Container>
  );
}

export default App;
