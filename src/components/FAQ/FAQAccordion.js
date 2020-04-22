import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Button, Card } from 'react-bootstrap';
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
            <div>
                <Accordion.Toggle as={Button} variant="link" eventKey={data.category_id}>
                    {data.category_name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={data.category_id}>
                    <Card>
                        {
                            data.category_items.map(dataCategory =>
                                <Accordion key={dataCategory.id}>
                                    <FAQPageItem
                                        id={dataCategory.id}
                                        name_document={dataCategory.name_document}
                                        link_document={dataCategory.link_document}
                                        key={dataCategory.id}
                                    />
                                </Accordion>
                            )
                        }
                    </Card>
                </Accordion.Collapse>
            </div>
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