import FashionList from "./components/FashionList/FashionList";

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fashion-Items-Project</h1>
        <p>Team: Rajveer Kaur, Jaskomal Kaur, Rishi Kumar</p>
      </header>
      <main>
        <FashionList />
      </main>
      <footer>
        <p>Team Members: Rajveer Kaur, Jaskomal Kaur, Rishi Kumar</p>
      </footer>
    </div>
  );
}

export default App;
