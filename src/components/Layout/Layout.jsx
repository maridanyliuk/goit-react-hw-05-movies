import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Nav, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
