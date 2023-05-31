import styles from './TechnicalProblems.module.css';

import { Link } from 'react-router-dom';

// images
import Constructors from './images/construtores.png';

// bootstrap
import Button from 'react-bootstrap/Button';

const TechnicalProblems = () => {
    return (
        <div className={styles.tp}>
            <img src={Constructors} alt="Imagem de construtores" />
            <h1>Ops!</h1>
            <p>Essa página está em construção, mas estamos ansiosos para surpreender você em breve!</p>
            <Link to="/">
                <Button>
                    Voltar para home
                </Button>
            </Link>
        </div>
    )
}

export default TechnicalProblems