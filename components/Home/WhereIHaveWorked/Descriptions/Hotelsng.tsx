import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Hotelsng() {
  const tasks = [
    {
      text: " Developed and tested disaster recovery plans to ensure business continuity and minimize downtime during critical events.",
      keywords: ["disaster recovery"],
    },
    {
      text: "Conducted performance analysis and optimizations, improving application responsiveness and user experience.",
      keywords: ["performance analysis", "optimizations"],
    },
    {
      text: "Integrated AWS DevOps tools and services such as CodePipeline, CodeBuild, and CodeDeploy for CI/CD pipelines.",
      keywords: ["AWS", "CodePipeline", "CodeBuild", "CodeDeploy"],
    },
    {
      text: "Collaborated with cross-functional teams to design cloud-based infrastructure solutions tailored to business needs, ensuring scalability, availability, and cost-effectiveness.",
      keywords: ["scalability", "availability", "Cost-effectiveness"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            DevOps Engineer <span className="text-AAsecondary">@ Cloud</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">October 2021 - August 2022</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.hotels.ng/", "_blank")}
          >
            www.Hotels.ng
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
