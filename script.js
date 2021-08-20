
  
   /*task1*/ 
/*
   async function combinecountries()
   {
       const eur_data = await fetch("https://restcountries.eu/rest/v2/region/europe")
       const europe = await eur_data.json();
        const asia_data = await fetch("https://restcountries.eu/rest/v2/region/asia")
        const asia = await asia_data.json();
        console.log(europe.concat(asia));
   }
combinecountries();*/

async function spanish()
{
    const data = await fetch("https://restcountries.eu/rest/v2/lang/es");
    const spa = await data.json();
    let arrspanish = spa.filter((x)=> x.region == "Europe");
    console.log(arrspanish);
}
spanish();