import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ options }) {
  return (
    <ul className={s.friendList}>
      {options.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={s.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
