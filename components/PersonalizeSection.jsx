import { motion } from "framer-motion";
import SummaryPopup from "./SummaryPopup";
import RequestForCallback from "./RequestForCallback";
import React, { useState } from "react";


const PersonalizeSection = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false); // State to toggle modal

  const toggleCallback = () => {
    setIsCallbackOpen((prev) => !prev); // Toggles the modal
  };

    return (
      <div
        style={{
          backgroundColor: "#F8F8F8", // Light gray background
          minHeight: "100vh", // Full-height screen
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "700px",
            marginBottom: "24px",
          }}
        >
         {/* Back Arrow */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px", // Increase width for a bigger circle
    height: "40px", // Increase height for a bigger circle
    borderRadius: "50%", // Makes it a circle
    backgroundColor: "#FFC107", // Yellow background
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF" // White color for the arrow
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20px" // Size of the arrow
    height="20px"
  >
    <polyline points="15 18 9 12 15 6" /> {/* Arrow Path */}
  </svg>
</div>
  
       {/* Title */}
<h1
  style={{
    fontSize: "18px", // Slightly larger for better visibility
    fontWeight: "600", // Semi-bold for prominence
    color: "#333333", // Darker gray for better contrast
    marginBottom: "20px", // Reduce spacing slightly for a tighter look
    fontFamily: "'Poppins', sans-serif", // Clean, modern font
    textAlign: "center",
    lineHeight: "1.5", // Improved line height for readability
    letterSpacing: "0.5px", // Subtle letter spacing for a modern feel
  }}
>
  Personalize
</h1>
  
          {/* Phone Icon */}
          <div
            style={{
              backgroundColor: "#FFC107", // Yellow background
              padding: "8px",
              borderRadius: "50%",
              position: "relative", // For triangle alignment
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
            }}
          >
           
  
            {/* Phone SVG Icon */}
            <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24px"
    height="24px"
    onClick={toggleCallback}
  >
    <path d="M22 4.01c-.56-.56-1.47-.56-2.03 0l-3.39 3.39c-.56.56-.56 1.47 0 2.03l1.52 1.52a15.73 15.73 0 0 1-6.07 6.07l-1.52-1.52c-.56-.56-1.47-.56-2.03 0L4.01 22c-.56.56-.56 1.47 0 2.03C4.27 24 4.64 24 5 24c8.84 0 16-7.16 16-16 0-.36 0-.73-.03-1.03z" />
  </svg>
  
</div>

        </div>
      {/* How It Works Section */}
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <motion.h2
          style={{
            fontSize: "25px",
            fontWeight: "600",
            color: "#212121", // Dark gray
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          
        >
          How it works?
        </motion.h2>
        <motion.p
          style={{
            fontSize: "14px",
            color: "#9E9E9E", // Light gray for text
            marginTop: "8px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          1 Lakh Plus Happy Customers Served
        </motion.p>
      </div>

      {/* Features Section */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 icons in a row
    gap: "24px",
    marginTop: "32px",
    maxWidth: "700px",
    width: "100%",
  }}
>
  {/* Feature 1 */}
<div style={{ textAlign: "center" }}>
  <div
    style={{
      backgroundColor: "#E7E8EB", // Light gray background
      borderRadius: "50%", // Makes the container a perfect circle
      width: "60px", // Size of the circle
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow for depth
      overflow: "hidden", // Ensures the image stays within the container
    }}
  >
    <img
      src="/icons/Personal Nutritionist.webp" // Ensure the file path and name are correct
      alt="Personal Nutritionist"
      style={{
        width: "100%", // Matches the width of the parent container
        height: "100%", // Matches the height of the parent container
        objectFit: "cover", // Ensures the image covers the container
      }}
    />
  </div>
  <p
    style={{
      fontSize: "12px",
      marginTop: "8px",
      color: "#9E9E9E", // Light gray text for labels
      fontWeight: "500",
    }}
  >
    Personal Nutritionist
  </p>
</div>

{/* Feature 2 */}
<div style={{ textAlign: "center" }}>
  <div
    style={{
      backgroundColor: "#E7E8EB", // Light gray background
      borderRadius: "50%", // Makes the container a perfect circle
      width: "64px", // Size of the circle
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow for depth
      overflow: "hidden", // Ensures the image stays within the container
    }}
  >
    <img
      src="/icons/Tasty Meals.webp" // Ensure the file path and name are correct
      alt="Tasty Meals"
      style={{
        width: "100%", // Matches the width of the parent container
        height: "100%", // Matches the height of the parent container
        objectFit: "cover", // Ensures the image covers the container
      }}
    />
  </div>
  <p
    style={{
      fontSize: "12px",
      marginTop: "8px",
      color: "#9E9E9E", // Light gray text for labels
      fontWeight: "500",
    }}
  >
    Tasty Meals
  </p>
</div>
{/* Feature 3 */}
<div style={{ textAlign: "center" }}>
  <div
    style={{
      backgroundColor: "#E7E8EB", // Light gray background
      borderRadius: "50%", // Makes the container a perfect circle
      width: "64px", // Size of the circle
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow for depth
      overflow: "hidden", // Ensures the image stays within the container
    }}
  >
    <img
      src="/icons/Weekly Health Checks.webp" // Ensure the file path and name are correct
      alt="Weekly Health Checks"
      style={{
        width: "100%", // Matches the width of the parent container
        height: "100%", // Matches the height of the parent container
        objectFit: "cover", // Ensures the image covers the container
      }}
    />
  </div>
  <p
    style={{
      fontSize: "12px",
      marginTop: "8px",
      color: "#9E9E9E", // Light gray text for labels
      fontWeight: "500",
    }}
  >
    Weekly Health Checks
  </p>
</div>

{/* Feature 4 */}
<div style={{ textAlign: "center" }}>
  <div
    style={{
      backgroundColor: "#E7E8EB", // Light gray background
      borderRadius: "50%", // Makes the container a perfect circle
      width: "64px", // Size of the circle
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow for depth
      overflow: "hidden", // Ensures the image stays within the container
    }}
  >
    <img
      src="/icons/Doorstep Delivery.webp" // Ensure the file path and name are correct
      alt="Doorstep Delivery"
      style={{
        width: "100%", // Matches the width of the parent container
        height: "100%", // Matches the height of the parent container
        objectFit: "cover", // Ensures the image covers the container
      }}
    />
  </div>
  <p
    style={{
      fontSize: "12px",
      marginTop: "8px",
      color: "#9E9E9E", // Light gray text for labels
      fontWeight: "500",
    }}
  >
    Doorstep Delivery
  </p>
</div>

</div>


      {/* Your Goal Section */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#212121", // Dark gray
            fontFamily: "'Arial', sans-serif",
            marginBottom: "4px",
          }}
        >
          Your Goal
        </h3>
        <p
          style={{
            fontSize: "16px",
            color: "#9E9E9E", // Light gray
            marginTop: "4px",
            fontWeight: "400", 
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Please select one
        </p>
{/* Buttons */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "24px",
  }}
>
  <button
    style={{
      backgroundColor: "#FFC107", 
      color: "#000000",
      fontSize: "14px",
      fontWeight: "550",
      padding: "15px 32px",
      borderRadius: "30px", 
      border: "none",
      width: "140%",
      maxWidth: "400px",
      alignSelf: "center",
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    }}
  >
    Lose weight
  </button>
  <button
    style={{
      backgroundColor: "#FFC107", 
      color: "#000000",
      fontSize: "14px",
      fontWeight: "550", 
      padding: "16px 32px", 
      borderRadius: "30px", // Rounded edges
      border: "none",
      width: "140%",
      maxWidth: "400px", // Same max width
      alignSelf: "center",
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    }}
  >
    Desi Tiffin Service
  </button>
  <button
    style={{
      backgroundColor: "#FFC107",
      color: "#000000",
      fontSize: "14px",
      fontWeight: "550",
      padding: "16px 32px",
      borderRadius: "30px",
      border: "none",
      width: "140%",
      maxWidth: "400px",
      alignSelf: "center",
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    }}
  >
    Healthy Eating
  </button>
  <button
    style={{
      backgroundColor: "#FFC107",
      color: "#000000",
      fontSize: "14px",
      fontWeight: "550",
      padding: "16px 32px",
      borderRadius: "30px",
      border: "none",
      width: "140%",
      maxWidth: "400px",
      alignSelf: "center",
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    }}
  >
    Gain Muscle
  </button>
  <button
    style={{
      backgroundColor: "#FFC107",
      color: "#000000",
      fontSize: "14px",
      fontWeight: "550",
      padding: "16px 32px",
      borderRadius: "30px",
      border: "none",
      width: "140%",
      maxWidth: "400px",
      alignSelf: "center",
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    }}
  >
    Diabetes Management
  </button>
</div>
 </div>
      
       {/* Add the SummaryPopup component */}
       <SummaryPopup />
       {/* Add the CallbackRequest modal */}
       {isCallbackOpen && <RequestForCallback />} 
    </div>
    
  );
  
};

export default PersonalizeSection; 