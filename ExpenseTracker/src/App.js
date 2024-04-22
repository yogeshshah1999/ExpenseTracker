
import ExpenseSection from "./components/ExpenseSection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./context/GlobalContext";


function App() {
   return (
   <GlobalProvider>
     <>
     <Navbar/>
    <div className="container">
      <MainSection />
      <ExpenseSection />
    </div>
    </>
   </GlobalProvider>
  );
}

export default App;
