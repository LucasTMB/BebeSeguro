// css
import styles from "./GuidePostDetails.module.css";

// react router
import { Link } from "react-router-dom";

// bootstrap 
import Button from "react-bootstrap/Button";

// date format
import { format } from "date-fns";

// react-icons
import {
    BsFillChatRightTextFill, BsFillCalendar2WeekFill,
    BsFillPersonLinesFill,
    BsFillTagsFill
} from "react-icons/bs";

const GuidePostDetails = ({ post }) => {

    const formattedDate = format(new Date(post.createAt.toMillis()), "dd/MM/yyyy");

    function filterTitle(title) {
        if (title.length <= 50) {
            return title;
        } else {
            return `${title.substring(0, 50)}...`
        }
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={post.image} alt={post.title} />
            <div className={styles.title}>
                <h2>
                    <BsFillChatRightTextFill /> {filterTitle(post.title)}
                </h2>
            </div>
            <p className={styles.createBy}>
                <BsFillPersonLinesFill className={styles.icon} /> {post.createBy}
            </p>
            <p className={styles.date}>
                <BsFillCalendar2WeekFill className={styles.calendar} /> {formattedDate}
            </p>
            <div className={styles.tags}>
                <BsFillTagsFill className={styles.tagsIcon} />
                {post.tagsArray.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link>
                <Button className={styles.cardButton}>
                    Ler matéria
                </Button>
            </Link>
        </div>
    )
}

export default GuidePostDetails