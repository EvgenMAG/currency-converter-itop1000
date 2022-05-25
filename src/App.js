import { Suspense, lazy } from 'react';
import { Container } from '@material-ui/core';
import Loading from './Components/Loading/Loader';



const HomePage = lazy(() => import('./views/HomePage')
  // import('./views/HomePage' /* webpackChunkName: "home-page" */),
);


export default function App() {


  return (
    <>
      <Container maxWidth="md">
        <HomePage />
      </Container>
    </>
  );
}
