import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content_page.scss';


class ContentPage extends Component {

    render() {
        const { name_document, link_document } = this.props.location.state;
        return (
            <div className='content-page-container'>
                <div className='content-name'>{name_document}</div>
                <div className='content-container'>
                    <iframe src={link_document}  frameborder="0" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        )
    }
}

export default ContentPage;