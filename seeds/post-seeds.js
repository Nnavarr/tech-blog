const { Post } = require('../models');

const postdata = [
    {
        title: 'Post 1',
        post_text: 'This is the post 1 text',
        user_id: 1,
        date_created: '2022-02-12'
    },

    {
        title: 'Post 2',
        post_text: 'This is post 2 text',
        user_id: 2,
        date_created: '2022-02-12'
    }
];

const seedPost = () => Post.bulkCreate(postdata);

