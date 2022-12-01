import '../styles/globals.css';
import '../styles/components.css';
import '../styles/output.css';
import Header from '../components/Header';
import { ContextProvider } from '../src/context';

function MyApp({ Component, pageProps }) {
  return (
    <div id='main-container' className='bg-gray-500'>
      <ContextProvider>
        <Header />
        <Component {...pageProps} />
      </ContextProvider>
    </div>
  );
}

export default MyApp;
