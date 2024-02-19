import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

            <section>
                <MDBContainer className='text-center mt-5'>
                    <MDBRow className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MDBCol sm='12' md="3" lg="2.5" xl="4">
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                SayMi Perfumes
                            </h6>
                            <p>
                                Cualquier duda, aclaracion o negociacion no dudes en contactarnos en el numero de whatsapp mostrado en este apartado.
                            </p>
                        </MDBCol>

                        <MDBCol sm='12' md="9" lg="9.5" xl="8">
                            <MDBRow>
                                <MDBCol sm='3'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                    <p>
                                        <a href='/shopping-cart/harryPotter' className='text-reset'>
                                            Dama
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Caballero
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Juveniles
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Lo más nuevo
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol sm='3'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Conócenos
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Contáctanos
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Preguntas frecuentes
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Adivinanza del dia
                                        </a>
                                    </p>
                                </MDBCol>
                                <MDBCol sm='6'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                    <p>
                                        <MDBIcon icon="home" className="me-2" />
                                        Culiacán, Sinaloa, MX
                                    </p>
                                    <p>
                                        <MDBIcon icon="envelope" className="me-3" />
                                        my_sandia@hotmail.com
                                    </p>
                                    <p>
                                        <MDBIcon icon="phone" className="me-3" /> +52 667 327 3363
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright:
                <a className='text-reset fw-bold' href='/'>
                    SAYMI PERFUMES
                </a>
            </div>
        </MDBFooter >
    );
}
