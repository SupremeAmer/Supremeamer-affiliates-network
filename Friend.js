import React from "react";

export default function Friends() {
  return (
    <div className="friends-container">
      <h2>Invite Friends</h2>
      <p>
        Share your referral code and earn extra $SAC for every friend who joins.
      </p>
      <div className="referral-box">
        <strong>Referral Code:</strong> <span>SUPREME123</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText("SUPREME123");
            alert("Copied!");
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
}




