import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import TransactionHistory from './Transactions';
import FriendList from './Friends';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json'

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
    <div>
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

      </div>
      <div>
      <Statistics title="Upload stats" data={data} />
      </div>
      <div>
      <FriendList friends={friends} />
      </div>
      <div>
      <TransactionHistory items={transactions} />;
      </div>
    
      </div>
    </>
  );
};
