const router = require('express').Router();
const { Comment } = require('../../models');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll()
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get comment by id
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'post_id',
            'date_created'
        ]
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// post comment
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id,
        date_created: req.body.date_created
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        res.status(400).json(err);
    })
})

// delete comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(400).json({ message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


module.exports = router;