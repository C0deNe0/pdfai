import express from "express";
import cors from "cors";
import multer from "multer";
import { Queue } from "bullmq";

const queue = new Queue("file-upload-queue", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ status: "all good" });
});

app.post("/upload/pdf", upload.single("pdf"), async (req, res) => {
  await queue.add(
    "file-ready",
    JSON.stringify({
      filePath: req.file.path,
      fileName: req.file.originalname,
      destination: req.file.destination,
    })
  );
  return res.json({ message: "uploaded successfully" });
});

app.listen(8000, () => {
  console.log(`server is running on port ${PORT}...`);
});
