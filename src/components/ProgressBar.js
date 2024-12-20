import React from 'react';
import './styles.css';

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="step completed">01 Preliminary</div>
      <div className="step completed">02 Your Details</div>
      <div className="step completed">03 KYC</div>
      <div className="step active">04 Parties</div>
      <div className="step">05 Claim</div>
      <div className="step">06 Review</div>
      <div className="step">07 Payment</div>
    </div>
  );
};

export default ProgressBar;
