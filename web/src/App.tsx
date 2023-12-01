import Header from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import defaultThemes from './styles/themes/default';
import Order from './components/Orders';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyles/>
        <Header/>
        <Order/>
      </ThemeProvider>
    </>
  );
}

export default App;
