// Secondary button component
export class ButtonSecondary extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const buttonText = this.textContent || 'Sign in';
        const extraClasses = this.getAttribute('class') || '';
        const href = this.getAttribute('href') || '#';
        const target = this.getAttribute('target') || '_self';
        this.innerHTML = `
            <a href="${href}"
                target="${target}"
                class="btn-secondary ${extraClasses}">
                ${buttonText}
            </a>
        `
    }
    static get observedAttributes() {
        return ['href', 'class', 'target'];
    }
}
customElements.define('button-secondary', ButtonSecondary)