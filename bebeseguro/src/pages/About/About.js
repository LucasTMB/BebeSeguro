import styles from "./About.module.css";

import Mom from "./images/mae.png";
import Diamond from "./images/diamante.png";
import Rocket from "./images/foguete.png";
import Lamp from "./images/lampada.png";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>BebeSeguro</h1>
      <div className={styles.container}>
        <section className={styles.aboutUs}>
          <div>
            <h2>SOBRE NÓS</h2>
            <p>
              Nós somos um website dedicado a apoiar mães em cada etapa da sua jornada, desde a gravidez até a criação de seus filhos. Nós oferecemos uma ampla gama de recursos, desde calculadoras úteis até uma comunidade de mães ativa e engajada.
            </p>
          </div>
          <img src={Mom} alt="Figura de uma mãe com filho no colo" />
        </section>
        <section className={styles.mission}>
          <div>
            <h2>MISSÃO</h2>
            <p>
              Nossa missão é fornecer às mães o suporte necessário para enfrentar os desafios da maternidade. Queremos ser uma fonte confiável de informações e recursos, além de fornecer um espaço seguro para as mães se conectarem e compartilharem suas experiências.
            </p>
          </div>
          <img src={Rocket} alt="Figura de um foguete" />
        </section>
        <section className={styles.vision}>
          <div>
            <h2>VISÃO</h2>
            <p>
              Nossa visão é criar uma comunidade online ativa e inclusiva de mães, que apoiam umas às outras em cada etapa da jornada da maternidade. Queremos ser a primeira escolha para mães que procuram informações e recursos confiáveis para apoiar sua jornada como mães.
            </p>
          </div>
          <img src={Lamp} alt="Figura de um lâmpada" />
        </section>
        <section className={styles.values}>
          <div>
            <h2>VALORES</h2>
            <ul>
              <li>
                Empatia: entendemos as dificuldades e os desafios da maternidade e queremos oferecer um espaço seguro e acolhedor para as mães se conectarem e se apoiarem.
              </li>
              <li>
                Inclusão: acreditamos que todas as mães, independentemente de sua origem, crenças ou escolhas, devem ter acesso a informações e recursos de qualidade.
              </li>
              <li>
                Qualidade: nos esforçamos para fornecer informações precisas e atualizadas, além de produtos e serviços de alta qualidade para ajudar as mães em sua jornada.
              </li>
              <li>
                Comunidade: valorizamos a conexão e o suporte mútuo entre as mães e queremos fornecer uma comunidade online forte e engajada para que isso aconteça.
              </li>
            </ul>
          </div>
          <img src={Diamond} alt="Figura de um diamante" />
        </section>
      </div>
    </div>
  )
}

export default About