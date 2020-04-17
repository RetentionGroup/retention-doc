import React, { Component } from 'react';
import FAQAccordion from './FAQAccordion'
import './faq_page.scss';


class FAQPage extends Component {
  
    render() {
        return (
            <div className='faq-page-container'>
                <div className='page-header'>FAQ</div>
               <FAQAccordion/>
            </div>
        )
    }
}

export default FAQPage;