import { connectToDB } from "@utils/database";

import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const prompt = await Prompt.find({
      creator: params.id,
    }).populate("creater");
    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (err) {
    return new Response("Error getting prompt", { status: 500 });
  }
};
