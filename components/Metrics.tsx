import { useContext } from 'react';
import { Context } from '../src/context';

function Metrics() {
  const { analysisData } = useContext(Context);

  return (
    <section className='mx-2'>
      <h1>Metrics</h1>
      <div>Query Speed: {analysisData.querySpeed}</div>
    </section>
  );
}

export default Metrics;
