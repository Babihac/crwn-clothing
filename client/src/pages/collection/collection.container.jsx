import {connect} from 'react-redux';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors'
import {compose} from 'redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component';
import {createStructuredSelector} from 'reselect'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);


export default CollectionPageContainer;