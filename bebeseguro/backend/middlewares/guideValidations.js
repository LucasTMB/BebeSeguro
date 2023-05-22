const { body } = require("express-validator");

const guideCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres."),
    body("content")
      .isString()
      .withMessage("O corpo da postagem é obrigatório.")
      .isLength({ min: 10 })
      .withMessage("O corpo da postagem precisa ter no mínimo 10 caracteres."),
    body("image")
      .custom((value, { req }) => {
        if (!req.file) {
          throw new Error("A imagem é obrigatória");
        }
        return true;
      }),
    body("tags")
      .isArray({ min: 1 })
      .withMessage("É obrigatório fornecer pelo menos uma tag."),
  ];
};

const guideUpdateValidation = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("O título precisa ser uma string.")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres."),
    body("content")
      .optional()
      .isString()
      .withMessage("O corpo da postagem precisa ser uma string.")
      .isLength({ min: 10 })
      .withMessage("O corpo da postagem precisa ter no mínimo 10 caracteres."),
    body("image")
      .optional()
      .custom((value, { req }) => {
        if (!req.file) {
          throw new Error("A imagem é obrigatória");
        }
        return true;
      }),
    body("tags")
      .optional()
      .isArray({ min: 1 })
      .withMessage("É obrigatório fornecer pelo menos uma tag."),
  ];
};

module.exports = {
  guideCreateValidation,
  guideUpdateValidation,
};
