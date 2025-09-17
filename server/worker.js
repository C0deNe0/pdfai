import { OpenAIEmbeddings } from "@langchain/openai";
import { Worker } from "bullmq";
import { url } from "inspector";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const worker = new Worker(
  "file-upload-queue",
  async (job) => {
    // if ( job.name =='file-ready'){
    //     await
    // console.log("Processing job:", job.id, job.data);

    const data = JSON.parse(job.data);

    //Load the pdf
    const loader = new PDFLoader(data.pdfPath);
    const docs = await loader.load();

    const chunkedDocs = await loader.loadAndSplit();
    console.log(chunkedDocs);
    // }
    const client = new QdrantClient({ url: `http://localhost:6333` });
    const emmbeffi = new OpenAIEmbeddings({
        apiKey:""
    })
  },
  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
