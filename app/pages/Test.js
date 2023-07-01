import { html } from "htm/preact";
import { Link } from "preact-router";

import { withStylesheet } from "../lib/stylesheets.js";

export default withStylesheet(import.meta.resolve("./Test.css"), Test);

function Test() {
  return html`
    <div class="app-Test">
      <h1>Test Page</h1>
      <ul>
        <li>
          <${Link} href="/">Home Page<//>
        </li>
      </ul>
    </div>
  `;
}
