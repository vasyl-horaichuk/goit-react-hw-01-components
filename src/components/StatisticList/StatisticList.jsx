import PropTypes from 'prop-types';

export const StatisticList = ({ statistics, title }) => {
  return (
    <section class="statistics">
      {title.length > 0 && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {statistics.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};