// CSS
import styles from "./Guides.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useState } from "react";
import { useCheckAdm } from "../../hooks/useCheckAdm";

// components
import GuidePostDetails from "../../components/GuidePostDetails";

// bootstrap
import Button from 'react-bootstrap/Button';

const Guides = () => {

  const { adm } = useCheckAdm();

  console.log(adm);

  const { documents: posts, loading } = useFetchDocuments("guide-posts");

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    };
  };

  return (
    <div className={styles.guides}>
      <h1>Veja nossas principais guias sobre gravidez e cuidados com bebê</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.search_form}
      >
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button>
          Pesquisar
        </Button>
        {adm &&
          <Button className={styles.createBtn}>
            <Link className={styles.createLink} to="/guides/posts/create">
              Criar post
            </Link>
          </Button>
        }
      </form>
      <div className={styles.guidesContainer}>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <GuidePostDetails key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div>
            <p>Não foram encontrados posts</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Guides