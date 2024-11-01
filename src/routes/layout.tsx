import { $, component$, Slot, useSignal } from "@builder.io/qwik";
import Logo from "~/components/common/Logo";
import Header from "~/components/widgets/Header";

// import Footer from "~/components/widgets/Footer";
// import Header from "~/components/widgets/Header";

export default component$(() => {

  const isNavOpen = useSignal(false);



  const handleNav = $(() => {
    isNavOpen.value = !isNavOpen.value;
  });


  return (
    <>
    <Header/>
     
      <div class='relative'>
        <div
          id='lightbox'
          aria-label='lightbox'
          tab-index='0'
          role='button'
          class={`z-10 top-0 left-0 w-screen  h-screen bg-black opacity-80 ${
            isNavOpen.value ? 'fixed' : 'hidden'
          } lg:hidden`}
          onClick$={handleNav}
        ></div>

        <div class='max-w-8xl pt-[72px] mx-auto px-4 sm:px-6 md:px-8'>
          <div
            id='sidebar'
            class={`lg:block fixed inset-0 top-[73px] transition-all duration-300 right-auto w-[14.5rem] py-4 px-6 overflow-y-auto border-r border-brand-outline bg-brand-background lg:left-[max(0px,calc(50%-45rem))] z-20 ${
              isNavOpen.value ? 'left-[max(0px,calc(50%-45rem))]' : '-left-[300px]'
            }`}
          >
            <div class='relative'>
              <ul class='flex flex-col gap-2 m-0 p-0 pt-4 list-none'>
                <li class='m-0 p-0'>
              
                </li>
    
              </ul>
              <hr class='border border-brand-outline my-8' />
              <ul class='flex flex-col gap-2 m-0 p-0 list-none'>
               
              </ul>
            </div>
          </div>
          <main class='lg:pl-[12.5rem]'>
            <section
              class={`mx-auto px-0 pt-6 lg:px-16 lg:pt-10 max-w-none xl:ml-0`}
            >
              <article class='max-w-none min-h-[calc(100vh-19rem)]'>
                <Slot />
              </article>
              <footer class='relative mt-24 py-8 bg-brand-background z-20'>
                <div class='flex gap-8 text-xs text-brand-secondary/80'>
                  <a href='/web-accessability/' class='font-inherit text-inherit'>
                    Accessability Statement
                  </a>
                </div>
              </footer>
            </section>
          </main>
        </div>
      </div>
    </>
  );
});
