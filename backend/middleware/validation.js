const { body} = require('express-validator/check')
const User = require('../model/user');

module.exports = {

    loginValidationRules : () => {
      return [
        body('email').isEmail().withMessage('Please enter a valid email.'),
        body('password').not().isEmpty().withMessage('Please enter valid password')
      ]
    },

    signupValidationRules : () => {
      return [
        body('email').isEmail().withMessage('Please enter a valid email.').custom((value, { req }) => {
          return User.findOne({ email: value }).then(userDoc => {
            if (userDoc) {
              return Promise.reject('E-Mail address already exists!');
            }
          });
        }).normalizeEmail(),
        body('name').not().isEmpty().withMessage('Please enter valid name'),
        body('password').trim().isLength({ min: 5 }).withMessage('Password must be of minimum 5 character')
      ]
    },

    forgetPasswordValidationRules : () => {
      return [
        body('email').isEmail().withMessage('Please enter a valid email.')
      ]
     
    },
    resetPasswordValidationRules : () => {
      return [
          body('email').isEmail().withMessage('Please enter a valid email'),
          body('password').trim().isLength({ min: 5 }).withMessage('Password must be of minimum 5 character')
      ]
    },

    changePasswordValidationRules : () => {
      return [
        body('password').trim().isLength({ min: 5 }).withMessage('Password must be of minimum 5 character')
      ]
    },

    addProductValidationRules : () => {
      return [
        body('title').not().isEmpty().withMessage('Please enter valid name'),
        body('category').not().isEmpty().withMessage('Please enter valid category'),
        body('subcategory').not().isEmpty().withMessage('Please enter valid subcategory'),
        body('price').not().isEmpty().withMessage('Please enter price'),
        body('color').not().isEmpty().withMessage('Please enter color')
      ]
    }
}
