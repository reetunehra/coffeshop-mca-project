import axios from "axios";
import { MessageInterface } from "@/types/types";
import { API_KEY, API_URL } from "@/config/runPodConfig";

export async function callChatBotAPI(
  messages: MessageInterface[]
): Promise<MessageInterface> {
  try {
    const response = await axios.post(
      API_URL,
      {
        input: { messages },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const output = response.data;
    const outputMessage: MessageInterface = output["output"];
    return outputMessage;
  } catch (error) {
    throw error;
  }
}
