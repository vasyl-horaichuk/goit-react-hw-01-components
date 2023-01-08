import PropTypes from 'prop-types';
import { Section } from './StatisticList.styled';

export const StatisticList = ({ statistics, title }) => {
  return (
    <Section>
      {title.length > 0 && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {statistics.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

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
