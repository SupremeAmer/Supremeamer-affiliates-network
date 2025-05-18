import React from "react";

export default function Home() {
  const user =
    JSON.parse(localStorage.getItem("supremeamer_user")) || {
      name: "SupremeAmer",
      balance: 500,
      picture:
        "https://ui-avatars.com/api/?name=SupremeAmer&background=EEE&color=333",
      email: "demo@supremeamer.com",
      country: "Nigeria",
      number: "+2348000000",
      dob: "2000-01-01",
    };

  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          className="profile-pic"
          src={user.picture}
          alt={user.name}
          onClick={() =>
            alert(
              `Name: ${user.name}\nEmail: ${user.email}\nCountry: ${user.country}\nNumber: ${user.number}\nDOB: ${user.dob}\nBalance: ${user.balance}$SAC`
            )
          }
        />
        <h3>Hi, {user.name}!</h3>
        <div className="balance">
          Balance: <b>{user.balance}$SAC</b>
        </div>
      </div>
      <div className="home-welcome">
        <h2>Welcome to SupremeAmer Affiliate Network</h2>
        <p>Get rewarded for promoting, sharing, and inviting friends!</p>
      </div>
    </div>
  );
}
