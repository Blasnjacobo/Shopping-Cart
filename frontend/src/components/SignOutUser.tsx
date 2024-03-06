import '../app.css'
import { User } from '../type/User'

interface userPromp {
    user: User
}

const SignOutUser = ({ user }: userPromp) => {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <div>
            <ul className="list">
                <li className="listItem">
                    <img
                        src={user.photos[0].value}
                        alt=""
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

export default SignOutUser
