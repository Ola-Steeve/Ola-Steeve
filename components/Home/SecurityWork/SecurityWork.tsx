import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

type Work = {
  title: string;
  context: string;
  body: string;
  stack: string[];
};

export default function SecurityWork() {
  const work: Work[] = [
    {
      title: "Multi-Agent AI System for Security Operations",
      context: "INSE 691 · Concordia",
      body:
        "Built a multi-agent LLM system that triages alerts, runs investigations and drafts findings, with human-in-the-loop approval before any consequential action. Designed the guardrails around it: sandboxed execution with no access to secrets, inputs treated as hostile, outputs validated, and tamper-evident audit trails over every agent action. Adversarially tested it for prompt injection, unsafe tool permissions and isolation failures, then hardened the design against what the testing found.",
      stack: ["LLM agents", "Guardrails", "Prompt injection", "Audit trails"],
    },
    {
      title: "Machine-Learning Intrusion Detection at Scale",
      context: "INSE 6220 · Concordia",
      body:
        "Trained network intrusion-detection models over 2.8 million real network flows from CICIDS2017, reaching 95 to 99 percent detection accuracy. Owned the full pipeline: cleaned and balanced a severely imbalanced dataset, engineered the flow features that mattered, applied PCA to cut dimensionality without losing detection power, then benchmarked Logistic Regression, k-NN and Decision Tree classifiers against each other.",
      stack: ["Python", "scikit-learn", "PyCaret", "PCA"],
    },
    {
      title: "Software Supply-Chain Security Evaluation",
      context: "INSE 6150 · Concordia",
      body:
        "Threat-modeled a cloud-native software supply chain end to end and mapped the adversary techniques against it to MITRE ATT&CK. Evaluated the defences meant to stop them — artifact signing with Sigstore, SLSA provenance, SBOMs and Kubernetes admission control — judging each on whether it could actually prove that what runs in production is what the build produced.",
      stack: ["MITRE ATT&CK", "Sigstore", "SLSA", "SBOMs", "Kubernetes"],
    },
    {
      title: "Securing Autonomous Surveillance Robots",
      context: "INSE 6800 · Concordia",
      body:
        "Designed the security for ground surveillance robots deployed at remote electrical substations, treating the robot itself as the asset an attacker would go after. Built the work around ROS 2 and SROS2: authenticated and encrypted communication between nodes, access control over what each node may do, and the physical-access assumptions that change the threat model at an unmanned site.",
      stack: ["ROS 2 / SROS2", "OT security", "Threat modeling"],
    },
  ];

  return (
    <div
      id="SecurityWorkSection"
      className="flex flex-col space-y-12 bg-AAprimary w-full
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-24 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl opacity-85">
            {" "}
            Security &amp; AI Engineering
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {work.map((item, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col justify-between space-y-4 rounded-md bg-AAtertiary p-6
              hover:-translate-y-2 duration-300"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-200 font-bold text-lg">{item.title}</span>
                  <span className="font-mono text-xs text-AAsecondary">{item.context}</span>
                </div>
                <p className="text-gray-400 sm:text-sm text-xs leading-relaxed">{item.body}</p>
              </div>
              <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 pt-2">
                {item.stack.map((tech, i) => {
                  return (
                    <span key={i} className="font-mono text-xs text-gray-500">
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
