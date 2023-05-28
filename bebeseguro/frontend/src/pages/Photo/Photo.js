import styles from "./Photo.module.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import PhotoItem from "../../components/PhotoItem";
import LikeContainer from "../../components/LikeContainer";
import { Link } from "react-router-dom";

// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// redux
import { getPhoto, like, comment } from "../../slices/photoSlice";

const Photo = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const resetMessage = useResetComponentMessage(dispatch);

    const { user } = useSelector((state) => state.auth);
    const { photo, loading, error, message } = useSelector(
        (state) => state.photo
    );

    const [commentText, setCommentText] = useState();

    // Load photo data
    useEffect(() => {
        dispatch(getPhoto(id));
    }, [dispatch, id]);

    // Like a photo
    const handleLike = () => {
        dispatch(like(photo._id));

        resetMessage();
    };

    // Insert a comment
    const handleComment = (e) => {
        e.preventDefault();

        const photoData = {
            comment: commentText,
            id: photo._id,
        };

        dispatch(comment(photoData));

        setCommentText("");

        resetMessage();
    };

    if (loading) {
        return <p>Carregando...</p>;
    };

    return (
        <div className={styles.photo}>
            <div className={styles.photo_container}>
                <PhotoItem photo={photo} />
                <LikeContainer photo={photo} user={user} handleLike={handleLike} />
                <div className={styles.message_container}>
                    {error && <Message msg={error} type="error" />}
                    {message && <Message msg={message} type="success" />}
                </div>
                <div className={styles.comments}>
                    {photo.comments && (
                        <>
                            <h4>Comentários ({photo.comments.length}):</h4>
                            <Form onSubmit={handleComment}>
                                <Form.Group className="profile_form_group mb-3">
                                    <Form.Control
                                        className={styles.profile_form_input}
                                        type="text"
                                        placeholder="Insira seu comentário..."
                                        onChange={(e) => setCommentText(e.target.value)}
                                        value={commentText || ""}
                                    />
                                </Form.Group>
                                <Button type="submit" className={styles.commentBtn}>
                                    Enviar
                                </Button>
                            </Form>
                            {photo.comments.length === 0 && <p>Não há comentários...</p>}
                            {photo.comments.map((comment) => (
                                <div className={styles.comment} key={comment.comment}>
                                    <div className={styles.author}>
                                        {comment.userImage && (
                                            <img
                                                src={`${uploads}/users/${comment.userImage}`}
                                                alt={comment.userName}
                                            />
                                        )}
                                        <Link to={`/users/${comment.userId}`}>
                                            <p>{comment.userName}</p>
                                        </Link>
                                    </div>
                                    <p>{comment.comment}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Photo