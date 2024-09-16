import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentComponent = () => {
  const location = useLocation();
  const { totalPrice } = location.state || {};
  const [loading, setLoading] = useState(false);


  const createOrderId = async () => {
    setLoading(true);
    try {
      const amount = totalPrice * 100; // Convert to smallest currency unit (e.g., paise for INR)
      const response = await axios.get(`http://localhost:9091/payment/createOrderId/${amount}`);
      const razorpayOrderId = response.data;
      openCheckout(razorpayOrderId);
    } catch (error) {
      console.error('Error creating order ID:', error);
    } finally {
      setLoading(false);
    }
  };

  const openCheckout = (orderId) => {
    if (window.Razorpay) { // Ensure Razorpay is loaded
      const options = {
        key: 'rzp_test_yourKeyId', // Your Razorpay key ID
        amount: (totalPrice * 100).toString(), // Amount in currency subunits
        currency: 'INR',
        name: 'Digital Lync',
        description: 'Test Transaction',
        order_id: orderId, // Order ID obtained from the backend
        theme: {
          color: '#004A55',
        },
        handler: function (response) {
          console.log('Payment Success:', response);
        },
        prefill: {
          name: '', // Optionally fetch user details and populate
          email: '',
          contact: '',
        },
        notes: {
          description: 'Test Payment',
          company_name: 'DigitalLync',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        console.error('Payment Failed:', response.error);
      });
      rzp1.open();
    } else {
      console.error('Razorpay is not loaded');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ₹{totalPrice}</p>
      <button onClick={createOrderId} disabled={loading}>
        {loading ? 'Processing...' : 'Checkout'}
      </button>
    </div>
  );
};

export default PaymentComponent;

