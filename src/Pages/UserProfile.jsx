import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    return (
        <div>
             {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <p>User ID: {user.uid}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
        </div>
    );
};

export default UserProfile;