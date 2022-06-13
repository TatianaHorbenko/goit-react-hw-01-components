import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from '../dataFiles/user.json';
import data from '../dataFiles/data.json';
import friends from '../dataFiles/friends.json';
import transactions from '../dataFiles/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList options={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
