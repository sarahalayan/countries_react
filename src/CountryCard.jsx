export function CountryCard({ country: { flags, population,capital,name } }){
    return (
        <div className="movie" >
    
          <div>
            <img src={flags.png !== "N/A" ? flags.png : "https://via.placeholder.com/400"} alt={name} />
          </div>
    
          <div>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <h3>{name.common}</h3>
          </div>
        </div>
      );
}