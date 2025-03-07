import type { NextApiRequest, NextApiResponse } from 'next';

const url = 'https://api.perplexity.ai/chat/completions';
const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!PERPLEXITY_API_KEY) {
    return res.status(500).json({ error: 'API Key is missing' });
  }

  const message = req.body.message;
  
  const sonarModel = "sonar"
  // Deprecated models
  const cheaperModel = "llama-3.1-sonar-small-128k-online";
  

  const body = {
    model: sonarModel,
    stream: false,
    max_tokens: 1024,
    frequency_penalty: 1,
    temperature: 0.0,
    messages: [
      { role: "system", content: "Be precise and concise in your responses." },
      { role: "user", content: message }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json({ response: data.choices[0].message.content.trim() });

  } catch (error) {
    console.error("Error fetching AI response:", error);
    res.status(500).json({ error: (error as Error).message });
  }
}
