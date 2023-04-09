function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="60px" />
      </nav>
    </header>
  );
}

function Introduction() {
  return <h1>It follows an ordered list:</h1>;
}

function OrderedList() {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2023 Clow Brigade. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Introduction />
      <OrderedList />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
