import { lazy } from 'react';
import { Container } from '@material-ui/core';




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
