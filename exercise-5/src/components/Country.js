import "./Country.css";

const Country = (props) => {

    return (
      <div className="country">
        <p className="country__name">{props.countries.name}</p>
        <p className="country__capital">{props.countries.capital}</p>
      </div>
    );
  };
  
  //export the component in the end
  export default Country;