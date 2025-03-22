// ADD button component
export class ButtonADD extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const extraClasses = this.getAttribute('class') || '';
        this.innerHTML = `<button class="btn-add ${extraClasses}">+ ADD</button>`
    }
}
customElements.define('button-add', ButtonADD)