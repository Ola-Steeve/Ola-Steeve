import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TechInno() {
  const tasks = [
    {
      text: "Designed and implemented CI/CD pipelines for multiple applications using tools like Jenkins and GitHub Actions  which reduced deployment times by up to 50%.",
      keywords: ["CI/CD", "Jenkins", "GitHub Actions"],
    },
    {
      text: "Leveraged industry standard tools like Prometheus and Grafana, ELK stack, Data Dog  and Jaeger tracing for monitoring, logging and alerting across all applications and infrastuctures.",
      keywords: ["Prometheus", "Grafana", "ELK", "Data Dog", "Jaeger tracing"],
    },
    {
      text: "Designed and maintained highly available systems with AWS services with a 99.99% uptime, utilizing load balancing, redundant architectures, and disaster recovery strategies.",
      keywords: ["AWS","99.99%", "load balancing", "redundant architectures", "disaster recovery"],
    },
    {
      text: "Spearheaded security improvements through regular vulnerability assessments. This approach resulted in zero security breaches and ensured the integrity of customer data.",
      keywords: ["vulnerability assessments", "zero"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            DevOps Engineer <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2022 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.techinovationsandsolutions.com/", "_blank")}
          >
            www.techinovations
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
