import { component$ } from "@builder.io/qwik";
import IconMenu from "~/components/icons/IconMenu";

interface ToggleMenuProps {
  onClick$: () => void; // Ensure this is a QRL
  isOpen: boolean;
}

export default component$(({ onClick$, isOpen }: ToggleMenuProps) => {
  return (
    <button
      type="button"
      class={`ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition ${
        isOpen ? "expanded" : ""
      }`}
      aria-label="Toggle Menu"
      onClick$={onClick$} // This needs to be serialized
    >
      <IconMenu class="w-6 h-6" />
    </button>
  );
});
