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
   <div class="pt-20 sm:pt-0"></div>
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
        subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        highlight="FAQs"
        items={[
          {
            title: "What do I need to start?",
            description:
              "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
          },
          {
            title: "How to install the Qwik + Tailwind CSS template?",
            description:
              "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
          },
          {
            title: "What's something that you don't understand?",
            description:
              "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
          },
          {
            title: "What's an example of when you changed your mind?",
            description:
              "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
          },
          {
            title: "What is something that you would like to try again?",
            description:
              "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
          },
          {
            title: "If you could only ask one question to each person you meet, what would that question be?",
            description:
              "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
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
