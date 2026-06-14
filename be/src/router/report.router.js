import { Router } from "express";
import reportController from "../controller/report.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const reportRouter = Router();

// user gui bao cao
reportRouter.post("/", authMiddleware.authenticate, reportController.createReport);

// admin xem danh sach
reportRouter.get("/admin", 
    authMiddleware.authenticate, 
    authMiddleware.isAdmin, 
    reportController.getPendingReports
);

// admin xac nhan da sua loi
reportRouter.delete("/admin/:id", 
    authMiddleware.authenticate, 
    authMiddleware.isAdmin, 
    reportController.resolveReport
);

export default reportRouter;