import { Link } from 'react-router-dom';

export default function Header({ username }) {
    return (
        <div className="flex border-b h-4 p-4 py-8">
            <Link className="flex items-center" to={`/p/${username}`}>
                <img
                    className="w-8 h-8 rounded-full mr-3"
                    src={`/images/avatars/${username}.jpg`}
                    alt={`${username} profile`}
                />
                <p className="font-bold">{username}</p>
            </Link>
        </div>
    );
}
