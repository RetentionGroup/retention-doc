import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, useAccordionToggle, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './doc_menu_item.scss';


class DocMenuItem extends Component {
    ContactToggle = ({ eventKey }) => {
        const decoratedOnClick = useAccordionToggle(eventKey);
        return (
            <Card variant='secondary' onClick={decoratedOnClick} />
        );
    }
    render() {
        const { data, id, key_name, description } = this.props;
        return (
            <div className='doc-menu-item-container'>
                <div className='doc-menu-item-name'>
                    <Link to={{ pathname: `/${id}`, state: data }}>
                        <Accordion.Toggle as={Button} variant="link" eventKey={id}>
                            {key_name}
                        </Accordion.Toggle>
                    </Link>
                </div>
                <Accordion.Collapse eventKey={id}>
                    <Card className='doc-menu-item-description'>
                        <Card.Body>{description}</Card.Body>
                    </Card>
                </Accordion.Collapse>
            </div>
        )
    }
}

export default DocMenuItem;