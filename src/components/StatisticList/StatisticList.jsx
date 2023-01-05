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

/*
  |==============================
  | PropType
  |==============================
*/
StatisticList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
