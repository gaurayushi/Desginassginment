import React, { useState } from "react";
import { motion } from "framer-motion";

const SummaryPopup = () => {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const toggleSummary = () => {
    setIsSummaryOpen((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#F8F8F8" }}>
      {/* Fixed Bottom Summary Button */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          maxWidth: "700px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px 16px 0 0",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={toggleSummary}
      >
        <p style={{ fontSize: "16px", fontWeight: "600", color: "#212121", margin: 0 }}>Summary</p>
        <span
          style={{
            fontSize: "16px",
            color: "#9E9E9E",
            transform: isSummaryOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          {isSummaryOpen ? "▼" : "▲"}
        </span>
      </div>

      {/* Summary Popup */}
      {isSummaryOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            maxWidth: "400px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px 16px 0 0",
            padding: "16px",
            zIndex: 100,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#212121" }}>Summary</h4>
            <span
              style={{
                fontSize: "18px",
                color: "#9E9E9E",
                cursor: "pointer",
                
              }}
              onClick={toggleSummary}
            >
              ▼
            </span>
          </div>

           {/* Summary Items */}
           <div style={{ display: "flex", flexDirection: "column", gap: "16px"  }} >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#FFC107",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                   
                   
                  }}
                >
                  ✓
                </span>
                <div>
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#212121",
                      margin: 0,
                    }}
                  >
                    Goal
                  </h5>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#9E9E9E",
                      margin: 0,
                    }}
                  >
                    Healthy Eating
                  </p>
                </div>
              </div>
              <button
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #FFC107",
                  borderRadius: "4px",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => alert("Edit clicked!")}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "#FFC107",
                    fontWeight: "700",
                  }}
                >
                  ✎
                </span>
              </button>
            </div>

            {/* Gender */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#FFC107",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  ✓
                </span>
                <div>
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#212121",
                      margin: 0,
                    }}
                  >
                    Gender
                  </h5>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#9E9E9E",
                      margin: 0,
                    }}
                  >
                    Male
                  </p>
                </div>
              </div>
              <button
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #FFC107",
                  borderRadius: "4px",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => alert("Edit clicked!")}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "#FFC107",
                    fontWeight: "700",
                  }}
                >
                  ✎
                </span>
              </button>
            </div>

            {/* BMI */}
            <div>
              <input
                type="text"
                placeholder="BMI"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#212121",
                  textAlign: "center",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Responsive Styles */}
      <style>
      {`
       
       <style>
  @media only screen and (max-width: 480px) {
    /* Extra Small Devices (Mobile Portrait) */
    .summary-popup {
    left: "10%",
      transform: translateX(-50%);
      width: 95%;
      max-width: 400px;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    /* Small Devices (Mobile Landscape & Small Tablets) */
    .summary-popup {
       left: "10%",
      transform: translateX(-50%);
      width: 90%;
      max-width: 400px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    /* Medium Devices (Tablets & Smaller Desktops) */
    .summary-popup {
        left: "10%",
      transform: translateX(-50%);
      width: 80%;
      max-width: 500px;
    }
  }

  @media only screen and (min-width: 1025px) {
    /* Large Devices (Laptops & Desktops) */
    .summary-popup {
       left: "10%",
      transform: translateX(-50%);
      width: 70%;
      max-width: 600px;
    }
  }
</style>

        `}
      </style>
    </div>
  );
};

export default SummaryPopup;
