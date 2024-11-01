import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import heroImage from "~/assets/images/mp.jpg";

export default component$(() => {
  return (
    <section class="relative not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-6xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              <span>Experienced</span>
              <br />
              <span class="text-sky-500">Family Lawyer</span>
              <br />
              <span>in Toronto</span>
            </h1>
            <div class="max-w-3xl mx-auto pt-5 lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Comprehensive Legal Support
                </span>{" "}
                from a highly experienced family lawyer in Toronto, specializing in Divorce, Child Custody, Spousal Support,
                Property Division, Adoption, Mediation and more.
              </p>
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                Schedule a <em>Free Consultation</em> today to discuss how we can support your legal needs and help you
                navigate the complexities of family law.
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://yourlawsite.com/free-consultation"
                    target="_blank"
                    rel="noopener"
                  >
                    Book A Free Consultation
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={heroImage}
              layout="constrained"
              width={500}
              height={500}
              alt="Experienced Family Lawyer in Toronto"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
