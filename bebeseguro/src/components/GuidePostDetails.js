// css
import styles from "./GuidePostDetails.module.css";

// bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// react router
import { Link } from "react-router-dom";

const GuidePostDetails = ({ post }) => {

    function filterTitle(title) {
        if(title.length <= 50) {
            return title;
        } else {
            return `${title.substring(0, 50)}...`
        }
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={post.image} alt={post.title} />
            <h2 className={styles.title}>
                {filterTitle(post.title)}
            </h2>
            <p className={styles.createBy}>
                <span>Autor(a):</span> {post.createBy}
            </p>
        </div>
    )
}

export default GuidePostDetails