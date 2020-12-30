import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header is used to define headings, a page can have many headers, A header cannot be inside footer */}
      {/* block level element occupies all the space available */}
      <header className="App-header">

        <h1 id="headerId">This is a header tag</h1>
      </header>
      <header>
        <nav>
          {/* Inline element occupies the space or content */}
          <a href="#1">HTML</a>
          <a href="#2" target="_blank" class="link">React</a>
        </nav>
      </header>
      <main>
        Used for main content of the body
    {/* <article>
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
        </details> */}
        {/* ------------------Lists-------------------------*/}
        <ul>
          {/* li is  a block level element */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
        <dl>
          <dt>Coffee</dt>
          <dd>- black hot drink</dd>
          <dt>Milk</dt>
          <dd>- white cold drink</dd>
        </dl>
        {/* -------------Tables---------------------- */}
        <table style={{ float: 'right' }}>
          <tr>
            <th>Name</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>Sai</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Pavan</td>
            <td>$80</td>
          </tr>
        </table>
        <table className='center'>
          <caption>Monthly savings</caption>
          <tr>
            <th>Name</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>Sai</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Pavan</td>
            <td>$80</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th colspan="2">Phone</th>
            <th>Test for rowspan</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>123-45-678</td>
            <td>212-00-546</td>
            <td rowspan="2">123456</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>123-45-678</td>
            <td>212-00-546</td>
          </tr>
        </table>
        {/* -------------------------Attributes-------------------------------- */}
        <a href="#1" target="_blank">link</a>
        <img src="#1" alt='test' height="40" width="24"></img>
        <p>Attributes</p>
        <p title="I am a tooltip">Tooltip</p>
        <div className="classSelector" title="attributeTitle">
          <p>Class selector</p>
        </div>
        <div class="first_test">
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
          <p>The test element</p>
        </div>


        <form name="input" action="" method="get">
          Firstname:<input type="text" name="Name" value="Peter" size="20" />
            Lastname:<input type="text" name="Name" value="Griffin" size="20" />
          <input type="button" value="Example Button" />
        </form>

        <ul>
          <li><a href="#1">HTML</a></li>
          <li><a href="#2" target="_blank" class="link">Making li to inline</a></li>
        </ul>
        <span className="blockElement">making span to block</span>

        <div class="dropdown">
          <span>Dropdown</span>
          <div class="dropdown-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </div>

        <div className="fixedDiv">
          <p>This is fixed div</p>
        </div>

        <p className="ellipsisFont">This is the text that we want to add elipisis for</p>
      </main>

      {/* <footer>
        This is a footer tag
      </footer> */}

      <div class="flex-container">
        <div class="item-1">div</div>
        <div class="item-2">w=250px</div>
        <div class="item-3">h=250px</div>
        <div class="item-4">w/h=300px</div>
        <div class="item-5">w=350px</div>
        <div class="item-6">w=350px</div>
      </div>
    </div>
  );
}

export default App;
