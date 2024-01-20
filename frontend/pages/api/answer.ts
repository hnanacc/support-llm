import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
    apiKey: "Enter Your Key",
});

export async function POST(req: Request) {
    const { prompt } = await req.json();

    const response = await openai.completions.create({
        model: 'text-davinci-003',
        stream: true,
        temperature: 0.6,
        max_tokens: 300,
        prompt: prompt,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}