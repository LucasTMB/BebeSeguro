// css
import styles from "./HomeWithoutLogin.module.css";

// hooks
import { Link } from "react-router-dom";
import { useEffect } from "react";

// images
import Calculadora from "./images/calculadora.png";
import Blog from "./images/blog.png";
import Comunidade from "./images/comunidade.png";
import Loja from "./images/loja.png";

// scroll reveal
import ScrollReveal from "scrollreveal";

// react bootstrap
import Button from "react-bootstrap/Button";

const HomeWithoutLogin = () => {

    useEffect(() => {
        ScrollReveal().reveal(".reveal", {
            delay: 200,
            duration: 800,
            distance: "20px",
            easing: "ease-out",
            origin: "bottom",
        });
    }, []);

    return (
        <div className={styles.HomeWithoutLogin}>

            <section className={styles.banner}>
                <h1>
                    BebeSeguro
                </h1>
                <p>
                    Cada dia é uma nova descoberta na jornada da maternidade.
                </p>
                <div className={styles.buttons}>
                    <Link className={styles.loginBtn} to="/login">
                        <Button>
                            Entrar
                        </Button>
                    </Link>
                    <Link className={styles.registerBtn} to="/register">
                        <Button>
                            Cadastre-se
                        </Button>
                    </Link>
                </div>
            </section>
            <section className={styles.welcome}>
                <div className={`${styles.texts} reveal`}>
                    <h2>
                        Bem-vinda ao nosso site para mães!
                    </h2>
                    <p>
                        Nós sabemos que a maternidade pode ser uma jornada incrível, mas também desafiadora. É por isso que estamos aqui para oferecer suporte e ajudá-la em cada passo do caminho.
                    </p>
                </div>
                <img src="https://plus.unsplash.com/premium_photo-1675035675311-c44efb41102a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Mulher grávida segurando sua barriga" />
            </section>
            <section className={styles.whyUse}>
                <h2 className="reveal">
                    Por que utilizar o BebeSeguro?
                </h2>
                <ul className="reveal">
                    <li>
                        <img src={Calculadora} alt="Calculadora" />
                        <h3>
                            Calculadoras
                        </h3>
                        <p>
                            Com nossas calculadoras, você pode acompanhar o progresso da sua gravidez e monitorar sua saúde.
                        </p>
                    </li>
                    <li>
                        <img src={Blog} alt="Blog" />
                        <h3>
                            Blog
                        </h3>
                        <p>
                            Nosso blog está repleto de informações úteis, dicas e sugestões sobre maternidade.
                        </p>
                    </li>
                    <li>
                        <img src={Comunidade} alt="Comunidade" />
                        <h3>
                            Comunidade de mães
                        </h3>
                        <p>
                            Participe da nossa comunidade de mães e conecte-se com outras mães
                        </p>
                    </li>
                    <li>
                        <img src={Loja} alt="Loja" />
                        <h3>
                            Loja
                        </h3>
                        <p>
                            Em nossa loja, você encontrará produtos de qualidade para ajudá-la a cuidar de você e do seu bebê
                        </p>
                    </li>
                </ul>
                <div className={`${styles.textDiv} reveal`}>
                    <div className={styles.whiteText}>
                        <p>
                            Navegue pelo nosso site para descobrir mais sobre nossos recursos, ler os artigos do nosso blog, fazer compras em nossa loja e participar da nossa comunidade virtual.
                        </p>
                        <p>
                            Obrigado por escolher o nosso site para ajudá-la em sua jornada como mãe. Estamos aqui para apoiá-la em cada etapa do caminho.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeWithoutLogin