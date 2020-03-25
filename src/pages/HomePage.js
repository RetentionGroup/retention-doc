import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/Logo/Logo';
import DocMenu from '../components/DocMenu/DocMenu';
import ContentPage from '../components/ContentPage/ContentPage';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import './home_page.scss'


export default function HomePage() {
    return (
        <Router>
            <Container className='home-page-container'>
                <Row>
                    <Col lg="4" className='left-container'>
                        <Logo />
                        <DocMenu />
                    </Col>
                    <Col lg="8" className='right-container'>
                        <Route path='/' component={WelcomePage} exact />
                        <Route path='/:id' component={ContentPage} exact />
                    </Col>
                </Row>
            </Container>
        </Router>
    )
}