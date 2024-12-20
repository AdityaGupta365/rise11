import React from 'react';
import './styles.css';

const ClaimForm = () => {
  return (
    <div className="claim-form">
      <h3>File your Claim. <span>(Approx 5 Minutes)</span></h3>
      <div className="form-sections">
        <div className="section claim-value">
          <h4>Claim Value</h4>
          <label>Contract Value</label>
          <input type="text" placeholder="10,00,00 USD" />
          <label>Claim Value</label>
          <input type="text" placeholder="15,00,00 USD" />
          <p>150% of Contract Value</p>
        </div>
        <div className="section place">
          <h4>Place</h4>
          <input type="text" placeholder="Select the Place for proceedings" />
          <p>Is the place mentioned in the agreement? <br />
            <input type="radio" name="place" /> Yes
            <input type="radio" name="place" /> No
          </p>
        </div>
        <div className="section language">
          <h4>Language</h4>
          <input type="text" placeholder="Select the language for proceedings" />
          <p>Is the language mentioned in the agreement? <br />
            <input type="radio" name="language" /> Yes
            <input type="radio" name="language" /> No
          </p>
        </div>
      </div>
      <div className="document-sections">
        <div className="document-box">
          <h4>Statement</h4>
          <textarea placeholder="Write your statement here"></textarea>
          <p>or Upload a PDF</p>
        </div>
        <div className="document-box">
          <h4>Agreement under Disputes</h4>
          <button>Upload Contract</button>
        </div>
        <div className="document-box">
          <h4>Additional Documentation</h4>
          <button>Upload Contract</button>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
