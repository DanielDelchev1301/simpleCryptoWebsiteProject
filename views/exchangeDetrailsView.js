const url = 'https://api.coingecko.com/api/v3/exchanges';
const main = document.getElementById('main');

import { html, render } from '../node_modules/lit-html/lit-html.js';

const detailsTemplate = (exchange) => html`
<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src=${exchange.image} class="img-fluid rounded-start" alt=${exchange.name}>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${exchange.name}</h5>
                <p class="card-text">${exchange.year}</p>
                <p class="card-text"><small class="text-muted">Year of establishment
                        ${exchange.year_established}</small></p>
            </div>
        </div>
    </div>
</div>
<ul>
    <li>
        <h5>Country</h5>
        <p>${exchange.country}</p>
    </li>
    <li>
        <h5>Trade volume of BTC last 24 hours</h5>
        <p>${exchange.trade_volume_24h_btc}</p>
    </li>
    <li>
        <h5>Last converted ETH</h5>
        <p>${exchange.tickers[1].converted_last.eth}</p>
    </li>
    <li>
        <h5>Last converted BTC</h5>
        <p>${exchange.tickers[1].converted_last.btc}</p>
    </li>
</ul>
`;

export function exchangeDetrailsView(ctx) {
    getExchange(ctx.params.exchangeId)
        .then(exchange => {
            render(detailsTemplate(exchange), main);
        });
}

const getExchange = (exchangeId) => fetch(`${url}/${exchangeId}`).then(res => res.json());
