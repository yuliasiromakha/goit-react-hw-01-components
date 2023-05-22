import React from 'react';
import Profile from './profileCard/profileCard';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './Transactions/Transactions';
import FriendList from './Friends';

import user from './profileCard/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json'

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
         
        <Statistics title="Upload stats" data={data} />

        <FriendList friends={friends} />
        
        <TransactionHistory items={transactions} />;

      </div>

    </>
  );
};
