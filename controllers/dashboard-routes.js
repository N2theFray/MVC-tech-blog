const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')
const withAuth = require('../utils/auth')


router.get('/', (req, res) => {
    Post.findAll({
        // where: {
        //     user_id: req.body.user_id
        // },
        attributes: [
            'id',
            'post_content',
            'title',
            'created_at',
           
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            //serialize data before passing to template
            const posts = dbPostData.map(post => post.get({ plain:true }))
            res.render('dashboard', { posts, loggedIn: true})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/create', (req, res) => {
    Post.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'post_content',
            'title',
            'created_at',
            
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            //serialize data before passing to template
            const posts = dbPostData.map(post => post.get({ plain:true }))
            console.log(posts)
            res.render('create-post', { 
                posts, 
                // loggedIn: true
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/edit/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
        console.log(post.comments.length)
        // pass data to template
        res.render('edit-post', {
            post,
            // loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router