import { Suspense, lazy } from 'react';
import  Slider  from '../../layout/Slider/Slider';

const Home = () => {
  const NewProduct = lazy(() => import('../../layout/NewProducts/NewProducts'));
  const Container = lazy(() => import('../../layout/Container/Container'));
//   const Footer = lazy(() => import('../../Layout/Footer/Footer'));
  return (
    <div className='home'>
      <Slider />
      <Suspense fallback={<h2>loading</h2>}>
        <Container>
          <NewProduct />
        </Container>
        {/* <Footer /> */}
      </Suspense>
    </div>
  );
};

export default Home;
