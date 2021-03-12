import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {signOutStart} from '../../redux/user/user.action'


const HeaderComponent = ({currentUser, hidden, signOutStart}) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {currentUser ? (
                <div className='option' onClick={() => signOutStart()}>Sign Out</div>
            ) : (
                <Link className='option' to='/signin'>Sign In</Link>
            )
            }
            <CartIcon />
        </div>
        {
            hidden ? null:
            ( <CartDropdown />)
        }
    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);