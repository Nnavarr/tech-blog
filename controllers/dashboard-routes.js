const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts 
router.get('/', withAuth, (req,res) => {
    // get all posts
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_text',
            'user_id',
            'date_created'
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;
