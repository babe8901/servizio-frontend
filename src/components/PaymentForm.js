import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const history = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: name,
        email: email,
      },
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
    } else {
      // Send the payment method ID to your server for processing
      history.push("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-section'>
        <h2>Billing Details</h2>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>

      <div className='form-section'>
        <h2>Payment Details</h2>
        <div className='form-group'>
          <label htmlFor='card'>Card Details</label>
          <CardElement id='card' />
        </div>
      </div>

      {cardError && <div className='error'>{cardError}</div>}

      <button type='submit' disabled={!stripe || processing}>
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default PaymentForm;
