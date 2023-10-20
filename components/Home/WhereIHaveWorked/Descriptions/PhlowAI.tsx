import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function PhlowAI() {
  const tasks = [
    {
      text: "Developed and maintained microservices-based applications, using Docker and Kubernetes to containerize and orchestrate services, promoting flexibility and scalability.",
      keywords: ["microservices",],
    },
    {
      text: "Managed databases in the cloud, including SQL and NoSQL databases. Performed tasks such as data modeling, optimization, and scaling.",
      keywords: ["SQL",'NOSQL'],
    },  
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Developer <span className="text-AAsecondary">@ BACKEND</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2020</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
