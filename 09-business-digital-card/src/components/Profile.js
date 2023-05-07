import portrait from "../images/homer_simpson.jpg";

function Profile() {
  return (
    <div className="Profile">
      <figure>
        <img
          src={portrait}
          alt="portrait"
          title="Homer Simpson portrait"
          width="70"
		  height="70"
          loading="eager"
        />
        <figcaption>Homer Simpson</figcaption>
      </figure>
    </div>
  );
}

export default Profile;
