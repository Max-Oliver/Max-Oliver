import React from "react";
import "./App.scss";
import { Toolbar } from "./components/toolbar";
import { Table } from "./components/table/index";
import { SliderSlick } from "./components/slider";
import { Form } from "./components/form";

function App() {
  const TOOLBAR_INFO = {
    title: "Landing Page",
    social: "SEGUI CONECTADO",
    theme: "",
  };
  const TITLE_ARTICLES = "Últimos Artículos";
  const TITLE_FORM = "Formulario";

  return (
    <div className="App">
      <Toolbar
        title={TOOLBAR_INFO.title}
        social={TOOLBAR_INFO.social}
        theme={TOOLBAR_INFO.theme}
      />
      <SliderSlick />
      <div className="articles__container">
        <div className="title__articles">
          <p>{TITLE_ARTICLES}</p>
        </div>
        <Table />
      </div>

      {/* Formulario */}

      <div className="form__container">
        <div className="title__form">
          <p>{TITLE_FORM}</p>
        </div>
        <hr />
        <Form />
      </div>
    </div>
  );
}

export default App;
