import React from 'react';
import './ChangePasswordForm.css';

function ChangePasswordForm() {
  return (
    <div className="chpw-content">
        <div className="chpw-container">
        <h2 className="chpw-title">Change Password</h2>
        <div className="chpw-title-line"></div>
        <div className="chpw-form-container">
            <div className="chpw-form-group">
            <label className="chpw-form-label">Current Password</label>
            <input type="password" className="chpw-form-input"/>
            </div>
            <div className="chpw-form-group">
            <label className="chpw-form-label">New Password</label>
            <input type="password" className="chpw-form-input"/>
            </div>
            <div className="chpw-form-group">
            <label className="chpw-form-label">Confirm Password</label>
            <input type="password" className="chpw-form-input"/>
            </div>
            <div className="chpw-button-group">
            <button className="chpw-save-button">Save</button>
            <button className="chpw-cancel-button">Cancel</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default ChangePasswordForm;