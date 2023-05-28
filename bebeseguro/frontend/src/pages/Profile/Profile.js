import styles from "./Profile.module.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// hooks
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";
import {
  getUserPhotos,
  publishPhoto,
  resetMessage,
  deletePhoto,
  updatePhoto,
} from "../../slices/photoSlice";

const Profile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);
  const {
    photos,
    loading: loadingPhoto,
    error: errorPhoto,
    message: messagePhoto,
  } = useSelector((state) => state.photo);

  const [title, setTitle] = useState();
  const [image, setImage] = useState();

  const [editId, setEditId] = useState();
  const [editImage, setEditImage] = useState();
  const [editTitle, setEditTitle] = useState();

  // New form and edit form refs
  const newPhotoForm = useRef();
  const editPhotoForm = useRef();

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  // Reset component message
  function resetComponentMessage() {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  }

  // Publish a new photo
  const submitHandle = (e) => {
    e.preventDefault();

    const photoData = {
      title,
      image,
    };

    // build form data
    const formData = new FormData();

    const photoFormData = Object.keys(photoData).forEach((key) =>
      formData.append(key, photoData[key])
    );

    formData.append("photo", photoFormData);

    dispatch(publishPhoto(formData));

    setTitle("");

    resetComponentMessage();
  };

  // change image state
  const handleFile = (e) => {
    const image = e.target.files[0];

    setImage(image);
  };

  // Exclude an image
  const handleDelete = (id) => {
    dispatch(deletePhoto(id));

    resetComponentMessage();
  };

  // Show or hide forms
  function hideOrShowForms() {
    newPhotoForm.current.classList.toggle("hide");
    editPhotoForm.current.classList.toggle("hide");
  }

  // Show edit form
  const handleEdit = (photo) => {
    if (editPhotoForm.current.classList.contains("hide")) {
      hideOrShowForms();
    }

    setEditId(photo._id);
    setEditImage(photo.image);
    setEditTitle(photo.title);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    hideOrShowForms();
  };

  // Update photo title
  const handleUpdate = (e) => {
    e.preventDefault();

    const photoData = {
      title: editTitle,
      id: editId,
    };

    dispatch(updatePhoto(photoData));

    resetComponentMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          <div className={styles.profile_header__info}>
            {user.profileImage && (
              <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
            )}
            <div className={styles.profile_description}>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
          </div>
          <Link
            className={styles.editLink}
            to="/profile"
          >
            <Button
              className={styles.editBtn}
            >
              Editar perfil
            </Button>
          </Link>
        </div>
        {id === userAuth._id && (
          <>
            <div className={styles.new_photo} ref={newPhotoForm}>
              <h3>Compartilhe momentos:</h3>
              <Form onSubmit={submitHandle}>
                <Form.Group className="profile_form_group mb-3">
                  <Form.Label className={styles.label}>
                    Título para a foto:
                  </Form.Label>
                  <Form.Control
                    className={styles.profile_form_input}
                    type="text"
                    placeholder="Insira um título"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title || ""}
                  />
                </Form.Group>
                <Form.Group className="profile_form_group mb-3">
                  <Form.Label className={styles.label}>
                    Imagem:
                  </Form.Label>
                  <Form.Control
                    className={styles.profile_form_input}
                    type="file"
                    accept=".jpg, .png"
                    onChange={handleFile}
                  />
                </Form.Group>
                {!loadingPhoto &&
                  <Button
                    type="submit"
                    className={styles.createBtn}
                  >
                    Postar
                  </Button>
                }
                {loadingPhoto && (
                  <Button
                    className={styles.waitBtn}
                    variant="secondary"
                    disabled
                  >
                    Aguarde...
                  </Button>
                )}
              </Form>
            </div>
            <div className={`${styles.edit_photo} hide`} ref={editPhotoForm}>
              <p>Editando:</p>
              {editImage && (
                <img src={`${uploads}/photos/${editImage}`} alt={editTitle} />
              )}
              <Form onSubmit={handleUpdate}>
                <Form.Group className="profile_form_group mb-3">
                  <Form.Label className={styles.label}>
                    Título para a foto:
                  </Form.Label>
                  <Form.Control
                    className={styles.profile_form_input}
                    type="text"
                    onChange={(e) => setEditTitle(e.target.value)}
                    value={editTitle || ""}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className={styles.editBtn}
                >
                  Atualizar
                </Button>
                <Button
                  className={styles.cancelBtn}
                  onClick={handleCancelEdit}
                >
                  Cancelar edição
                </Button>
              </Form>
            </div>
            {errorPhoto && <Message msg={errorPhoto} type="danger" />}
            {messagePhoto && <Message msg={messagePhoto} type="success" />}
          </>
        )}
        <div className={styles.user_photos}>
          <h3>Fotos publicadas:</h3>
          <div className={styles.photos_container}>
            {photos &&
              photos.map((photo) => (
                <div className={styles.photo} key={photo._id}>
                  {photo.image && (
                    <div className={styles.photo_size}>
                      <img
                        src={`${uploads}/photos/${photo.image}`}
                        alt={photo.title}
                      />
                    </div>
                  )}
                  {id === userAuth._id ? (
                    <div className={styles.actions}>
                      <Link to={`/photos/${photo._id}`}>
                        <BsFillEyeFill />
                      </Link>
                      <BsPencilFill onClick={() => handleEdit(photo)} />
                      <BsXLg onClick={() => handleDelete(photo._id)} />
                    </div>
                  ) : (
                    <Link className={styles.btn} to={`/photos/${photo._id}`}>
                      Ver
                    </Link>
                  )}
                </div>
              ))}
            {photos.length === 0 && <p>Ainda não há fotos publicadas...</p>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;