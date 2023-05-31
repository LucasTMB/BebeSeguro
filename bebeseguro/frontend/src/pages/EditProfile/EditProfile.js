import styles from "./EditProfile.module.css";

import { uploads } from "../../utils/config";

// hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

// redux
import { profile, resetMessage, updateProfile } from "../../slices/userSlice";

// components
import Message from "../../components/Message";

// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, message, error, loading } = useSelector((state) => state.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [bio, setBio] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    // load user data
    useEffect(() => {
        dispatch(profile());
    }, [dispatch]);

    // fill form with user data
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setBio(user.bio);
        }
    }, [user])

    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Pegando os states dos dados dos usuários
        const userData = {
            name,
        }

        if (profileImage) {
            userData.profileImage = profileImage;
        }

        if (bio) {
            userData.bio = bio;
        }

        if (password) {
            userData.password = password;
        }

        // fazendo o form data
        const userFormData = Object.keys(userData)
            .reduce((formData, key) => {
                formData.append(key, userData[key]);
                return formData;
            }, new FormData());
        await dispatch(updateProfile(userFormData));

        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000);

        navigate(`/users/${user._id}`);

    };

    const handleFile = (e) => {
        // prévia da imagem
        const image = e.target.files[0];

        setPreviewImage(image);

        // atualizar o state de imagem
        setProfileImage(image);
    }

    return (
        <div className={styles.edit_profile}>
            <div className={styles.page_titles}>
                <h2>
                    Edite seus dados
                </h2>
                <p>
                    Adicione uma imagem de perfil e conte mais sobre você...
                </p>
            </div>
            <Form
                className="profile_form"
                onSubmit={handleSubmit}
            >
                {(user.profileImage || previewImage) && (
                    <img
                        className={styles.profile_image}
                        src={
                            previewImage ? URL.createObjectURL(previewImage) : `${uploads}/users/${user.profileImage}`
                        }
                        alt={user.name} />
                )}
                <Form.Group className="profile_form_group mb-3">
                    <Form.Control
                        className="profile_form_input"
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name || ""}
                    />
                </Form.Group>
                <Form.Group className="profile_form_group mb-3">
                    <Form.Control
                        type="email"
                        placeholder="E-mail"
                        disabled
                        value={email || ""}
                    />
                </Form.Group>
                <Form.Group className="profile_form_group mb-3">
                    <Form.Label
                        className="label"
                    >
                        Imagem do perfil
                    </Form.Label>
                    <Form.Control
                        className="profile_form_input"
                        type="file"
                        accept=".jpg, .png"
                        onChange={handleFile}
                    />
                </Form.Group>
                <Form.Group className="profile_form_group mb-3">
                    <Form.Label
                        className="label"
                    >
                        Biografia
                    </Form.Label>
                    <Form.Control
                        className="profile_form_input"
                        type="text"
                        placeholder="Descrição do perfil"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio || ""}
                    />
                </Form.Group>
                <Form.Group className="profile_form_group mb-3">
                    <Form.Label
                        className="label"
                    >
                        Deseja alterar a senha?
                    </Form.Label>
                    <Form.Control
                        className="profile_form_input"
                        type="password"
                        placeholder="Digite sua nova senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password || ""}
                    />
                </Form.Group>
                <div className={styles.buttonsAndAlerts}>
                    {!loading &&
                        <Button type="submit" className={styles.editBtn}>
                            Atualizar
                        </Button>
                    }
                    {loading &&
                        <Button variant="secondary" disabled>
                            Aguarde...
                        </Button>
                    }
                    {error && <Message msg={error} type="danger" />}
                    {message && <Message msg={message} type="success" />}
                </div>
            </Form>
        </div>
    )
}

export default EditProfile