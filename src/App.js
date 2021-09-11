import "./App.css";
// import Form from "./Form";
import MapBasics from "./Map";
import MenuAppBar from "./Header";
import Footer from "./Footer";
import InputForm from "./InputForm";

function App() {
  return (
    <>
      <MenuAppBar></MenuAppBar>
      <div>
        {/* <Form></Form> */}
        <InputForm></InputForm>
      </div>
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          zIndex: "-4px",
        }}
      >
        <MapBasics></MapBasics>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
