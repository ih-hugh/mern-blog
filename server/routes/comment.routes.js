import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller';
const router = new Router();

// Get all comments for post
router.route('/comments/:postID').get(CommentController.getComments);

// Get one comment by cuid for post
router.route('/comments/:cuid/:postID').get(CommentController.getComment);

// Add a new comment for post
router.route('/comments/').post(CommentController.addComment);

// Delete a comment by cuid for post
router.route('/comments/:cuid/:postID').delete(CommentController.deleteComment);

// Update a comment by cuid
// router.route('/comments/:cuid').put(CommentController.updatePost);

export default router;
