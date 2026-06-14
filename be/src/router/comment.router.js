import { Router } from "express";
import commentController from "../controller/comment.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const commentRouter = Router();

// lay danh sach bao cao
commentRouter.get("/admin/reported", 
    authMiddleware.authenticate, 
    authMiddleware.isAdmin, 
    commentController.getReportedComments
);

// xoa comment
commentRouter.delete("/admin/:commentId", 
    authMiddleware.authenticate, 
    authMiddleware.isAdmin, 
    commentController.deleteComment
);

// bo qua bao cao
commentRouter.put("/admin/:commentId/dismiss", 
    authMiddleware.authenticate, 
    authMiddleware.isAdmin, 
    commentController.dismissReport
);

// bao cao binh luan
commentRouter.put("/:commentId/report", authMiddleware.authenticate, commentController.reportComment);

// xoa comment cua minh
commentRouter.delete("/:commentId", authMiddleware.authenticate, commentController.deleteComment);

// lay binh luan phim
commentRouter.get("/:mediaType/:mediaId", commentController.getComments);

// viet binh luan
commentRouter.post("/", authMiddleware.authenticate, commentController.addComment);

export default commentRouter;