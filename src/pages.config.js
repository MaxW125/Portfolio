/**
 * Page routing configuration for the portfolio site.
 * Update `mainPage` to choose which page loads at `/`.
 */
import Home from './pages/Home';


export const PAGES = {
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};