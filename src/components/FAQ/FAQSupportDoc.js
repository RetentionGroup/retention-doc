import React, { Component } from 'react';
import { connect } from 'react-redux';
import FAQSupportDocItem from '../FAQ/FAQSupportDocItem'

class FAQSupportDoc extends Component {
    docContentLoader = () => {
        const { docContentSup } = this.props;
        if (!docContentSup) {
            return <div>Loading</div>
        }
        const docList = docContentSup.map(data =>
            <FAQSupportDocItem name_document={data.name_document} link_document={data.link_document} />
        )

        return docList;
    }

    render() {
        return (
            <div>
                <this.docContentLoader />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        docContentSup: state.docContentReducerSupMenu
    }
}

export default connect(mapStateToProps, null)(FAQSupportDoc);