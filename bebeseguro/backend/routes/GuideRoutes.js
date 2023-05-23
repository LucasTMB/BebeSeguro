const express = require('express');
const router = express.Router();
const Guide = require('../models/Guide');
const authGuard = require('../middlewares/authGuard');

// Rota para obter todos os posts
router.get('/', async (req, res) => {
  try {
    const posts = await Guide.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os posts' });
  }
});

// Rota para criar um novo post (protegida com autenticação)
router.post('/', authGuard, async (req, res) => {
  try {
    const { photo, title, body, tags } = req.body;
    const author = req.user.username; // Obtém o nome do usuário logado
    const post = new Guide({ photo, title, body, tags, author });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o post' });
  }
});

// Rota para obter um post por ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Guide.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o post' });
  }
});

// Rota para atualizar um post por ID (protegida com autenticação)
router.put('/:id', authGuard, async (req, res) => {
  try {
    const { photo, title, body, tags } = req.body;
    const post = await Guide.findByIdAndUpdate(
      req.params.id,
      { photo, title, body, tags },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o post' });
  }
});

// Rota para excluir um post por ID (protegida com autenticação)
router.delete('/:id', authGuard, async (req, res) => {
  try {
    const post = await Guide.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado' });
    }
    res.json({ message: 'Post excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o post' });
  }
});

module.exports = router;
