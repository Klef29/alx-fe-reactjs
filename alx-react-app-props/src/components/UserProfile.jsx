import ProfilePage from "./ProfilePage";

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
      <ProfilePage userData={{ name: props.name, age: props.age, bio: props.bio }} />
    </div>
  );
};

export default UserProfile;