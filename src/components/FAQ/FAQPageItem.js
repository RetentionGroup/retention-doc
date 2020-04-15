import React, { Component } from 'react';
import { Accordion, Card, useAccordionToggle, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq_page_item.scss';

class FAQPageItem extends Component {
    ContactToggle = ({ eventKey }) => {
        const decoratedOnClick = useAccordionToggle(eventKey);
        return (
            <Card variant='secondary' onClick={decoratedOnClick} />
        );
    }
    render() {
        const { id, name_document, link_document } = this.props;
        return (
            <div className='faq-page-item-container'>
                <div className='faq-page-item-name'>
                    <Accordion.Toggle as={Button} variant="link" eventKey={id}>
                        {name_document}
                    </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey={id}>
                    <Card className='faq-page-item-description'>
                        <Card.Body><iframe src={link_document}  frameBorder='0' marginHeight='0' marginWidth='0'></iframe></Card.Body>
                    </Card>
                </Accordion.Collapse>
            </div>
        )
    }
}

export default FAQPageItem;