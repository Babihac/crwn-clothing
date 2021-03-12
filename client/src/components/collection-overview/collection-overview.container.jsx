import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverView from './collection-overview.component';
import {compose} from 'redux'


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverView);


export default CollectionsOverViewContainer;