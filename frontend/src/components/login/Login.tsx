import { Modal } from 'react-bootstrap';
import Google from '../../img/google.png'
import Facebook from '../../img/facebook.png'
import Github from '../../img/github.png'
<i className="bi bi-person" style={{ fontSize: '1.5rem', marginLeft: '2rem', cursor: 'pointer', color: 'black' }}></i>
interface ShowProps {
    show: boolean;
    handleClose: () => void
}

const Login: React.FC<ShowProps> = ({ show, handleClose }) => {

    const google = () => {
        window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/google", "_self");
    };

    // const facebook = () => {
    // window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/facebook", "_self");
    // }

    const github = () => {
        window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/github", "_self");
    }

    const invitado = () => {
        window.open("https://shopping-cart-production-4ea1.up.railway.app/auth/invitado", "_self");
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <div className="login">
                    <div className="wrapper">
                        <h5 className='text-center mb-3'>Inicia sesión para poder acceder al carrito</h5>
                        <div className="left">
                        <div className="loginButton invitado" onClick={invitado}>
                            <i className="bi bi-person"> Invitado</i>
                            </div>
                            <div className="loginButton google" onClick={google}>
                                <img src={Google} alt="" className="icon" />
                                Google
                            </div>
                            <div className="loginButton facebook" onClick={google}>
                                <img src={Facebook} alt="" className="icon" />
                                Facebook
                            </div>
                            <div className="loginButton github" onClick={github}>
                                <img src={Github} alt="" className="icon" />
                                Github
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Login;
