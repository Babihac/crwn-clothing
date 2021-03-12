import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import './collection-overview.styles.scss';

const CollectionOverView = ({shop_data}) => (
    <div className="collections-overview">
        {shop_data.map(({id, ...other}) => (<PreviewCollection key={id} {...other}></PreviewCollection>))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    shop_data: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverView)