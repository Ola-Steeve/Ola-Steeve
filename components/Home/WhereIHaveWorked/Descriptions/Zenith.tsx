import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Zenith() {
  const tasks = [
    {
      text: "Championed the firewall cleanup that cleared a long-standing PCI DSS audit finding, remediating thousands of legacy Checkpoint and Juniper rules with Algosec Firewall Analyzer and micro-segmentation, reducing the network attack surface by 30%.",
      keywords: ["PCI DSS", "Checkpoint", "Juniper", "Algosec", "micro-segmentation", "30%"],
    },
    {
      text: "Enforced zero-trust privileged access across hundreds of servers on Safeguard PAM, OneIdentity IAM and Azure PIM, with credential vaulting, session recording and recurring access reviews over 20+ DMZ-zoned VLANs and DR zones, eliminating standing privileges for 85% of administrative roles.",
      keywords: ["zero-trust", "Safeguard PAM", "OneIdentity", "Azure PIM", "20+", "DMZ", "85%"],
    },
    {
      text: "Found Forescout NAC was detecting but not blocking non-compliant and unknown endpoints, and corrected the 802.1X enforcement so unauthorized devices were quarantined automatically.",
      keywords: ["Forescout", "NAC", "802.1X"],
    },
    {
      text: "Ran detection and incident response on IBM QRadar alongside Microsoft Sentinel and Defender across 200+ critical assets, maintaining 99.95% uptime for security logging, and diagnosed a cross-region snapshot backup failure that had left disaster-recovery data unprotected.",
      keywords: ["IBM QRadar", "Microsoft Sentinel", "Defender", "incident response", "200+", "99.95%", "disaster-recovery"],
    },
    {
      text: "Owned staff identity on Entra ID, Privileged Identity Management, Conditional Access and MFA for roughly 5,000 employees in the bank's Cloud Center of Excellence, enforcing least-privilege access.",
      keywords: ["Entra ID", "Privileged Identity Management", "Conditional Access", "MFA", "5,000", "least-privilege"],
    },
    {
      text: "Directed KnowBe4 security awareness training and phishing simulations for 1,000+ staff, cutting phishing susceptibility by over 80% at a 98% completion rate.",
      keywords: ["KnowBe4", "phishing", "80%", "98%"],
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
