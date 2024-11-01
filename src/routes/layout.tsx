import { $, component$, Slot, useSignal } from "@builder.io/qwik";
import Logo from "~/components/common/Logo";

// import Footer from "~/components/widgets/Footer";
// import Header from "~/components/widgets/Header";

export default component$(() => {

  const isNavOpen = useSignal(false);



  const handleNav = $(() => {
    isNavOpen.value = !isNavOpen.value;
  });


  return (
    <>
     <header class='fixed top-0 w-full height-[72px] backdrop-blur border-b border-b-brand-outline flex-none bg-brand-background lg:bg-transparent z-30'>
        <div class='max-w-8xl mx-auto'>
          <div class='py-4 mx-4 lg:px-8 lg:mx-0'>
            <div class='relative flex items-center gap-8'>
              <a class='flex items-center' href='/' aria-current='page'>
                <span class='sr-only'>Paul Scanlon's Site</span>
                <Logo />
              </a>
              <div class='relative flex lg:hidden items-center ml-auto'>
                <button
                  id='menu'
                  class='not-prose ml-auto flex items-center justify-center text-brand-text'
                  onClick$={handleNav}
                >
                  <span class='sr-only'>Navigation</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      id='menuPath'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d={isNavOpen.value ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
     
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
              isNavOpen.value ? 'left-[max(0px,calc(50%-45rem))]' : '-left-[240px]'
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
