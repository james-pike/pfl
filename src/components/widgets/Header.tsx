import { component$, useStore, PropFunction, Signal } from "@builder.io/qwik";

import Logo from "~/components/common/Logo";
import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";

interface HeaderProps {
  isNavOpen: Signal<boolean>;
  onToggleNav: PropFunction<() => void>;
}

export default component$(({ isNavOpen, onToggleNav }: HeaderProps) => {
  const store = useStore({
    isScrolling: false,
  });

  return (
    <>
      <header
        id="header"
        class={`sticky top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out ${
          store.isScrolling
            ? " md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900"
            : ""
        }`}
        window:onScroll$={() => {
          if (!store.isScrolling && window.scrollY >= 10) {
            store.isScrolling = true;
          } else if (store.isScrolling && window.scrollY < 10) {
            store.isScrolling = false;
          }
        }}
      >
        <div class="absolute inset-0"></div>
        <div class="relative text-default py-2 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
          <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
            <a class="flex items-center" href={"/"}>
              <Logo />
            </a>
            <div class="flex items-center md:hidden">
              <ToggleMenu onClick={onToggleNav} isOpen={isNavOpen.value} />
            </div>
          </div>
          <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
            <div class="items-center flex justify-between w-full md:w-auto">
              <div class="flex">
                <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
              </div>
              <span class="ml-4 rtl:ml-0 rtl:mr-4">
                <a
                  href="https://github.com/onwidget/qwind"
                  class="btn btn-primary bg-blue-800 ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
                >
                  Contact Us
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar component */}
      <div
        id="sidebar"
        class={`lg:block fixed inset-0 top-[73px] transition-all duration-300 right-auto w-[14.5rem] py-4 px-6 overflow-y-auto border-r border-brand-outline bg-brand-background lg:left-[max(0px,calc(50%-45rem))] z-20 ${
          isNavOpen.value ? 'left-[max(0px,calc(50%-45rem))]' : '-left-[240px]'
        }`}
      >
        <div class="relative">
          <ul class="flex flex-col gap-2 m-0 p-0 pt-4 list-none">
            <li class="m-0 p-0">
              {/* Sidebar items go here */}
            </li>
          </ul>
          <hr class="border border-brand-outline my-8" />
          <ul class="flex flex-col gap-2 m-0 p-0 list-none">
            {/* Additional sidebar items go here */}
          </ul>
        </div>
      </div>
    </>
  );
});
