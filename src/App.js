import './App.css';
import Card from './components/card';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.color || 'yellow'}
  ${props => props.vertical && "flex-direction: column;"} // just for test
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Input = styled.input.attrs({
  type:"text",
})`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const theme = {
  color: 'green',
}

const Navbar = styled.nav`
border-bottom: 1px solid #eee;
`;

const Logo = styled.div`
background-image: url('https://example.com/logo.png');
`;

const NavItems = styled.ul`
list-style: none;
`;

const NavItem = styled.li`
color: blue;
`;

const invertedTheme = ({color}) => ({
   color: color,
});

function App() {
  return (
    <div className="App">
      {/* Header is used to define headings, a page can have many headers, A header cannot be inside footer */}
      {/* block level element occupies all the space available */}
      {/* <header className="App-header">

        <h1 id="headerId">This is a header tag</h1>
      </header>
      <header>
        <nav> */}
          {/* Inline element occupies the space or content */}
          {/* <a href="#1">HTML</a>
          <a href="#2" target="_blank" class="link">React</a>
        </nav>
      </header>
      <main>
        Used for main content of the body */}
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
        {/* <ul> */}
          {/* li is  a block level element */}
          {/* <li>1</li>
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
        </dl> */}
        {/* -------------Tables---------------------- */}
        {/* <table style={{ float: 'right' }}>
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
        </table> */}
        {/* -------------------------Attributes-------------------------------- */}
        {/* <a href="#1" target="_blank">link</a>
        <img src="#1" alt='test' height="40" width="24"></img>
        <p>Attributes</p>
        <p title="I am a tooltip">Tooltip</p>
        <div className="classSelector" title="attributeTitle">
          <p>Class selector</p>
        </div> */}
        {/* <div class="first_test">
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
        </div> */}


        {/* <form name="input" action="" method="get">
          Firstname:<input type="text" name="Name" value="Peter" size="20" />
            Lastname:<input type="text" name="Name" value="Griffin" size="20" />
          <input type="button" value="Example Button" />
        </form> */}

        {/* <ul>
          <li><a href="#1">HTML</a></li>
          <li><a href="#2" target="_blank" class="link">Making li to inline</a></li>
        </ul> */}
        {/* <span className="blockElement">making span to block</span> */}

        {/* <div class="dropdown">
          <span>Dropdown</span>
          <div class="dropdown-content">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </div>

        <div className="fixedDiv">
          <p>This is fixed div</p>
        </div> */}

        {/* <p className="ellipsisFont">This is the text that we want to add elipisis for</p> */}
      {/* </main> */}

      {/* <footer>
        This is a footer tag
      </footer> */}

      {/* <div class="flex-container">
        <div class="item-1">div</div>
        <div class="item-2">w=250px</div>
        <div class="item-3">h=250px</div>
        <div class="item-4">w/h=300px</div>
        <div class="item-5">w=350px</div>
        <div class="item-6">w=350px</div>
      </div> */}
      {/* <div class="menu-container">
          <h4 className="menu-title">Over Oceanz</h4>
          <ul>
          {['Materialen','Technieken', 'Kwalitiet','Nieuws', 'Cases', 'Blogs', 'Team', 'Contact'].map(value => (
          <li key={value} className="menu-item">
            {value}
            <span className="menuitem-icon">{'>'}</span>
          </li>))}
          </ul>
          
      </div> */}
      {/* <div className="cards-container">{[1,2,3,4,5,6].map(value =>  (<Card key={value} />))}</div> */}
      {/* <ThemeProvider theme={theme}>
      <Wrapper>
        <Title >
          Hello World!
        </Title>
      </Wrapper>
      <Button>Normal Button</Button>
    <Button as="a" href="/">Link with Button styles</Button>
    <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
    <Input defaultValue="@probablyup" />
    <Input defaultValue="@geelen" inputColor="rebeccapurple" />
      <div className="test-div">Test div</div>
      <ThemeProvider theme={invertedTheme}>
       <Title>
          Hello World!
        </Title>
      </ThemeProvider>
      
    </ThemeProvider> */}


    {/* <Navbar>
      <Logo />
      <NavItems>
        <NavItem>Link 1</NavItem>
        <NavItem>Link 2</NavItem>
        <NavItem>Link 3</NavItem>
      </NavItems>
    </Navbar> */}

    <Header />
    <Banner />
    <div className="cards-container">{[1,2,3,4,5,6].map(value =>  (<Card key={value} />))}</div>
    <Footer />
    </div>
    
  );
}

export default App;
