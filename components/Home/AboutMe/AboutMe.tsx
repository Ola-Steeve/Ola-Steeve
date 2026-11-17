import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["AWS", "Microsoft Azure", "Entra ID / PIM", "Terraform", "Kubernetes", "Python"],
    ["QRadar / Sentinel", "Defender XDR", "Safeguard PAM", "Forescout NAC", "Checkpoint / Algosec", "Forcepoint DLP"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hey there! I&apos;m Olaoluwa Stephen, a <span className="text-AAsecondary">security</span> and{" "}
                <span className="text-AAsecondary">cloud infrastructure</span> engineer. I focus on securing cloud
                and enterprise environments &mdash; <span className="text-AAsecondary">identity governance</span>,{" "}
                <span className="text-AAsecondary">SIEM operations</span>,{" "}
                <span className="text-AAsecondary">incident response</span>, and the{" "}
                <span className="text-AAsecondary">automation</span> that ties it all together. In short, I reduce
                risk and strip out the manual, error-prone work that slows security teams down.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                At <span className="text-AAsecondary">Zenith Bank</span> I led the firewall remediation that
                cleared a long-standing <span className="text-AAsecondary">PCI DSS</span> audit finding, built{" "}
                <span className="text-AAsecondary">privileged access</span> across hundreds of servers on{" "}
                <span className="text-AAsecondary">Safeguard PAM</span> and{" "}
                <span className="text-AAsecondary">OneIdentity</span>, and ran detection and incident response on{" "}
                <span className="text-AAsecondary">QRadar</span> alongside{" "}
                <span className="text-AAsecondary">Sentinel</span> and{" "}
                <span className="text-AAsecondary">Defender</span>. Underneath the security work sits the build
                side &mdash; <span className="text-AAsecondary">AWS</span> and{" "}
                <span className="text-AAsecondary">Azure</span>,{" "}
                <span className="text-AAsecondary">Terraform</span> and{" "}
                <span className="text-AAsecondary">CloudFormation</span>,{" "}
                <span className="text-AAsecondary">Kubernetes</span>, and{" "}
                <span className="text-AAsecondary">CI/CD</span> pipelines with policy checks wired in. I am
                finishing an <span className="text-AAsecondary">M.Eng</span> at Concordia, where my project work
                has moved toward <span className="text-AAsecondary">AI</span>: multi-agent systems that triage
                security alerts under <span className="text-AAsecondary">guardrails</span>,{" "}
                <span className="text-AAsecondary">machine-learning intrusion detection</span>, and{" "}
                <span className="text-AAsecondary">software supply-chain security</span>. Let&apos;s build
                something resilient.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/me.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/me.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
