import Comment from '../models/comment';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all comments
 * @param req
 * @param res
 * @returns void
 */
export function getComments(req, res) {
  const offset = parseInt(req.query.offset) || 0; // eslint-disable-line
  const limit = parseInt(req.query.limit) || 0; // eslint-disable-line
  const postID = req.params.postID;

  Comment.find({ postID }).sort('-datetime')
    .skip(offset * limit)
    .limit(limit)
    .exec((err, comments) => {
      if (err) {
        return res.status(500).send(err);
      }

      return Comment.count({ postID }, (_err, commentsCount) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.json({ comments, commentsCount });
      });
    });
}

/**
 * Save a comment
 * @param req
 * @param res
 * @returns void
 */
export function addComment(req, res) {
  if (!req.body.comment.username || !req.body.comment.content || !req.body.comment.postID) {
    res.status(403).end();
  }

  const newComment = new Comment(req.body.comment);

  // Let's sanitize inputs
  newComment.username = sanitizeHtml(newComment.username);
  newComment.content = sanitizeHtml(newComment.content);
  newComment.postID = sanitizeHtml(newComment.postID);

  newComment.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ comment: saved });
  });
}

/**
 * Get a single comment
 * @param req
 * @param res
 * @returns void
 */
export function getComment(req, res) {
  Comment.findOne({ cuid: req.params.cuid, postID: req.params.postID }).exec((err, comment) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ comment });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteComment(req, res) {
  Comment.findOne({ cuid: req.params.cuid, postID: req.params.postID }).exec((err, comment) => {
    if (err) {
      res.status(500).send(err);
    }

    comment.remove(() => {
      res.status(200).end();
    });
  });
}

// /**
//  * Update a post
//  * @param req
//  * @param res
//  * @returns void
//  */
// export function updatePost(req, res) {
//   if (!req.body.post.title || !req.body.post.content) {
//     res.status(403).end();
//   }

//   const title = req.body.post.title;
//   const content = req.body.post.content;

//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     }

//     post.content = content; // eslint-disable-line
//     post.title = title; // eslint-disable-line
//     post.save();

//     res.send(post);
//   });
// }
