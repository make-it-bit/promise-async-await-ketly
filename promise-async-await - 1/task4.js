// task 4: get the neighbour countries of Columbia!

const fetch_country = async (alpha3Code) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${alpha3Code}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetch_country_and_neighbours = async () => {
  const colombia = await fetch_country("col");
  console.log(colombia);
  const neighbours = await Promise.all(
    colombia[0].borders.map((border) => fetch_country(border))
  );
  console.log(neighbours);
};

fetch_country_and_neighbours();
