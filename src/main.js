// create reusable component using JS

// Navbar component
class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header>
            <nav class="flex justify-between items-center px-8 py-4">
                <div class="text-gray-600 sm:hidden">
                    <span class="material-symbols-outlined">menu</span>
                </div>
                <div class="flex gap-2 items-center">
                    <img
                        src="/assets/logo-all_rice.svg"
                        alt="All rice logo"
                        class="w-6"
                    />
                    <p class="text-sm font-black">All Rice Co.</p>
                </div>
                <ul class="hidden sm:flex sm:gap-4 sm:font-bold">
                    <li><a href="#">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div class="flex gap-4 sm:w-12">
                    <div class="text-gray-600">
                        <span class="material-symbols-outlined"
                            >shopping_cart</span
                        >
                    </div>

                    <div class="text-gray-600 hidden sm:block">
                        <span class="material-symbols-outlined"
                            >account_circle</span
                        >
                    </div>
                </div>
            </nav>
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);