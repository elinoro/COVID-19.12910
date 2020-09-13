const startApp = () => {
  let data = [];
  //let continent = [];

  const getData = async () => {
    const reqData = await fetch(`https://corona-api.com/countries`);
    const covidData = await reqData.json();

    data.push({
      allData: covidData.data,
      // countryName: covidData.name,
      // totalCases: covidData.confirmed,
      // newCases: covidData.new_confirmed,
      // totalDeaths: covidData.deaths,
      // newDeaths: covidData.new_deaths,
      // totalRecovered: covidData.recovered,
      // criticalCondition: covidData.critical
    });

    console.log(data);
    
    // const getContinent = (continent) => {
    //   const reqContinent = await fetch(`https://restcountries.herokuapp.com/api/v1/region/${continent}`);
    //   const continentData = await reqContinent.json();
    //   // const reqSubContinent = await fetch(continentData.subregion);
    //   // SubContinentData = await reqSubContinent.json();

    //   continent.push({
    //     allData: continentData.data,
    //     // countryName: continentData.name.common,
    //     // continentName: continentData.region,
    //     // subContinent: SubContinentData.subregion
    //   });

    //   console.log(continent);
    // }

    // getContinent(asia);



   // ___________________________

    // const map = document.querySelector('map');

    // const asia = document.createElement('P');
    // asia.classList.add('asia continent');
    // map.appendChild(asia);

    // const europe = document.createElement('P');
    // europe.classList.add('europe continent');
    // map.appendChild(europe);

    // const northAmerica = document.createElement('P');
    // northAmerica.classList.add('northAmerica continent');
    // map.appendChild(northAmerica);

    // const southAmerica = document.createElement('P');
    // southAmerica.classList.add('southAmerica continent');
    // map.appendChild(southAmerica);

    // const africa = document.createElement('P');
    // africa.classList.add('africa continent');
    // map.appendChild(africa);
    
    // const australia = document.createElement('P');
    // australia.classList.add('australia continent');
    // map.appendChild(australia);

    // let continent = [];

    // displayData();
  };

  getData();
};
startApp();
