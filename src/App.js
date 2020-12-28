import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header is used to define headings, a page can have many headers, A header cannot be inside footer */}
      <header className="App-header">
        <h1>This is a header tag</h1>
      </header>
      <header>
        <nav>
          <a href="#1">HTML</a>
          <a href="#2">React</a>
        </nav>
      </header>
      <main>
        Used for main content of the body
    <article>
          Used for independent cintent
      </article>
      <section>
        <h1>Section title</h1>
        <p>Section content here........</p>
      </section>
        <aside>
          Used for content to be on the sides
      </aside>
        <details>
          <summary>Click here to collapse</summary>
          <p>Collapsible content</p>
        </details>
      </main>

      <footer>
        This is a footer tag
      </footer>
    </div>
  );
}

export default App;
