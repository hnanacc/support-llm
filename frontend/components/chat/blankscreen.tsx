import { UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";

const exampleMessages = [
  {
    heading: "What is the current health state of the system.",
    message: `What is the current health state of the system.\n`,
  },
  {
    heading: "How do I fix the rotary indexing table plate?",
    message: "How do I fix the rotary indexing table plate? \n",
  },
  {
    heading:
      "Inform me when the Sensor temperature rises 5% from the standard.",
    message:
      "Inform me when the Sensor temperature rises 5% from the standard.\n",
  },
];

export function BlankScreen({ setInput }: Pick<UseChatHelpers, "setInput">) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Chat with Machine Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          You can ask technical and product related questions along with current
          health state of the system.
        </p>
        <p className="leading-normal text-muted-foreground">
          Some questions you may be interested in!
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
