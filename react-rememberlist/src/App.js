import "./App.css";
// import Header from "./comps/Header";
// import RemBody from "./comps/RemBody";
// import Footer from "./comps/Footer";

// index.jsx 파일을 사용하여 통합관리하기
// import { Header, RemBody, Footer } from "./comps/index";

/**
 * import from "./comps" 코드를 만나면
 * 먼저 "./comps.js" 또는 "./comps.jsx" 파일을 찾는다
 * 없으면 ./comps 폴더를 찾는다
 * 그리고 폴더에 index.js가 있으면 해당파일에 설정된값들을 import
 *
 * ./comps 폴더에 index.js 파일이 있으면 파일이름을 생략할수있다
 */
import { Header, RemBody, Footer } from "./comps";

function App() {
  return (
    <div className="App">
      <Header />
      <RemBody />
      <Footer />
    </div>
  );
}

export default App;
