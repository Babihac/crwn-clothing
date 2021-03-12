import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_k0gUK92CrJD865UDKfjGBGab00nQ3qL5zn';

    const onToken = token => {
        console.log(token);
        alert('Payment succesfull');
    }


    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRW clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}$`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;