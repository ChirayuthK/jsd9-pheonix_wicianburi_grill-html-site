// Navbar component
export class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="flex justify-between items-center px-4 py-4 sm:px-8">
                <div class="text-gray-600 sm:hidden">
                    <span class="material-symbols-outlined">menu</span>
                </div>
                <a href="/index.html" class="flex gap-2 items-center">
                    <img
                        src="/assets/logo-all_rice.svg"
                        alt="All rice logo"
                        class="w-6"
                    />
                    <p class="text-sm font-black">All Rice Co.</p>
                </a>
                <ul class="hidden sm:flex sm:gap-4 sm:font-bold">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/src/pages/aboutUs.html">About Us</a></li>
                    <li><a href="/src/pages/product-list.html">Product</a></li>
                    <li><a href="/src/pages/contactUs.html">Contact</a></li>
                </ul>
                <div class="flex gap-4">
                    <div class="text-gray-600">
                        <a href="/src/pages/cart.html" target="_self">
                            <span class="material-symbols-outlined block">shopping_cart</span>
                        </a>
                    </div>

                    <div class="text-gray-600 hidden sm:block">
                        <a href="/src/pages/login.html" target="_self">
                            <span class="material-symbols-outlined block">account_circle</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);