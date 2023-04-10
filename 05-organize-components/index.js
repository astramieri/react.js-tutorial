
function Introduction() {
  return <h1>It follows an ordered list:</h1>;
}

function OrderedList() {
  return (
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
  );
}

function Footer() {
  return (
    <footer className="footer-el">
      <small>© 2023 Clow Brigade. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Introduction />
      <OrderedList />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
