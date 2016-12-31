import Post from '../models/post';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  const offset = parseInt(req.query.offset) || 0; // eslint-disable-line
  const limit = parseInt(req.query.limit) || 5; // eslint-disable-line
  Post.find().sort('-datetime')
    .skip(offset * limit)
    .limit(limit)
    .exec((err, posts) => {
      if (err) {
        return res.status(500).send(err);
      }

      return Post.count((_err, postsCount) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.json({ posts, postsCount });
      });
    });
}
/**
 * Get posts count
 * @param req
 * @param res
 * @returns void
 */
export function getPostsCount(req, res) {
  Post.count((err, postsCount) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ postsCount });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.username || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.username = sanitizeHtml(newPost.username);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}

/**
 * Update a post
 * @param req
 * @param res
 * @returns void
 */
export function updatePost(req, res) {
  if (!req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const title = req.body.post.title;
  const content = req.body.post.content;

  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.content = content; // eslint-disable-line
    post.title = title; // eslint-disable-line
    post.save();

    res.send(post);
  });
}
