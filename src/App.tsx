import './App.style.css';
import { Container } from './module/Container';
import { Maps } from './module/Maps';

function App(): JSX.Element {
  return (
    <div className="App">
      <Container>
        <Maps />
      </Container>
    </div>
  );
}

export default App;
