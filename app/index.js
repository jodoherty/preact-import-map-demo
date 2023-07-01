import { render } from "preact";
import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { Suspense, lazy } from "preact/compat";
import { Router } from "preact-router";

import Home from "./pages/Home.js";

const Test = lazy(() => import("./pages/Test.js"));

export default function App() {
  const [count, setCount] = useState(0);
  return html`
    <div>
      <${Suspense} fallback=${html`<div>Loading...</div>`}>
        <${Router}>
          <${Home} count=${count} setCount=${setCount} path="/" />
          <${Test} path="/test" />
        <//>
      <//>
    </div>
  `;
}

render(html`<${App} />`, document.body);