import ReportModel from "../model/report.model.js";

const reportController = {
  // user gui bao cao
  createReport: async (req, res) => {
    try {
      const { mediaId, mediaType, title, description } = req.body;
      const { userId } = req.user;

      const newReport = await ReportModel.create({
        mediaId,
        mediaType,
        title,
        description,
        userId,
      });

      res.status(201).send({ message: "Report sent successfully", data: newReport });
    } catch (error) {
      res.status(500).send({ message: "Error sending report", error: error.message });
    }
  },

  // admin lay danh sach bao loi
  getPendingReports: async (req, res) => {
    try {
      const reports = await ReportModel.find({ status: "PENDING" })
        .populate("userId", "username")
        .sort({ createdAt: -1 });
        
      res.status(200).send({ data: reports });
    } catch (error) {
      res.status(500).send({ message: "Error fetching reports" });
    }
  },

  // admin xac nhan da sua loi
  resolveReport: async (req, res) => {
    try {
      const { id } = req.params;
      await ReportModel.findByIdAndDelete(id);
      
      // await ReportModel.findByIdAndUpdate(id, { status: "FIXED" });

      res.status(200).send({ message: "Issue resolved" });
    } catch (error) {
      res.status(500).send({ message: "Error resolving issue" });
    }
  }
};

export default reportController;