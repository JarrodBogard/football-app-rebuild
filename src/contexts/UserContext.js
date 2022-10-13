// import { createContext, useEffect, useState } from "react";

// export const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const response = await fetch(
//         `https://football-app-beta.vercel.app/users`
//       );
//       const json = await response.json();

//       if (response.ok) {
//         setUsers(json);
//       }
//     };
//     fetchUserData();
//   }, []);

//   return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
// };
