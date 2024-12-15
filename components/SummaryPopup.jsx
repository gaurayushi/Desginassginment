import React, { useState } from "react";
import { motion } from "framer-motion";

const SummaryPopup = () => {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const toggleSummary = () => {
    setIsSummaryOpen((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#F8F8F8" }}>
      {/* Main Content */}
      <div style={{ padding: "16px", maxWidth: "700px", margin: "0 auto" }}>
        {/* Your content here */}
      </div>

      {/* Fixed Bottom Summary Button */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          maxWidth: "700px",
          left: "calc(50% - 350px)", // Center align the box
          backgroundColor: "#FFFFFF",
          boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px 16px 0 0",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Align text and arrow on far ends
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={toggleSummary}
      >
        <p
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#212121",
            margin: 0,
          }}
        >
          Summary
        </p>
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
            maxWidth: "700px",
            left: "calc(50% - 350px)", // Align the popup with the summary button
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
              ▼{/* Arrow for closing */}
            </span>
          </div>

          {/* Summary Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Goal */}
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
                    color:"white",
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
    backgroundColor: "#FFFFFF", // White background
    border: "2px solid #FFC107", // Yellow border
    borderRadius: "4px", // Slightly rounded corners
    width: "24px", // Square box
    height: "24px", // Square box
    display: "flex", // To center-align the icon
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer", // Pointer cursor on hover
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
  }}
  onClick={() => alert("Edit clicked!")} // Example click action
>
  <span
    style={{
      fontSize: "14px", // Adjust icon size
      color: "#FFC107", // Yellow color for the icon
      fontWeight: "700", // Bold for better visibility
    }}
  >
      ✎ {/* Pencil icon moved to the right */}
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
                    color:"white",
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
    backgroundColor: "#FFFFFF", // White background
    border: "2px solid #FFC107", // Yellow border
    borderRadius: "4px", // Slightly rounded corners
    width: "24px", // Square box
    height: "24px", // Square box
    display: "flex", // To center-align the icon
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer", // Pointer cursor on hover
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
  }}
  onClick={() => alert("Edit clicked!")} // Example click action
>
  <span
    style={{
      fontSize: "14px", // Adjust icon size
      color: "#FFC107", // Yellow color for the icon
      fontWeight: "700", // Bold for better visibility
    }}
  >
      ✎ {/* Pencil icon moved to the right */}
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
                  textAlign:"center"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SummaryPopup;

