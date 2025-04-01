// NavbarViewOrder component
export class NavBarViewOrder extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="hidden md:block w-48 ml-4 p-4">
        <nav class="text-sm text-[var(--clr-gray-400)] mb-4 mt-4">
        <a href="index.html" class="hover:underline">Home</a>
        <span class="mx-1"> &gt; </span>
        <span class="text-[var(--clr-secondary)] font-medium">Profile</span>
        </nav>

    <nav>
      <a href="/src/pages/profile.html"
        class="w-full text-left px-4 py-2 text-[var(--clr-gray-400)] hover:text-[var(--clr-secondary)] hover:bg-[var(--clr-gray)] rounded-md cursor-pointer block"
      >
        Profile
      </a>
      <a href="/src/pages/myOrder.html"
        class="w-full text-left px-4 py-2 text-[var(--clr-gray-400)] hover:text-[var(--clr-secondary)] hover:bg-[var(--clr-gray)] rounded-md cursor-pointer block"
      >
        Order details
      </a>
    </nav>
  </div>

  <div
    class="md:hidden border-b border-[var(--clr-gray)] p-4 flex items-center"
  >
    <a href="/src/pages/profile.html" class="text-[var(--clr-gray-400)] text-xl mr-4">←</a>
    <div
      class="flex-grow flex justify-around text-[var(--clr-gray-400)] text-lg font-medium relative"
    >
      <button
        class="pb-2 border-b-2 border-transparent focus:outline-none focus:text-[var(--clr-secondary)] focus:border-[var(--clr-accent)]"
      >
        Profile
      </button>
      <button
        class="pb-2 border-b-2 border-[var(--clr-accent)] text-[var(--clr-secondary)]"
      >
        My Order
      </button>
    </div>
  </div>
</header>
`;
  }
}
customElements.define("nav-view", NavBarViewOrder);
