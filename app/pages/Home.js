import { html } from "htm/preact";
import { Link } from "preact-router";
import { useEffect } from "preact/hooks";

import { withStylesheet } from "../lib/stylesheets.js";

import Button from "../components/Button.js";

export default withStylesheet(import.meta.resolve("./Home.css"), Home);

function Home({ count, setCount }) {
  useEffect(() => {
    setCount((i) => i + 1);
  }, []);

  return html`
    <div class="app-Home">
      <h1>Home Page</h1>
      <p>Count: ${count}</p>
      <p><${Button} onClick=${resetCount}>Reset<//></p>
      <ul>
        <li>
          <${Link} href="/test">Test Page<//>
        </li>
      </ul>
    </div>
  `;

  function resetCount() {
    setCount(0);
  }
}
