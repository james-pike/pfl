import { component$, useSignal } from '@builder.io/qwik';
import { Button, Drawer, Link } from 'flowbite-qwik';
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
          <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our&nbsp;
            <Link href="#" underline>
              limited-time sale
            </Link>
            <br />
            for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
          </p>
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
