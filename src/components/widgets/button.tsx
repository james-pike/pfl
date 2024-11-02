import { component$, QRL, JSX } from "@builder.io/qwik";

interface ButtonProps {
  onClick$?: QRL<() => void>; // Correctly typed onClick$ prop
  children: JSX.Element | JSX.Element[]; // Accepts single or multiple children
}

export const Button = component$(({ onClick$, children }: ButtonProps) => {
  return (
    <button onClick$={onClick$} class="your-button-class">
      {children}
    </button>
  );
});
