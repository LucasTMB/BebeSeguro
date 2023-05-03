// CSS
import styles from "./CreateGuidePost.module.css";

// hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

// WYSIWYG
import Editor from "react-quill";
import "react-quill/dist/quill.snow.css";

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

  const { user } = useAuthValue();

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
      uid: user.uid,
      createBy: user.displayName,
    });

    // redirect to home page
    navigate("/guides");
  };

  const handleEditorChange = (value) => {
    setBody(value);
  };

  return (
    <div className={styles.create_post}>
      <div className={styles.page_titles}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-4" controlId="title">
          <Form.Control
            className="form_input"
            type="text"
            name="title"
            maxLength={50}
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>
        <Form.Group className="my-4" controlId="image">
          <Form.Control
            className="form_input"
            type="text"
            name="image"
            required
            placeholder="Insira a URL de uma imagem que representa o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </Form.Group>
        <Form.Group className="my-4" controlId="body" as="div">
          <Editor
            className={styles.editor}
            name="body"
            placeholder="Digite o seu conteúdo aqui..."
            onEditorChange={handleEditorChange}
            value={body}
          />
        </Form.Group>
        <Form.Group className="my-4" controlId="tags">
          <Form.Control
            className="form_input"
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
