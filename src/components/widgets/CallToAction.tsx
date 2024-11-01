import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none">
            <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              <span class="text-[#039de1]">Qwik</span> +{" "}
              <br class="block sm:hidden" />
              <span class="text-[#039de1] sm:whitespace-nowrap">
                Tailwind CSS
              </span>
            </h2>
            <p class="text-xl text-gray-600 dark:text-slate-400">
              Be very surprised by these huge fake numbers you are seeing on
              this page. <br class="hidden md:inline" />
              Don't waste more time!
            </p>





            <div class="col-span-2">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white">Still need help?</h2>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email address <span class="text-xs text-gray-500">(So we can reply to you)</span></label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label for="topic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Topic</label>
                        <select id="topic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select a topic</option>
                            <option value="US">Switch plans and add-ons</option>
                            <option value="CA">Billing & Invoice</option>
                            <option value="FR">I can't log in to Flowbite</option>
                            <option value="DE">Parental controls</option>
                        </select>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows={6} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        <div class="flex mt-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-checkbox" class="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">By submitting this form, you confirm that you have read and agree to our <a class="font-normal text-gray-900 underline hover:no-underline dark:text-white" href="#">Terms of Service</a> and <a class="font-normal text-gray-900 underline hover:no-underline dark:text-white" href="#">Privacy Statement</a>.</label>
                        </div>
                    </div>
                    {/* <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
                </form>
            </div>
        
    

            <div class="mt-6">
              <a
                class="btn btn-primary mb-4 sm:mb-0 w-full sm:w-auto"
                href="https://github.com/onwidget/qwind"
                target="_blank"
                rel="noopener"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
