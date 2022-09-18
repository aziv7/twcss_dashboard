import { Home, LeftSidebar } from "./components";
import logo from "./logo.svg";

function App() {
  return (
    <div
      className="bg-[#F3F5FA] min-h-screen overflow-x-hidden w-full mx-auto flex flex-row
    "
    >
      <LeftSidebar />
      <Home />
    </div>
  );
}

export default App;
