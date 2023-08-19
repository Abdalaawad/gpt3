import "./App.css";
import { Article, Brand, Navbar, Feature, Header, Cta } from "./component";
import Features from "./component/features/Features";
import Whatgpt from "./component/whatgpt/Whatgpt";
import Blog from "./component/blog/Blog";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="nav-header-greadiant">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Feature />
      <Whatgpt />
      <Features />
      <Cta />
      <Article />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
