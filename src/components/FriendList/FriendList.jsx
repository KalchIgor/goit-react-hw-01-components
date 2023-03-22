import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
    return (
        <div className=''>
            < ul className={css.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={css.item}  key={id}>

                       <span className={isOnline ? css.statusOnline : css.statusOffline}></span>

                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />

                        <p className= {css.name}>{name}</p>
                    </li>
                    
                ))}
            </ul>
        </div>

    )
}


FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}