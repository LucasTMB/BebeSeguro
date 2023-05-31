import styles from "./Community.module.css";

import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { Link, useNavigate } from "react-router-dom";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// Redux
import { getPhotos, like } from "../../slices/photoSlice";

//bootstrap
import { Button } from "react-bootstrap";

const Community = () => {
  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  // Load all photos
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleLike = (photo = null) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/community/search?q=${query}`);
    }
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.community}>
      <form
        onSubmit={handleSearch}
        className={styles.search_form}
      >
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          className={styles.search_button}
        >
          Pesquisar
        </Button>
      </form>
      <div className={styles.container}>
        {photos &&
          photos.map((photo) => (
            <div key={photo._id}>
              <PhotoItem photo={photo} />
              <LikeContainer photo={photo} user={user} handleLike={handleLike} />
              <Link className={styles.seeMoreLink} to={`/photos/${photo._id}`}>
                <Button
                  className={styles.seeMoreBtn}
                >
                  Ver mais
                </Button>
              </Link>
            </div>
          ))}
        {photos && photos.length === 0 && (
          <h2 className={styles.no_photos}>
            Ainda não há fotos publicadas,{" "}
            <Link to={`/users/${user.userId}`}>clique aqui</Link> para começar.
          </h2>
        )}
      </div>
    </div>
  )
}

export default Community