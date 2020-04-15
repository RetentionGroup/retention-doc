import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import FAQPageItem from '../FAQ/FAQPageItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq_page.scss';


class FAQPage extends Component {
    docContentFAQLoader = () => {
        const { docContentFAQ } = this.props;
        if (!docContentFAQ) {
            return <div>Loading</div>
        }
        const docList = docContentFAQ.map(data =>
            <FAQPageItem id={data.id} name_document={data.name_document} link_document={data.link_document} key={data.id} />
        )

        return docList;
    }

    render() {
        return (
            <div className='faq-content-container'>
                <div className='faq-content-name'>FAQ</div>
                <Accordion>
                    <this.docContentFAQLoader />
                </Accordion>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        docContentFAQ: state.docContentReducerFAQ
    }
}

export default connect(mapStateToProps, null)(FAQPage);