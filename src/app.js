import page from '../node_modules/page/page.mjs';
import { navigationMiddleware } from '../services/navigationMiddleware.js';
import { exchangeDetrailsView } from '../views/exchangeDetrailsView.js';
import { exchangesView } from '../views/exchangesView.js';
import { homeView } from '../views/homeView.js';

page(navigationMiddleware);

page('/', homeView);
page('/exchanges', exchangesView);
page('/exchanges/:exchangeId', exchangeDetrailsView);
//page('/coins', coinsView);
//page('/companies', companiesView);
//page('/indexes', indexesView);
//page('/derivatives', derivativesView);

page.start();