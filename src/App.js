import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img
  src={logo}
  className="App-logo"
  alt="logo"
  onLoad={() => {
    document.querySelector('.App-logo').style.animationPlayState = 'running';
  }}
/>
     <p>
  <span style={{ color: '#8e24aa', display: 'block', marginBottom: '4px' }}>HOLA MUNDO</span>
  <span style={{ color: '#000000', display: 'block', marginTop: '0' }}>Martha Zabaleta</span>
  
</p>


        <a className="App-link" style={{ color: '#8e24aa' }}
          classname="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
