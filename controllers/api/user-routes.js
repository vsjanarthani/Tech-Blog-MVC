const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll(({
            attributes: { exclude: ['password'] }
          }));
        res.status(200).json(allUsers);
      }
      catch (e) {
        res.status(400).json({Error: e});
      }
});

// GET /api/users/1
router.get('/:id', async (req, res) => {
    
    try {
        const { id } = req.params.id;
        const userById = await User.findOne({
            attributes: { exclude: ['password'] },
            where: { id }
        });
        res.status(200).json(userById);
      }
      catch (e) {
        res.status(400).json({Error: e});
      }
});

// POST /api/users
router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body
        const newUser =  await User.create({
            username,
            email,
            password
          });
          res.status(200).json(newUser);
    }
    catch (e) {
        res.status(400).json({Error: e});
      }
});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;