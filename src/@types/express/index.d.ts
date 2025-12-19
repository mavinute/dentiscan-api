import { Multer } from "multer";

declare namespace Express {
    export interface Request {
        userId?: string;
    }
}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      file?: Multer.File;
    }
  }
}