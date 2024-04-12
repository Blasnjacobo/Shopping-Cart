import { User } from '../../type/User'

interface userPromp {
    user: User
}

const Perfil = ({ user }: userPromp) => {
    const logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.href = "https://saymi.casa/";
      };
    return (
        <div>
            <ul className="list">
                <li className="listItem">
                    <img
                        src={user.photos[0].value}
                        alt={user.name}
                        className="avatar"
                    />
                </li>
                <li className="listItem" onClick={logout}>
                    Logout
                </li>
            </ul>
        </div>
    )
}

export default Perfil
