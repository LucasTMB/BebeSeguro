import styles from "./Message.module.css";
import Alert from 'react-bootstrap/Alert';

const Message = ({msg, type}) => {
    return (
        <Alert className={styles.alert} variant={type}>
            {msg}
        </Alert>
    )
}

export default Message;