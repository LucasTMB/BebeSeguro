import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocuments";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const {user} = useAuthValue();

  const {insertDocument, response} = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validando URL da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    };

    // criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // checando todos os valores
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    };

    // retornando caso ocorra algum erro
    if (formError) return;

    // inserindo o post
    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createBy: user.displayName
    });

    // redirecionando para a home
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre suas dúvidas e experiências</p>
      <Form onSubmit={handleSubmit}>

        <Form.Group 
          className="mb-3" 
          controlId="formBasicEmail"
        >
          <Form.Label>Título:</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            required 
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>

        <Form.Group 
          className="mb-3" 
          controlId="formBasicEmail"
        >
          <Form.Label>URL da imagem:</Form.Label>
          <Form.Control 
            type="text"
            name="image"
            required 
            placeholder="Insira uma imagem que representa o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </Form.Group>

        <Form.Group 
          className="mb-3" 
          controlId="formBasicEmail"
        >
          <Form.Label>Conteúdo:</Form.Label>
          <Form.Control 
            as="textarea"
            rows={3}
            name="body"
            required 
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </Form.Group>

        <Form.Group 
          className="mb-3" 
          controlId="formBasicEmail"
        >
          <Form.Label>Tags:</Form.Label>
          <Form.Control 
            type="text"
            name="tags"
            required 
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </Form.Group>

        {!response.loading && <Button>Publicar</Button>}
        {response.loading && <Button disabled>Aguarde...</Button>}
        {response.error && <Alert varianty="danger">{response.alert}</Alert>}
        {formError && <Alert varianty="danger">{formError}</Alert>}

      </Form>
    </div>
  )
}

export default CreatePost