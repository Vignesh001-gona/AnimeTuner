import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ask", async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) return res.json({ reply: "Senpai is silent..." });

  try {
    const response = await fetch(
      ""https://huggingface.co/api/models/microsoft/DialoGPT-medium"
",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
        },
        body: JSON.stringify({ inputs: userMessage }),
      }
    );

    const data = await response.json();
    console.log("HF Response:", data);

    const reply =
      data.generated_text ||
      data[0]?.generated_text ||
      "Senpai is silent...";
    res.json({ reply });
  } catch (err) {
    console.error("❌ Error:", err);
    res.json({ reply: "⚠️ Could not reach the AI backend." });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`✅ Backend running on port ${process.env.PORT || 3000}`)
);
