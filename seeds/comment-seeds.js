const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This is a great post!',
        user_id: 1,
        post_id: 1,
        date_created: '2022-02-12'
    },
    {
        comment_text: 'This is an awesome post too!',
        user_id: 2,
        post_id: 2,
        date_created: '2022-02-12'
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;