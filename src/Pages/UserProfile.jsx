import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ProfileCover from "../Components/UserProfileComponents/ProfileCover";
import { Link } from "react-router-dom";


const UserProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  return (
    <div>
      <ProfileCover></ProfileCover>
      {user ? (
        <div className="mx-28 my-20 font-dancing text-center">
         
            <h1 className="text-xl">
              Welcome,
              <span
                className="font-dancing items-center text-4xl font-extrabold hover:from-[#537451]  hover:to-[#A0D7AC]"
                style={{
                  background: '-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: '#A0D7AC',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}>
                {user.displayName}
              </span>
            </h1> 
            
            <div className="flex gap-4 justify-center my-8">
            <button
              className=" border-2 border-[#537451] px-6 py-2 text-black font-dancing"
              style={{
              
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}
              onClick={logOut}>
              Logout
            </button>
            <button
              className="  border-2 border-[#537451] px-6 py-2 text-black font-dancing"
              style={{
              
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
              Settings
            </button>
          </div>


          <div className="flex gap-4 justify-center my-8">
            <Link to='/shoppingCart'>
              <button
                className="btn text-lg text-white font-dancing"
                style={{
                  background: 'linear-gradient(to right, #537451, #A0D7AC)',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'
                }}>
                View Your Cart
              </button>
            </Link>
            <Link to='/products'>
              <button
                className="btn text-lg text-white font-dancing"
                style={{
                  background: 'linear-gradient(to right, #537451, #A0D7AC)',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'
                }}>
                Explore Our Products
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;