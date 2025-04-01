// Facebook button component
export class ButtonFacebook extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const extraClasses = this.getAttribute('class') || '';

        this.innerHTML = `<button class="btn-facebook ${extraClasses}"><img src="/assets/icon-facebook.svg" alt=""> Sign in with Facebook</button>`
    }
}
customElements.define('button-facebook', ButtonFacebook)