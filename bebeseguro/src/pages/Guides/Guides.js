// CSS
import styles from "./Guides.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useState } from "react";

// components

const Guides = () => {
  const {documents: posts, loading} = useFetchDocuments("posts");

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query) {
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
        <button>
          Pesquisar
        </button>
      </form>
    </div>
  )
}

export default Guides