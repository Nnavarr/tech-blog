const router = require('express').Router();

// individual file routes
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

// define the endpoint to use
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;