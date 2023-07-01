import { html } from "htm/preact";
import { withStylesheet } from "../lib/stylesheets.js";

export default withStylesheet(import.meta.resolve("./Button.css"), Button);

function Button({ children, onClick }) {
  return html`
    <button class="app-Button" onClick=${onClick}>${children}</button>
  `;
}
