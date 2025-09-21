import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}   {/* ✅ Render the actual children passed */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
