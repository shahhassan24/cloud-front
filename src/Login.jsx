/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle login, like sending a request to your backend
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ width: "300px" }}>
          <form
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "20px",
            }}
            onSubmit={handleSubmit}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Login</h2>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
                htmlFor="email"
              >
                Email:
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  fontSize: "14px",
                }}
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
                htmlFor="password"
              >
                Password:
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  fontSize: "14px",
                }}
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#ffffff",
                  borderRadius: "4px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  cursor: "pointer",
                  border: "none",
                }}
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
