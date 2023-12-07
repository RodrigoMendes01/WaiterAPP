import Header from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import defaultThemes from './styles/themes/default';
import Orders from './components/Orders';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyles/>
        <Header/>
        <Orders/>
        <ToastContainer position='bottom-center'/>
      </ThemeProvider>
    </>
  );
}

export default App;
