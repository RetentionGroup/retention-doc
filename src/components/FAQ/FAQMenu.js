import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, useAccordionToggle, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq_menu.scss';

class FAQMenu extends Component {
    ContactToggle = ({ eventKey }) => {
        const decoratedOnClick = useAccordionToggle(eventKey);
        return (
            <Card variant='secondary' onClick={decoratedOnClick} />
        );
    }
    render() {
        return (
            <Accordion className='faq-menu-container'>
                <div className='faq-menu-name'>
                    <Link to={{ pathname: `/faq`, state: '' }}>
                        <Accordion.Toggle as={Button} variant="link" eventKey='0'>
                            FAQ
                        </Accordion.Toggle>
                    </Link>
                </div>
                <Accordion.Collapse eventKey='0'>
                    <Card className='faq-menu-description'>
                        <Card.Body>Ответы на часто задаваемые вопросы.(В разработке)</Card.Body>
                    </Card>
                </Accordion.Collapse>
                <div className='faq-menu-name'>
                    <Accordion.Toggle as={Button} variant="link" eventKey='1'>
                        Полезная документация
                    </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey='1'>
                    <Card className='faq-menu-description'>
                        <Card.Body>
                            <a rel='noopener noreferrer' href='https://docs.google.com/spreadsheets/d/1ftAbOMO9ubRXrK5xv1DZdNeBqYiYg-XKaHLI30WEOj4/edit?usp=sharing' target='_blank'>Методичка по оформлению Retention Lists</a>
                            <a rel='noopener noreferrer' href='#' target='_blank'>Документ 2</a>
                            <a rel='noopener noreferrer' href='#' target='_blank'>Документ 3</a>
                            <a rel='noopener noreferrer' href='#' target='_blank'>Документ 4</a>
                        </Card.Body>
                    </Card>
                </Accordion.Collapse>
            </Accordion>
        )
    }
}

export default FAQMenu;