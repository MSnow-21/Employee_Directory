import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeTable from "./components/EmployeeTable"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <wrapper>
      <Header />
      <SearchBar />
      <EmployeeCard />
      <EmployeeTable />
    </wrapper>
  );
}

export default App;
