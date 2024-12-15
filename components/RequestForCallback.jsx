import React, { useState } from "react";
import { motion } from "framer-motion";

const CallbackRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: "fixed",
            top: "20%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            width: "90%", // Adjusts for small screens
            maxWidth: "400px",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            padding: "20px",
            boxSizing: "border-box",
          }}
          className="modal-container"
        >
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "10px",
              color: "#212121",
            }}
          >
            Request for a Callback
          </h4>
          <p
            style={{
              fontSize: "14px",
              color: "#757575",
              marginBottom: "20px",
            }}
          >
            Our team will contact you shortly to solve your queries and find the key to your health.
          </p>
          <form>
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
              }}
            >
              <input
                type="text"
                placeholder="Name"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                }}
              />
            </div>
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
              }}
            >
              <input
                type="email"
                placeholder="Email"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                }}
              />
            </div>
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
              }}
            >
              <input
                type="text"
                placeholder="Phone Number"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#FFC107",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Submit
            </button>
          </form>
        </motion.div>
      )}
      <style>
        {`
          /* Responsive Design */
          @media only screen and (max-width: 768px) {
            .modal-container {
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, -50%) !important;
              width: 90% !important;
              max-width: 90% !important;
              padding: 16px !important;
            }
            h4 {
              font-size: 16px !important;
            }
            p {
              font-size: 12px !important;
            }
            input {
              font-size: 12px !important;
            }
            button {
              font-size: 14px !important;
            }
          }

          @media only screen and (min-width: 769px) {
            .modal-container {
              top: 20%;
              left: 60%;
              transform: translate(-50%, -50%);
            }
          }
        `}
      </style>
    </>
  );
};

export default CallbackRequest;
