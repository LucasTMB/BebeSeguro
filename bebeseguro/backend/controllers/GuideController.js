const Guide = require("../models/Guide");

// Create a guide post
const createGuidePost = async (req, res) => {
  const { title, image, content, tags } = req.body;

  // Create guide post
  const newGuidePost = await Guide.create({
    title,
    image,
    content,
    tags: tags.split(",").map((tag) => tag.trim()),
    author: req.user._id,
  });

  // If guide post was created successfully, return the data
  if (!newGuidePost) {
    res.status(422).json({
      errors: ["Houve um erro ao criar o post do guia. Por favor, tente novamente mais tarde."],
    });
    return;
  }

  res.status(201).json(newGuidePost);
};

// Get all guide posts
const getAllGuidePosts = async (req, res) => {
  const guidePosts = await Guide.find({}).sort([["createdAt", -1]]).exec();

  return res.status(200).json(guidePosts);
};

// Get guide post by ID
const getGuidePostById = async (req, res) => {
  const { id } = req.params;

  const guidePost = await Guide.findById(id);

  // Check if guide post exists
  if (!guidePost) {
    res.status(404).json({ errors: ["Post do guia não encontrado!"] });
    return;
  }

  res.status(200).json(guidePost);
};

// Update a guide post
const updateGuidePost = async (req, res) => {
  const { id } = req.params;
  const { title, image, content, tags } = req.body;

  const guidePost = await Guide.findById(id);

  // Check if guide post exists
  if (!guidePost) {
    res.status(404).json({ errors: ["Post do guia não encontrado!"] });
    return;
  }

  // Check if guide post belongs to user
  if (!guidePost.userId.equals(req.user._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro ao atualizar o post do guia. Tente novamente mais tarde."] });
    return;
  }

  // Update guide post data
  guidePost.title = title;
  guidePost.image = image;
  guidePost.content = content;
  guidePost.tags = tags.split(",").map((tag) => tag.trim());

  await guidePost.save();

  res.status(200).json(guidePost);
};

// Delete a guide post
const deleteGuidePost = async (req, res) => {
  const { id } = req.params;

  const guidePost = await Guide.findById(id);

  // Check if guide post exists
  if (!guidePost) {
    res.status(404).json({ errors: ["Post do guia não encontrado!"] });
    return;
  }

  // Check if guide post belongs to user
  if (!guidePost.userId.equals(req.user._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro ao excluir o post do guia. Tente novamente mais tarde."] });
    return;
  }

  await Guide.findByIdAndDelete(guidePost._id);

  res.status(200).json({ id: guidePost._id, message: "Post do guia excluído com sucesso." });
};

module.exports = {
  createGuidePost,
  getAllGuidePosts,
  getGuidePostById,
  updateGuidePost,
  deleteGuidePost,
};