import React, { useState } from "react";
import Demo2 from "./pages/Demo2";
import Demo1 from "./pages/Demo1";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import CompanyTable from "./pages/CompanyTable";
import ArrowTextLink from "./pages/VisitWebsite";

function App() {
  const [linkName, setLinkName] = useState("Demo 1");

  return (
    <div>
      {linkName === "Demo 2" && <Demo2 setLinkName={setLinkName} />}
      {linkName === "Demo 1" && <Demo1 setLinkName={setLinkName} />}
      <About />
      <HowItWorks />
      <CompanyTable />
      {/* <ArrowTextLink /> */}
    </div>
  );
}

export default App;
