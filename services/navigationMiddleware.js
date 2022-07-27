import { html, render } from '../node_modules/lit-html/lit-html.js';

const navigationTemplate = () => html`
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/exchanges">Exchanges</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/coins">Coins</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/companies">Companies</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        More
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/indexes">Indexes</a></li>
                        <li><a class="dropdown-item" href="/derivatives">Derivatives</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

const navElement = document.getElementById('navigation');

export function navigationMiddleware(ctx, next) {
    render(navigationTemplate(), navElement);
    next();
}