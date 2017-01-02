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

  newComment.content = sanitizeHtml(newComment.content);

  newComment.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ comment: saved });
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
