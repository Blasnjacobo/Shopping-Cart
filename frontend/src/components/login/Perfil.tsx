import { User } from '../../type/User'

interface userPromp {
    user: User
}

const Perfil = ({ user }: userPromp) => {
    const logout = () => {
        window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/github", "_self");
    };
    console.log(user)
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
