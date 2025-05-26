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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        currencies: { ...formData.currencies, [name]: checked },
        ...(name === "declaration" && { declaration: checked }),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const formStyle = {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "32px",
    background: "linear-gradient(145deg, #ffffff, #f0f4f8)",
    borderRadius: "20px",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.5)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: 700,
    color: "#0a1a3c",
    textAlign: "center",
    marginBottom: "32px",
    letterSpacing: "-0.5px",
    textTransform: "uppercase",
  };

  const subHeadingStyle = {
    fontSize: "18px",
    fontWeight: 600,
    color: "#0a1a3c",
    margin: "24px 0 12px",
    position: "relative",
    paddingLeft: "12px",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: 500,
    color: "#0a1a3c",
    marginBottom: "8px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    border: "none",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const checkboxContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "32px",
    padding: "16px",
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "12px",
  };

  const checkboxLabelStyle = {
    fontSize: "14px",
    color: "#0a1a3c",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "8px",
    transition: "background 0.2s ease",
  };

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  };

  const bankUseSectionStyle = {
    borderRadius: "12px",
    padding: "24px",
    marginTop: "32px",
    background: "linear-gradient(145deg, #f8fafc, #e2e8f0)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  };

  const buttonStyle = {
    width: "100%",
    padding: "16px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#ffffff",
    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
    marginTop: "32px",
  };

  const logoStyle = {
    width: "140px",
    margin: "0 auto 24px",
    display: "block",
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
  };

  const declarationTextStyle = {
    fontSize: "14px",
    color: "#0a1a3c",
    lineHeight: "1.6",
    marginBottom: "16px",
    padding: "12px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
  };

  return (
    <>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            input:focus {
              box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
            }
            button:hover {
              background: linear-gradient(90deg, #2563eb, #1e40af);
              box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
            }
            input[type="checkbox"] {
              accent-color: #3b82f6;
              width: 20px;
              height: 20px;
              border-radius: 6px;
              cursor: pointer;
            }
            input[type="checkbox"]:focus {
              box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
            }
            label:hover {
              background: rgba(59, 130, 246, 0.1);
            }
            .form-container::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.1), transparent 70%);
              pointer-events: none;
            }
          `}
        </style>

        <form style={formStyle} className="form-container">
          <img src="/Logo.png" alt="Company Logo" style={logoStyle} />
          <h2 style={headingStyle}>ZIMRA Account Linking Form</h2>

          <div>
            <h3 style={subHeadingStyle}>Select Currencies</h3>
            <div style={checkboxContainerStyle}>
              {["ZWG", "ZAR", "GBP", "USD", "BWP", "EURO", "Other"].map((currency) => (
                <label key={currency} style={checkboxLabelStyle}>
                  <input
                    type="checkbox"
                    name={currency}
                    checked={formData.currencies[currency]}
                    onChange={handleChange}
                  />
                  {currency}
                </label>
              ))}
            </div>
          </div>

          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>Client Name</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Client Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                maxLength="14"
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>TIN</label>
            <input
              type="text"
              name="tin"
              value={formData.tin}
              maxLength="9"
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <h3 style={subHeadingStyle}>Contact Details</h3>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Contact Address</label>
            <input
              type="text"
              name="contactAddress"
              value={formData.contactAddress}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Cell</label>
              <input
                type="text"
                name="cell"
                value={formData.cell}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Phone Number(s)</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <h3 style={subHeadingStyle}>Declaration by Applicant(s)</h3>
          <p style={declarationTextStyle}>
            I/We confirm that the details furnished are correct and authorize CBZ Bank to link the provided account to ZIMRA TIN provided.
          </p>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
            />
            I agree to the declaration
          </label>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Client(s) Signature(s)</label>
            <input
              type="text"
              name="clientSignature"
              value={formData.clientSignature}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={bankUseSectionStyle}>
            <h3 style={subHeadingStyle}>For Bank Use Only</h3>
            <div style={rowStyle}>
              <div>
                <label style={labelStyle}>Signature Verified By</label>
                <input
                  type="text"
                  name="signatureVerifiedBy"
                  value={formData.signatureVerifiedBy}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Identification</label>
                <input
                  type="text"
                  name="identification"
                  value={formData.identification}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={rowStyle}>
              <div>
                <label style={labelStyle}>Created By</label>
                <input
                  type="text"
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Authorized By</label>
                <input
                  type="text"
                  name="authorizedBy"
                  value={formData.authorizedBy}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </>);
};

export default ZIMRAForm;