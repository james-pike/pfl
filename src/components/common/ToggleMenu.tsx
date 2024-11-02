import { component$, useStore, PropFunction } from "@builder.io/qwik";
import IconMenu from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
  onClick?: PropFunction<() => void>;
  isOpen: boolean; // Add isOpen here
}

export default component$(({ iconClass, onClick, isOpen }: ItemProps) => {
  const store = useStore({
    isExpanded: isOpen, // Initialize with the isOpen prop value
  });

  return (
    <button
      type="button"
      class={`ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition ${
        store.isExpanded ? "expanded" : ""
      }`}
      aria-label="Toggle Menu"
      onClick$={() => {
        store.isExpanded = !store.isExpanded;

        // Toggle other elements when menu is expanded
        document.body.classList.toggle("overflow-hidden");
        document.getElementById("header")?.classList.toggle("h-screen");
        document.querySelector("#header nav")?.classList.toggle("hidden");

        // Call the onClick prop if provided
        onClick && onClick();
      }}
    >
      <IconMenu class={iconClass} />
    </button>
  );
});
