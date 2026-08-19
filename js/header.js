class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<header>
    <div class="title-bar">
        <h1>Sergei Grigorev</h1>
        <h3>Gameplay Programmer</h3>
    </div>

    <nav>
        <a href="/index.html">Home</a>
<!--        <a href="/pages/about.html">About</a>-->
        <a href="/assets/Sergei_Grigorev_CV.pdf" target="_blank">Resume</a>
    </nav>
</header>
    `;
    }
}

window.customElements.define("header-component", Header);