import multer from "multer";
import path from "path";
import crypto from "crypto";

export const uploadConfig = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const hash = crypto.randomBytes(6).toString("hex");
      const fileName = `${hash}-${file.originalname}`;
      cb(null, fileName);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  }
});
