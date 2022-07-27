import { render, html } from '../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
<img src="https://www.ikigailaw.com/wp-content/uploads/2021/03/3d-rendering-bitcoin-other-crypto-currencies-led-glow-dark-glossy-glass-board-with-blockchain-data-dots-lines-1200x565.jpg"
    id="img-crypto" alt="...">
<div id="simple-description">
    <h1>You are not prepared</h1>
    <p>Cryptocurrencies have the power to <strong>change</strong> our lives forever. They can help you take back
        <strong>control</strong> of your money
        and your information. Some people will ignore them and hope they go away. Others will join the party.
        <strong>Which will you be?</strong></p>
</div>
<div>

</div>
`;

const main = document.getElementById('main');

export function homeView() {
    render(homeTemplate(), main);
}