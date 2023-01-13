import { Profile } from './Profile/Profile';
import { StatisticList } from './StatisticList/StatisticList';
import { FriendList } from './FriendList/FriendList';
import { TransactionList } from './TransactionHistory/TransactionHistory';

import user from '../Data/user.json';
import statistics from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

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
      <StatisticList title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </div>
  );
};
