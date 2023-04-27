import './App.styled.js';
import { Body } from './App.styled.js';
import { WeatherCard } from './Components/card/index.jsx';
import { Form } from './Components/form';
import { Provider } from './Provider/index.jsx';

function App() {
  return (
    <Provider>
      <Body>
        <h1>Weather App</h1>
        <h3>Digite a cidade para buscar a previsão</h3>
        <Form />
        <WeatherCard></WeatherCard>
      </Body>
    </Provider>

  );
}

export default App;
