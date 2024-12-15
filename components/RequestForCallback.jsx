
import React, { useState } from "react";

import { motion } from "framer-motion";



const CallbackRequest = () => {

  const [isModalOpen, setIsModalOpen] = useState(true); // Default state is true to show modal initially



  const toggleModal = () => {

    setIsModalOpen((prev) => !prev);

  };



  return (

    <>

      {/* Modal */}

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

            width: "90%",

            maxWidth: "400px",

            backgroundColor: "#FFFFFF",

            borderRadius: "16px",

            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",

            zIndex: 100,

            padding: "20px",

            textAlign: "center",

          }}

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

          <p style={{ fontSize: "14px", color: "#757575", marginBottom: "20px" }}>

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

              <svg

                xmlns="http://www.w3.org/2000/svg"

                viewBox="0 0 24 24"

                fill="none"

                stroke="#9E9E9E"

                strokeWidth="2"

                strokeLinecap="round"

                strokeLinejoin="round"

                width="20px"

                height="20px"

                style={{ marginRight: "8px" }}

              >

                <circle cx="12" cy="12" r="10" />

                <path d="M14.5 9A3.5 3.5 0 1 1 8 12.5a3.5 3.5 0 0 1 6.5-3.5z" />

              </svg>

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

              <svg

                xmlns="http://www.w3.org/2000/svg"

                viewBox="0 0 24 24"

                fill="none"

                stroke="#9E9E9E"

                strokeWidth="2"

                strokeLinecap="round"

                strokeLinejoin="round"

                width="20px"

                height="20px"

                style={{ marginRight: "8px" }}

              >

                <path d="M2 8h20M2 16h20M4 4v16M20 4v16" />

              </svg>

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

              <svg

                xmlns="http://www.w3.org/2000/svg"

                viewBox="0 0 24 24"

                fill="none"

                stroke="#9E9E9E"

                strokeWidth="2"

                strokeLinecap="round"

                strokeLinejoin="round"

                width="20px"

                height="20px"

                style={{ marginRight: "8px" }}

              >

                <path d="M4 4h16v16H4z" />

              </svg>

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

    </>

  );

};



export default CallbackRequest;






