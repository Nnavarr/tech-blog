const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


// render homepage
router.get('/', (req, res) => {
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

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// redirect to homepage if session exists
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

module.exports = router;