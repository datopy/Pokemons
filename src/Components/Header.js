import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Link to="/">
                        <NavbarBrand href='/'>
                            Pokemons
                        </NavbarBrand>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;