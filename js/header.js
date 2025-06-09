const template = document.createElement("template");
template.innerHTML = `
    <header>
    <div class="title-bar">
        <h1>Sergei Grigorev</h1>
        <h3>Game Programmer</h3>
    </div>

    <nav>
        <a href="index.html">Home</a>
        <a href="pages/about.html">About</a>
        <a href="assets/CV.pdf" target="_blank">CV</a>
    </nav>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        const clone = template.content.cloneNode(true);
        this.appendChild(clone);
    }
}

window.customElements.define("header-component", Header);