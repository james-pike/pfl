import { component$, useSignal } from '@builder.io/qwik';
import { Button, Drawer } from 'flowbite-qwik';
import { IconHomeOutline } from 'flowbite-qwik-icons';

export default component$(() => {
  // Signal to manage the state of the right drawer
  const isDrawerOpen = useSignal(false);

  return (
    <section class="p-2">
      <div>
        {/* Button to open the right drawer, styled like "Contact Us" button */}
        <Button
          class="btn btn-primary bg-blue-800 ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
          onClick$={() => (isDrawerOpen.value = true)}
        >
          Contact Us
        </Button>

        {/* Right Drawer */}
        <Drawer
          bind:open={isDrawerOpen}
          position="right"
          title="Drawer Right"
          titleIcon={IconHomeOutline}
        >
         
              <div class="col-span-1 mb-8 lg:mb-0">
                  <form action="#" class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2">
                      <div>
                          <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                          <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required/>
                      </div>
                      <div>
                          <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                          <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required/>
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                      </div>
                      <div>
                          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                          <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required/>
                      </div>
                      <div class="sm:col-span-2">
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                          <textarea id="message" rows={6} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                          <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                      </div>
                      <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                  </form>
              </div>

       
      
          {/* Button to close the drawer, styled like "Contact Us" button */}
          <Button
            class="btn btn-primary bg-blue-800 ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
            onClick$={() => (isDrawerOpen.value = false)}
          >
            Close Drawer
          </Button>
        </Drawer>
      </div>
    </section>
  );
});
