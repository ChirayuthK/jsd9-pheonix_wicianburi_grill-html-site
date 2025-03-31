// Google button component
export class ButtonGoogle extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const extraClasses = this.getAttribute('class') || '';
        this.innerHTML = `<button class="btn-google ${extraClasses}"><img src="/assets/icon-google.svg" alt=""> Sign in with Google</button>`
    }
}
customElements.define('button-google', ButtonGoogle)