import React from 'react';
import portrait from "../images/homer_simpson.png";

function Profile() {
  return (
    <div className="Profile">
      <img src={portrait} alt="portrait" />
      <h3>Homer Simpson</h3>
    </div>
  );
}

export default Profile;
