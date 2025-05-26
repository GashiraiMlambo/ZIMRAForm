import React, { useState } from "react";

const ZIMRAForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    branch: "",
    clientName: "",
    accountNumber: "",
    tin: "",
    contactAddress: "",
    email: "",
    cell: "",
    phoneNumber: "",
    signatureVerifiedBy: "",
    identification: "",
    createdBy: "",
    authorizedBy: "",
    clientSignature: "",
    currencies: {
      ZWG: false,
      ZAR: false,
      GBP: false,
      USD: false,
      BWP: false,
      EURO: false,
      Other: false,
    },
    declaration: false,
  });

  const textStyle = {
    color: "navy",
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        currencies: { ...formData.currencies, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <form style={{ maxWidth: "600px", margin: "auto", position: "relative" }}>
      <img src="/Logo.png" alt="Company Logo" style={{ width: "150px" }} />




      <h2 style={{ textAlign: "right", marginLeft: "160px", fontSize: "18px", ...textStyle }}>
        ZIMRA ACCOUNT LINKING INSTRUCTION FORM
      </h2>

      {/* Centrally aligned currencies in two rows */}
      <div style={{ textAlign: "center", marginBottom: "15px", ...textStyle }}>
        <h3>Select Currencies:</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <label><input type="checkbox" name="ZWG" onChange={handleChange} /> ZWG</label>
          <label><input type="checkbox" name="ZAR" onChange={handleChange} /> ZAR</label>
          <label><input type="checkbox" name="GBP" onChange={handleChange} /> GBP</label>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
          <label><input type="checkbox" name="USD" onChange={handleChange} /> USD</label>
          <label><input type="checkbox" name="BWP" onChange={handleChange} /> BWP</label>
          <label><input type="checkbox" name="EURO" onChange={handleChange} /> EURO</label>
          <label><input type="checkbox" name="Other" onChange={handleChange} /> Other</label>
        </div>
      </div>

      {/* Branch and Date in the same row */}
      <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        <label style={textStyle}>Branch: <input type="text" name="branch" onChange={handleChange} /></label>
        <label style={textStyle}>Date: <input type="date" name="date" onChange={handleChange} /></label>
      </div>

      {/* Client Name and Account Number in the same row (max length: 14) */}
      <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        <label style={textStyle}>Client Name: <input type="text" name="clientName" onChange={handleChange} /></label>
        <label style={textStyle}>Client Account Number: <input type="text" name="accountNumber" maxLength="14" onChange={handleChange} /></label>
      </div>

      {/* TIN field with max length of 9 */}
      <label style={textStyle}>TIN: <input type="text" name="tin" maxLength="9" onChange={handleChange} /></label>

      {/* Contact Details Section */}
      <h3 style={textStyle}>Contact Details</h3>

      <label style={textStyle}>Contact Address: <input type="text" name="contactAddress" onChange={handleChange} /></label>

      <div style={{ display: "flex", gap: "20px" }}>
        <label style={textStyle}>Email Address: <input type="email" name="email" onChange={handleChange} /></label>
        <label style={textStyle}>Cell: <input type="text" name="cell" onChange={handleChange} /></label>
      </div>

      <label style={textStyle}>Phone Number(s): <input type="text" name="phoneNumber" onChange={handleChange} /></label>

      {/* Declaration section */}
      <h3 style={textStyle}>Declaration by Applicant(s)</h3>
      <p style={textStyle}>I/We confirm that the details furnished are correct and authorize CBZ Bank to link the provided account to ZIMRA TIN provided.</p>
      <label style={textStyle}>
        
      </label>

      {/* Client(s) Signature(s) */}
      <label style={textStyle}>Client(s) Signature(s): <input type="text" name="clientSignature" onChange={handleChange} /></label>

      {/* For Bank Use Only - Black Border with Updated Layout */}
      <div style={{ border: "2px solid black", padding: "15px", marginTop: "20px", ...textStyle }}>
        <h3>For Bank Use Only</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <label>Signature Verified By: <input type="text" name="signatureVerifiedBy" onChange={handleChange} /></label>
          <label>Identification: <input type="text" name="identification" onChange={handleChange} /></label>
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <label>Created By: <input type="text" name="createdBy" onChange={handleChange} /></label>
          <label>Authorized By: <input type="text" name="authorizedBy" onChange={handleChange} /></label>
        </div>
      </div>

      {/* Submit button */}
      <button type="submit" style={{ backgroundColor: "navy", color: "white" }}>
        Submit
      </button>
    </form>
  );
};

export default ZIMRAForm;
