import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo.png?width=813&height=307&png";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={132}
      height={50}
      alt="Pike Family Law Logo"
      loading="lazy"
    />
    
  </span>
));
