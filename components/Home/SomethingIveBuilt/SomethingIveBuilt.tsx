import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Worked on
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">

              <a href="https://nene.ng/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/nene.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/nene.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://github.com/NeneApp/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Nene E-Commerce
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  I had the opportunity of leading the DevOps team in establishing a robust
                  <a href="#" target="blank"><span className="text-AAsecondary"> CI/CD </span></a> 
                  pipeline for automated testing and deployment,monitoring, logging
                   and security measures,I also setup environments, created and managed infrastructure with tools like
                   <span className="text-AAsecondary"> Docker</span>,
                   <span className="text-AAsecondary"> Terraform</span>, and
                   <span className="text-AAsecondary"> Kubernetes</span>,
                    ensured scalability  of the infrastructure, put measures for disaster recovery into place
                   and also a proper documentation of my implementations.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">AWS</span>
                <span className="pr-4 z-10">GitHub Actions</span>
                <span className="pr-4 z-10">Terraform</span>
                <span className="pr-4 z-10">Nginx</span>
                <span className="pr-4 z-10">ArgoCD</span>
              </ul>

              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/NeneApp/" />
                <a href="https://nene.ng" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Right image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https:qrateart.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/qrate1.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* Left Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/qrate1.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://qrateart.com" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    QRate Art
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I had the privilege of contributing to the development of<span className="text-AAsecondary"> Qrate</span>,
                  an innovative app designed to connect art enthusiasts with timeless masterpieces and the talented artists behind them.
                  During the development, i had the opportunity of working with<span className="text-AAsecondary"> Configuration Management </span> 
                  tool like<span className="text-AAsecondary"> Ansible</span>, and also making use of 
                  <span className="text-AAsecondary"> Azure </span> services like
                  <span className="text-AAsecondary"> Azure Virtual Machines</span>,
                  <span className="text-AAsecondary"> Azure app service</span>, and
                  <span className="text-AAsecondary"> Azure Cosmos DB </span> for NoSQL database.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
                text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">AZURE Services</span>
                <span className="pr-4 z-10">Ansible</span>
                <span className="pr-4 z-10">GitHub Actions</span>
                <span className="pr-4 z-10">Nginx</span>

              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/TechInnovationsandSolutions" />
                <a href="https://qrateart.com" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://certgo.app"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img src={"/certgo.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/certgo.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"https://certgo.app"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    CertGo
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project aim to help you in the creation of digital certificates either in bulk or one at a time. 
                  Some of the main tools used for the infrastructure of this project includes
                  <span className="text-AAsecondary"> Terraform</span>{" "} for IAC,
                  <span className="text-AAsecondary"> Data Dog</span>{" "} for logging and monitoring infrastructure and applications.
                  and <span className="text-AAsecondary"> Docker</span> for containerization.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">AWS</span>
                <span className="pr-4 z-10">CircleCI</span>
                <span className="pr-4 z-10">Jenkins</span>
                <span className="pr-4 z-10">Nginx</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="#" />
                <ExternalLink url={"https://certgo.app"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"https://devask-mallet.netlify.app/"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/devask.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/devask.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"https://devask-mallet.netlify.app/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    DevAsk
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                This is a platform where users can seek answers to their questions from fellow 
                developers, fostering skill growth and knowledge enhancement for aspiring software engineers.
                In the development of this project, tools mostly used were 
                  <span className="text-AAsecondary"> AWS </span>services like
                  <span className="text-AAsecondary"> AWS CloudFormation</span>{" "}for IAC,
                  <span className="text-AAsecondary"> Elastic Container Registry</span>,{" "} together with
                  <span className="text-AAsecondary"> Docker</span> for containerisation and also 
                  <span className="text-AAsecondary"> EC2</span> for virtual servers.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Cloud Formation</span>
                <span className="pr-4 z-10">ECR</span>
                <span className="pr-4 z-10">Lambda</span>
                <span className="pr-4 z-10">EC2</span>
                <span className="pr-4 z-10">API GATEWAY</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/workshopapps/twitterdevanswers.web" />
                <ExternalLink url={"https://devask-mallet.netlify.app/"} router={router} />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* CERTIFICATIONS  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 3.1</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Certifications
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>
      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        

        {/* CERT 1 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">

              <a href="https://www.credly.com/badges/be4afb53-1a1d-4aef-aac8-c1ff04875e47/public_url" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/aws.png"} alt={"Project Screen shot"} className={`w-3/4 rounded aspect-w-16 aspect-h-9`} />

            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/aws.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
                
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                Individuals who hold this certification possess an in-depth grasp of <a href="https://aws.amazon.com/what-is-aws/?nc1=f_cc" target="blank">
                <span className="text-AAsecondary">AWS</span></a> services
                and technologies. They have showcased their proficiency in constructing secure and
                resilient solutions, aligning with architectural design principles tailored to 
                specific customer needs.They exhibit the capability to strategically
                devise distributed systems that are well-architected, scalable, resilient, efficient,
                and capable of withstanding faults.
                </p>
              </div>

              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://www.credly.com/badges/be4afb53-1a1d-4aef-aac8-c1ff04875e47/public_url"
                 target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* // ? CERT 2 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Right image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://drive.google.com/file/d/1sMSALqmT-bqJ4j0K52yomF932UKfwdVn/view?usp=sharing"} 
              target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/hng.png"} alt={"Project Screen shot"} className={`w- rounded aspect-w-16 aspect-h-9`} />
            </div>
          </div>

          {/* Left Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/hng.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I participated in an online 4 month long internship in which only the top one percent out of 11000
                  applicants become finalists.
                </p>
              </div>
              
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://drive.google.com/file/d/1sMSALqmT-bqJ4j0K52yomF932UKfwdVn/view?usp=sharing"  
                target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* // ? Get In Touch */}
        <div data-aos="fade-up" className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary">
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Checkout my GitHub </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        For some of my other projects and infrastructures i&apos;ve that ive had the opportunity to work on,
        you can find them on my github.
      </p>
      <div className="pt-4">
        <a href="" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAprimary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            <GithubIcon link="https://github.com/Ola-Steeve" />
          </button>
        </a>
      </div>
        </div>
    </div>
    
  );
}

