import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import IceCream from "./components/ice-box/IceCream"
import Footer from "./components/footer/Footer"

function App() {
 

  return (
    <>
    <main className="w-full h-screen sm:px-5 lg:px-10">
      <Nav/>
      <Home/>
      <IceCream/>
      <Footer/>
    </main>
     
    </>
  )
}

export default App
