"use client";

import { EmailThread } from "@/components/EmailThread";
import { EmailsProvider } from "@/lib/hooks/use-emails";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-textarea/styles.css";

export default function Home() {
  return (
    <div className="h-screen">
      <CopilotKit publicApiKey= "ck_pub_01bbdaf59a787242527c658057bf19d4" >
        <EmailsProvider>
          <EmailThread />
        </EmailsProvider>
      </CopilotKit>
    </div>
  );
}
