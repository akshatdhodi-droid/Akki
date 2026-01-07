"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#ff758c,#ff7eb3)",
      padding: "20px"
    }}>
      <div style={{
        background: "white",
        borderRadius: "20px",
        padding: "30px",
        maxWidth: "420px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        {step === 0 && (
          <>
            <h1>🎁 A Small Surprise</h1>
            <button onClick={() => setStep(1)}>Open</button>
          </>
        )}

        {step === 1 && (
          <>
            <h1>🎂 Happy Birthday My Love 💕</h1>
            <p>
              On this special day, I just want you to know how deeply you are loved.
              <br /><br />
              You are my smile on hard days, my calm in chaos, and my favorite person forever.
              <br /><br />
              May this year bring you as much happiness as you bring into my life.
              <br /><br />
              I’m so grateful for you — today, tomorrow, and always ❤️✨
              <br /><br />
              <strong>Happy Birthday, my heart 🎂💖</strong>
            </p>
            <button onClick={() => setStep(2)}>One More Thing 💌</button>
          </>
        )}

        {step === 2 && (
          <>
            <h1>💖 Forever Yours</h1>
            <p>
              No matter where life takes us,
              <br />
              my heart will always choose you.
              <br /><br />
              I love you endlessly 💫
            </p>
          </>
        )}
      </div>
    </div>
  );
}
