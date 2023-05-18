import styles from "./GuidePost.module.css";

//hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

// date format
import { format } from "date-fns";

const GuidePost = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchDocument("guide-posts", id);

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <div className={styles.postHead}>
                        <h1>{post.title}</h1>
                        <p className={styles.createBy}>
                            Autor(a): <span>{post.createBy}</span>
                        </p>
                    </div>
                    <img src={post.image} alt={post.title} />
                    <p className={styles.body}>{post.body}</p>
                    <h3>Este post trata sobre:</h3>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>{tag}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default GuidePost