// import data from './Data.data.json';
import { Profile } from './Profile/Profile';
import { StatisticList } from './StatisticList/StatisticList';

import user from './Data/user.json';
import statistics from './Data/data.json';

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
    </div>
  );
};
