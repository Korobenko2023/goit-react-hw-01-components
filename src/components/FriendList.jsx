import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">  
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id} 
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.isOnline}
                />                 
            ))}            
        </ul>
    )    
}

        
         