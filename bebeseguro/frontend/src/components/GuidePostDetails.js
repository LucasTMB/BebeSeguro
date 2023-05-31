// css
import styles from "./GuidePostDetails.module.css";

// react router
import { Link } from "react-router-dom";

// hooks
import { useCheckAdm } from "../hooks/useCheckAdm";
import { useDeleteDocument } from "../hooks/useDeleteDocument";

// bootstrap 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

// date format
import { format } from "date-fns";

// react-icons
import {
    BsFillChatRightTextFill, BsFillCalendar2WeekFill,
    BsFillPersonLinesFill,
    BsFillTagsFill
} from "react-icons/bs";

const GuidePostDetails = ({ post }) => {

    const { adm, user } = useCheckAdm();

    const { deleteDocument } = useDeleteDocument("guide-posts");

    const formattedDate = format(new Date(post.createAt.toMillis()), "dd/MM/yyyy");

    function filterTitle(title) {
        if (title.length <= 50) {
            return title;
        } else {
            return `${title.substring(0, 50)}...`
        }
    }

    return (
        <Card className={styles.card}>
            <Card.Img className={styles.image} variant="top" src={post.image} />
            <Card.Body className={styles.title}>
                <Card.Title>
                    {filterTitle(post.title)}
                </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <BsFillPersonLinesFill className={styles.icon} /> {post.createBy}
                </ListGroup.Item>
                <ListGroup.Item>
                    <BsFillCalendar2WeekFill className={styles.calendar} /> {formattedDate}
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className={styles.tags}>
                        <BsFillTagsFill className={styles.tagsIcon} />
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={`/guides/posts/${post.id}`}>
                    <Button className={styles.cardButton}>
                        Ler
                    </Button>
                </Card.Link>
                {adm &&
                    <>
                        <Card.Link href={`/guides/posts/edit/${post.id}`}>
                            <Button className={styles.cardButton}>
                                Editar
                            </Button>
                        </Card.Link>
                        <Card.Link>
                            <Button
                                className={`${styles.cardButton} ${styles.deleteButton}`}
                                onClick={() => deleteDocument(post.id)}
                                variant="danger"
                            >
                                Excluir
                            </Button>
                        </Card.Link>
                    </>
                }
            </Card.Body>
        </Card>

    )
}

export default GuidePostDetails