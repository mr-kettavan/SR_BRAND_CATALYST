import React from 'react';
import '../sass/Subscription.scss';

function Subscription() {
  const subscriptionData = {
    plan: 'Premium Plan',
    purchasedDate: '2025-03-01',
    validity: '2025-12-31',
    remainingCredits: 120,
    benefits: [
      'Access to premium content',
      'Exclusive discounts',
      'Priority customer support',
    ],
  };

  return (
    <div className="subscription-container">
      <h1 className="subscription-title">My Subscription</h1>
      <div className="subscription-details">
        <h2 className="plan-name">{subscriptionData.plan}</h2>
        <p><strong>Purchased Date:</strong> {subscriptionData.purchasedDate}</p>
        <p><strong>Validity:</strong> {subscriptionData.validity}</p>
        <p><strong>Remaining Credits:</strong> {subscriptionData.remainingCredits}</p>
        <h3>Benefits:</h3>
        <ul>
          {subscriptionData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Subscription;