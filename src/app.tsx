import { TodoApp } from "./todoApp.tsx";

export default function App() {
  console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main>
          <h1>
            <span></span>__<span></span>
          </h1>
          <TodoApp />
        </main>
      </body>
    </html>
  );
}
