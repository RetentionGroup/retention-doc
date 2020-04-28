import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FireAnimation from '../FireAnimation/FireAnimation';
import { Accordion, Card, Button } from 'react-bootstrap';
import FAQSupportDoc from '../FAQ/FAQSupportDoc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq_menu.scss';

class FAQMenu extends Component {
    render() {
        return (
            <Accordion className='faq-menu-container'>
                <div className='faq-menu-name'>
                    <Link to={{ pathname: `/faq`, state: '' }}>
                        <Accordion.Toggle as={Button} variant="link" eventKey='0'>
                            <div className='item-icon'>FAQ<FireAnimation /></div>
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
                    <Card className='faq-sup-card'>
                        <FAQSupportDoc />
                    </Card>
                </Accordion.Collapse>
            </Accordion>
        )
    }
}

export default FAQMenu;