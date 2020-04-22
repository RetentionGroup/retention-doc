import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq_accordion_item.scss';

class FAQAccordionItem extends Component {
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
                    <iframe src={link_document} frameBorder='0' marginHeight='0' marginWidth='0'></iframe>
                </Accordion.Collapse>
            </div>
        )
    }
}

export default FAQAccordionItem;