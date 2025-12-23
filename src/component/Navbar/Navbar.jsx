// import React from "react";
// import "./Navbar.css";
// import { Heart } from "lucide-react";

// const Navbar = ({ onCartClick }) => {
//   const onFavoriteClick = () => {
//     console.log("Favorite clicked");
//   };

//   return (
//     <div className="navbar ">
//       {/* Logo */}
//       <div className="logo">
//         music <span>Hub</span>
//       </div>

//       {/* Location */}
//       <div className="location">
//         <h4>Play music anytime</h4>
//         <p>Non-stop music experience</p>
//       </div>

//       {/* Search */}
//       <div className="search-box">
//         <i className="fa fa-search"></i>
//         <input type="text" placeholder='Search music' />
//       </div>

//       {/* Account */}
//       <div className="account">Account</div>

//       {/* Cart Button */}
//       <button
//         onClick={onFavoriteClick}
//         className="flex items-center gap-2 bg-green-600 hover:bg-blue-700 
//              text-white px-4 py-2 rounded-lg font-semibold shadow-md cursor-pointer"
//       >
//         {/* Favorite Icon */}
//         <Heart size={18} fill="white" />

//         {/* Text */}
//         <div className="flex flex-col leading-tight text-left">
//           <span className="text-xs">Favorites</span>
//           <span className="text-sm font-bold">12 Songs</span>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import "./Navbar.css";
import { Heart } from "lucide-react";

const Navbar = ({ onSearch }) => {
  const onFavoriteClick = () => {
    console.log("Favorite clicked");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        music <span>Hub</span>
      </div>

      {/* Location */}
      <div className="location">
        <h4>Play music anytime</h4>
        <p>Non-stop music experience</p>
      </div>

      {/* ✅ SEARCH BAR */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search music"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Account */}
      <div className="account">Account</div>

      {/* Favorites */}
      <button
        onClick={onFavoriteClick}
        className="flex items-center gap-2 bg-green-600 hover:bg-blue-700 
             text-white px-4 py-2 rounded-lg font-semibold shadow-md cursor-pointer"
      >
        <Heart size={18} fill="white" />
        <div className="flex flex-col leading-tight text-left">
          <span className="text-xs">Favorites</span>
          <span className="text-sm font-bold">12 Songs</span>
        </div>
      </button>
    </div>
  );
};

export default Navbar;

