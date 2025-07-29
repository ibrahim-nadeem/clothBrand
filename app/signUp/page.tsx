"use client";

import React, { useState } from "react";
import styles from "./signUp.module.scss";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);  
  const [code, setCode] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Verification code sent to:", email);
    setStep(2);  
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     
    console.log("Submitted code:", code);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.logo}>LAMA</h1>
        <h2 className={styles.heading}>Sign in</h2>

        {step === 1 && (
          <>
            <p className={styles.subtext}>
              Enter your email and we’ll send you a verification code
            </p>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Continue
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <p className={styles.subtext}>
              Enter the verification code sent to <strong>{email}</strong>
            </p>
            <form onSubmit={handleCodeSubmit}>
              <input
                type="text"
                placeholder="Verification Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Verify
              </button>
            </form>
          </>
        )}

        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
