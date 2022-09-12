import Country from "./components/Country";

const country = [
    {
      name: "Suomi",
      capital:"Helsinki",  
    },
    {
        name: "Ruotsi",
        capital:"Tukholma"  
      },
    {
        name: "Norja",
        capital:"Oslo"  
      },
  ];


  const App = () => {

    return (
      <div>
        <h1>Countries</h1>
        <Country countries={country[0]}/>
        <Country countries={country[1]}/>
        <Country countries={country[2]}/>
      </div>
    );
  };
  
  //export the component in the end
  export default App;