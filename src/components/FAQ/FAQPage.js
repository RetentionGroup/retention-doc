import React, { Component } from 'react';
import { Accordion} from 'react-bootstrap';
import FAQAccordion from './FAQAccordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq_page.scss';


class FAQPage extends Component {

    render() {
        return (
            <div className='faq-page-container'>
                <Accordion>
                    <div className='page-header'>FAQ</div>
                    <FAQAccordion />
                </Accordion>
            </div>
        )
    }
}

export default FAQPage;