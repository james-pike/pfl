import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <div class="h-[85vh] w-full bg-gradient-to-r from-gray-200 via-blue-200 to-gray-300">
      <Hero />
    </div>
   <div class="pt-40 sm:pt-0"></div>
      <Features
  highlight="Our Services"
  title="What You Receive with Our Expertise"
  subtitle="Providing trusted legal guidance and support in family law matters to help you make informed decisions and protect your family's future."
  items={[
    {
      title: "Personalized Legal Strategy",
      description:
        "A customized approach that takes into account your unique circumstances, ensuring your interests are represented every step of the way.",
      icon: IconBrandTailwind,
    },
    {
      title: "Comprehensive Family Law Services",
      description:
        "Guidance and representation across all family law areas, including divorce, child custody, spousal support, property division, and more.",
      icon: IconApps,
    },
    {
      title: "Transparent Communication",
      description:
        "Clear, timely updates on your case status and an open line of communication, so you know where things stand and what to expect.",
    },
    {
      title: "Strong Courtroom Advocacy",
      description:
        "Skilled representation in court, with a focus on protecting your rights and achieving the best possible outcomes for you and your family.",
      icon: IconRocket,
    },
    {
      title: "Compassionate Guidance",
      description:
        "Providing a supportive environment to help you navigate emotionally challenging situations with empathy and understanding.",
      icon: IconBrandGoogle,
    },
    {
      title: "Commitment to Ethical Practice",
      description:
        "A dedication to maintaining the highest ethical standards, ensuring confidentiality, respect, and professionalism in all interactions.",
      icon: IconBulb,
    },
  ]}
/>

      <Steps />
      <FAQs
  title="Frequently Asked Questions"
  subtitle="Whether you're facing a divorce, custody dispute, or need advice on family law matters, we're here to help. Below are some common questions our clients ask."
  highlight="FAQs"
  items={[
    {
      title: "What should I bring to my first consultation?",
      description:
        "For your first meeting, it’s helpful to bring any relevant documents, such as financial statements, custody agreements, or court orders. We’ll go over your situation in detail and provide guidance on the next steps.",
    },
    {
      title: "How long does the divorce process take in Ontario?",
      description:
        "The length of the divorce process varies depending on whether the matter is contested or uncontested. Uncontested divorces typically take a few months, while contested matters can take significantly longer, especially if they involve disputes over custody or property.",
    },
    {
      title: "What are the steps to begin a custody or access case?",
      description:
        "If you’re seeking custody or access arrangements, we can assist you with filing the necessary applications and representing your interests in court or mediation. Each case is unique, so we’ll discuss the best approach based on your specific circumstances.",
    },
    {
      title: "How is child support determined in Ontario?",
      description:
        "Child support is typically calculated based on the paying parent's income and follows the federal Child Support Guidelines. Additional expenses, like daycare and education costs, may also be shared. We can help ensure that support calculations are fair and accurate.",
    },
    {
      title: "What can I do if I need to modify an existing court order?",
      description:
        "Life changes, and so can court orders. If you need to adjust an existing order—whether for custody, support, or access—we can guide you through the process of applying for a modification and help you present a strong case for your requested changes.",
    },
    {
      title: "What are the options for resolving disputes without going to court?",
      description:
        "There are several alternatives to court, such as mediation, collaborative law, and arbitration. These methods are often faster, less costly, and can be less stressful, especially in family law cases. We’ll help you explore the best options for your situation.",
    },
  ]}


      />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
