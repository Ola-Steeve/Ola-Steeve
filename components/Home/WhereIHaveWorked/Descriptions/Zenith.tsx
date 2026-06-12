import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Zenith() {
  const tasks = [
    {
      text: "Operated IBM QRadar SIEM for log correlation, continuous monitoring, and incident response across 200+ critical assets, maintaining 99.95% uptime for security logging.",
      keywords: ["IBM QRadar", "SIEM", "incident response", "200+", "99.95%"],
    },
    {
      text: "Directed KnowBe4 security awareness training and phishing simulations for 1,000+ staff, cutting phishing susceptibility by over 80% at a 98% completion rate.",
      keywords: ["KnowBe4", "phishing", "80%", "98%"],
    },
    {
      text: "Enforced zero-trust access with Azure PIM and integrated Safeguard PAM across 200+ assets, eliminating standing privileges for 85% of administrative roles.",
      keywords: ["zero-trust", "Azure PIM", "Safeguard PAM", "85%"],
    },
    {
      text: "Engineered PCI DSS-aligned firewall micro-segmentation and 802.1X authentication, reducing the network attack surface by 30%.",
      keywords: ["PCI DSS", "802.1X", "30%"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Security Engineer <span className="text-AAsecondary">@ Zenith Bank</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Apr 2024 - May 2025</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
