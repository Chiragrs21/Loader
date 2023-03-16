import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="body">
    <main>
      <div class="preloader">
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
      </div>
      <div class="status">
        Loading<span class="status__dot">.</span>
        <span class="status__dot">.</span>
        <span class="status__dot">.</span>
      </div>
    </main>
    </div>
  );
}

export default App;
