import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import './faq_support_doc_item.scss';


class FAQSupportDocItem extends Component {
    render() {
        const { name_document, link_document } = this.props;
        return (
            <div className='sup-doc-item'>
                <div><FontAwesomeIcon icon={faPaperclip} className='sup-item-icon' /></div>
                <div><a rel='noopener noreferrer' href={link_document} target='_blank'>{name_document}</a></div>
            </div>
        )
    }
}

export default FAQSupportDocItem;