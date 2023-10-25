export const FriendListItem = ({ avatar, name, status }) => {
    const statusClass = status ? 'online' : 'offline';
    return (
        <li className="item">
            {/* <span className="status">{`status: ${status ? 'online' : 'offline'}`}</span> */}
            <span className="status">{`status: ${statusClass}`}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )

    
}