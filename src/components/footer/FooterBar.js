// Footer component
export class FooterBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer class="text-center p-4 h-[100dvh] sm:h-1/4 sm:p-8 sm:text-left">
            <div
                id="footer-links"
                class="flex flex-col sm:flex-row sm:justify-center sm:gap-4 sm:max-w-5xl sm:mx-auto"
            >
                <div
                    id="important-links"
                    class="flex flex-col gap-4 items-center mb-12 sm:grow sm:min-w-auto sm:items-baseline"
                >
                    <h5 class="footer-header sm:text-lg">Important Links</h5>
                    <hr class="border-2 w-12 border-[#B2ABAB]" />
                    <ul class="flex flex-col gap-2 mt-4 w-3/4 sm:w-full">
                        <li class="footer-li sm:text-sm">
                            <a href="/src/pages/policy.html#privacy-policy">Privacy Policy</a>
                        </li>
                        <hr />
                        <li class="footer-li sm:text-sm">
                            <a href="/src/pages/policy.html#refund-policy">Refund and Cancellation Policy</a>
                        </li>
                        <hr />
                        <li class="footer-li sm:text-sm">
                            <a href="/src/pages/policy.html#return-policy">Return Policy</a>
                        </li>
                        <hr />
                        <li class="footer-li sm:text-sm">
                            <a href="/src/pages/policy.html#shipping-payment-policy">Shipping and Payment Policy</a>
                        </li>
                    </ul>
                </div>
                <div
                    id="relevant-links"
                    class="flex flex-col gap-4 items-center mb-12 sm:grow sm:min-w-auto sm:items-baseline"
                >
                    <h5 class="footer-header sm:text-lg">Relevant links</h5>
                    <hr class="border-2 w-12 border-[#B2ABAB]" />
                    <ul class="flex flex-col gap-2 mt-4 w-3/4 sm:w-full">
                        <li class="footer-li sm:text-sm">
                            <a href="/src/pages/aboutUs.html">About Us</a>
                        </li>
                        <hr />
                        <li class="footer-li sm:text-sm">
                            <a href="/src/pages/contactUs.html">Contact Us</a>
                        </li>
                        <hr />
                        <li class="footer-li sm:text-sm">
                            <a href="#">Terms and Conditions</a>
                        </li>
                        <hr />
                        <li class="footer-li sm:text-sm">
                            <a href="#">Wholesale / Bulk Buy</a>
                        </li>
                    </ul>
                </div>
                <div
                    id="follow-us"
                    class="flex flex-col gap-4 items-center mb-12 sm:grow sm:min-w-auto sm:items-baseline"
                >
                    <h5 class="footer-header sm:text-lg">Follow Us</h5>
                    <hr class="border-2 w-12 border-[#B2ABAB]" />
                    <ul
                        class="flex justify-center gap-4 mt-2 w-full sm:justify-start"
                    >
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-xl fa-line"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-xl fa-facebook"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-xl fa-tiktok"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-xl fa-instagram"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-xl fa-youtube"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-xl fa-linkedin"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="footer-last">
                <div id="footer-payment">
                    <p
                        class="text-sm flex gap-2 justify-center items-center mb-8 sm:mb-2"
                    >
                        <span>Made in Thailand</span
                        ><i class="fa-brands fa-lg fa-cc-visa"></i
                        ><i class="fa-brands fa-lg fa-cc-mastercard"></i>
                        <i class="fa-regular fa-lg fa-money-bill-1"></i>
                    </p>
                </div>
                <p class="text-sm text-center">
                    Copyright 2025&nbsp;&copy;&nbsp;www.allrice.com
                </p>
            </div>
        </footer>
        `
    }
}
customElements.define('footer-bar', FooterBar)