import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import FAQPageItem from './FAQAccordionItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import './faq_accordion.scss';


class FAQAccordion extends Component {
    docContentFAQLoader = () => {
        const { docContentFAQ } = this.props;
        if (!docContentFAQ) {
            return <div>Loading</div>
        }

        const docList = docContentFAQ.map(data => 
                <Accordion key={data.category_id}>
                    <div>{data.category_name}</div>
                    {
                        data.category_items.map(dataCategory =>
                            <FAQPageItem
                                id={dataCategory.id}
                                name_document={dataCategory.name_document}
                                link_document={dataCategory.link_document}
                                key={dataCategory.id}
                            />   
                        )
                    }
                </Accordion>
        );

        return docList;
    }

    render() {
        return (
            <div className='faq-content-container'>
                <this.docContentFAQLoader />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        docContentFAQ: state.docContentReducerFAQ
    }
}

export default connect(mapStateToProps, null)(FAQAccordion);


//*****Альтернативный вариант рендеринга при другом построении Json(с проверкой на дубликаты и хаотичными вложеностями)
        // const categoryList = new Map();
        // docContentFAQ.forEach(dataCategory => categoryList.set(dataCategory.category.name, new Array()));
        // docContentFAQ.forEach(data => categoryList.get(data.category.name).push(data));

        // const docList = new Array()
        // categoryList.forEach(data =>
        //     docList.push(
        //         <Accordion key={data[0].category.id}>
        //             <div>{data[0].category.name}</div>
        //             {
        //                 data.map(dataCategory => {
        //                     return <FAQPageItem
        //                         id={dataCategory.id}
        //                         name_document={dataCategory.name_document}
        //                         link_document={dataCategory.link_document}
        //                         key={dataCategory.id}
        //                     />
        //                 }
        //                 )
        //             }
        //         </Accordion>
        //     ));********