// CSS
import styles from "./CreateGuidePost.module.css";

// hooks
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useSelector, useDispatch } from "react-redux";
//import { useAuthValue } from "../../context/AuthContext";

// Redux
import { getUserDetails } from "../../slices/userSlice";

// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const CreateGuidePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  //const { user } = useAuthValue();
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const { insertDocument, response } = useInsertDocument("guide-posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // checar todos os valores
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user._id,
      createBy: user.name,
    });

    // redirect to home page
    navigate("/guides");
  };

  return (
    <div className={styles.create_post}>
      <div className={styles.page_titles}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      </div>
      <Form 
        className="post_form" 
        onSubmit={handleSubmit}
      >
        <Form.Group 
          className="post_form_group my-3"
        >
          <Form.Label 
            className="label"
          >
            Título:
          </Form.Label>
          <input
            className="post_form_input"
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>
        <Form.Group 
          className="post_form_group my-3"
        >
          <Form.Label 
            className="label"
          >
            URL da imagem:
          </Form.Label>
          <input
            className="post_form_input"
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </Form.Group>
        <Form.Group 
          className="post_form_group my-3"
        >
          <Form.Label 
            className="label"
          >
            Conteúdo:
          </Form.Label>
          <textarea
          className="post_form_textarea"
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </Form.Group>
        <Form.Group 
          className="post_form_group my-3"
        >
          <Form.Label 
            className="label"
          >
            Tags:
          </Form.Label>
          <input
            className="post_form_input"
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </Form.Group>
        <div className={styles.buttonsAndAlerts}>
          {!response.loading &&
            <Button type="submit" className={styles.createBtn}>
              Criar
            </Button>
          }
          {response.loading && (
            <Button variant="secondary" disabled>
              Aguarde...
            </Button>
          )}
          {response.error &&
            <Alert variant="danger">
              {response.error}
            </Alert>
          }
          {formError &&
            <Alert variant="danger">
              {formError}
            </Alert>
          }
        </div>
      </Form>
    </div>
  );
};

export default CreateGuidePost;
