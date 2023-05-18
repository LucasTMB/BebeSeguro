import styles from "./GuidesSearch.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import GuidePostDetails from "../../components/GuidePostDetails";

// react router
import { Link } from "react-router-dom";

// bootstrap
import Button from 'react-bootstrap/Button';

const GuidesSearch = () => {
    const query = useQuery();
    const search = query.get("q");

    const {documents: posts, loading} = useFetchDocuments("guide-posts", search);

    return (
        <div className={styles.search}>
            <h1>Resultados da Pesquisa</h1>
            <div className={styles.searchContainer}>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir de sua busca...</p>
                        <Link to="/guides">
                            <Button className={styles.btn}>
                                Voltar
                            </Button>
                        </Link>
                    </div>
                )}
                {posts && posts.map((post) => <GuidePostDetails key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default GuidesSearch