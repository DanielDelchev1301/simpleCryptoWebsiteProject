import { render, html } from '../node_modules/lit-html/lit-html.js';
const url = 'https://api.coingecko.com/api/v3/exchanges';

const exchangesTemplate = (data) => html`
${data.map(info => html`
<div class="card" style="width: 18rem;">
    <img src=${info.image} class="card-img-top" alt="..." style="width: 5rem;">
    <div class="card-body">
        <h5 class="card-title">${info.name}</h5>
        <a href=${info.url} id="link-for-website">Check website</a>
        <a href="/exchanges/${info.id}" class="btn btn-primary">Details</a>
    </div>
</div>
`)}
`;

const main = document.getElementById('main');

export function exchangesView() {
    getData();
}

function getData() {
    fetch(url)
        .then(response => { return response.json() })
        .then(data => {
            render(exchangesTemplate(data), main);
        });
}