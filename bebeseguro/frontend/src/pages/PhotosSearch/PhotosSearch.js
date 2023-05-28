import styles from "./PhotosSearch.module.css";

// hooks
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// components
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { Link } from "react-router-dom";

// bootstrap
import Button from "react-bootstrap/Button";

// Redux
import { searchPhotos, like } from "../../slices/photoSlice";

const PhotosSearch = () => {
    const query = useQuery();
    const search = query.get("q");

    const dispatch = useDispatch();

    const resetMessage = useResetComponentMessage(dispatch);

    const { user } = useSelector((state) => state.auth);
    const { photos, loading } = useSelector((state) => state.photo);

    // Load all photos
    useEffect(() => {
        dispatch(searchPhotos(search));
    }, [dispatch, search]);

    const handleLike = (photo = null) => {
        dispatch(like(photo._id));

        resetMessage();
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.search}>
            <div className={styles.search_container}>
                <h2 className={styles.pageTitles}>Você está buscando por: {search}</h2>
                {photos &&
                    photos.map((photo) => (
                        <div key={photo._id}>
                            <PhotoItem photo={photo} />
                            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
                            <Link className={styles.seeMoreLink} to={`/photos/${photo._id}`}>
                                <Button className={styles.seeMoreBtn}>
                                    Ver mais
                                </Button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PhotosSearch