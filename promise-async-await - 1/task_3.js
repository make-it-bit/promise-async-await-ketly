// task 3: using https://restcountries.eu/ API, get country where alpha3Code = col!

const fetch_data = async () => {
  const response = await fetch("https://restcountries.com/v3.1/alpha/col");
  const country = await response.json();
  console.log(country);
};

fetch_data();
