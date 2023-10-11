import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { question } = await request.json();
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a knowledgebale assistant that provides quality information",
          },
          {
            role: "user",
            content: `Tell me ${question}`,
          },
        ],
      }),
    });
    const responseData = await response.json();
    if(responseData?.error?.code==="insufficient_quota"){
        return NextResponse.json({ error:"Run out off credits!!" })
    }
    const reply = responseData.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.log("chat gpt error",error)
    return NextResponse.json({ error: error.message });
  }
};
