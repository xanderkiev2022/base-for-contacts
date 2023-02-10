import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, LinkStyled } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <LinkStyled to="/" end onClick={e => e.currentTarget.blur()}>
            Home
          </LinkStyled>
          <LinkStyled to="/movies" onClick={e => e.currentTarget.blur()}>
            Movies
          </LinkStyled>
          <LinkStyled to="/register">Register</LinkStyled>
          <LinkStyled to="/login">Log In</LinkStyled>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
