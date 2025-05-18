
const user = JSON.parse(localStorage.getItem('supremeamer_user'));
return (
  <div>
    <img src={`http://localhost:3000/uploads/${user.picture}`} onClick={() => setShowProfile(true)} />
    {showProfile && (
      <div>{/* Display all user info here */}</div>
    )}
  </div>
);
