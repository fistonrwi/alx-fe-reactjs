import React, { useState } from 'react';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search setUserData={setUserData} />
      {userData && <UserCard userData={userData} />}
    </div>
  );
}

export default App;
