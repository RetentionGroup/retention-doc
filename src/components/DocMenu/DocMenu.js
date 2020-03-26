import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion} from 'react-bootstrap';
import DocMenuItem from '../DocMenu/DocMenuItem' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './doc_menu.scss';


class DocMenu extends Component {
    docContentLoader = () => {
        const { docContent } = this.props;
        if (!docContent) {
            return <div>Loading</div>
        }
        const docList = docContent.map(data =>
            <DocMenuItem data={data} id={data.id} key_name={data.name_document} description={data.description} key={data.name_document}/>
        )
        
        return docList;
    }

    render() {
        return (
            <Accordion className='doc-menu-container'>
               <this.docContentLoader/>
            </Accordion>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        docContent: state.docContentReducer
    }
}

export default connect(mapStateToProps, null)(DocMenu);