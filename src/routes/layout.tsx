import { $, component$, Slot, useSignal } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

export default component$(() => {
  const isNavOpen = useSignal(false);

  const handleNav = $(() => {
    isNavOpen.value = !isNavOpen.value;
  });

  return (
    <>
      <Header isNavOpen={isNavOpen} onToggleNav={handleNav} />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
