/*const name = 'dave';
console.log(name);
const nameChars = ['d','a','v','e'];
let namestring = nameChars.forEach(item=>{
  item = item.toUpperCase();
  console.log(item);
});*/


//Beer Class
class Beer {
  constructor({name, brewer, type, origin, status}){
    this.name = name;
    this.brewer = brewer;
    this.type = type;
    this.origin = origin;
		this.status = status
  }
}

// BeerList Class
class BeerList {
  constructor(beers = []){
    this.beers = beers;
  }

  addBeer(newBeer){
    this.beers.push(newBeer);
  }

  getbeerNames(){
    let beerList = `<UL>`;
    this.beers.forEach( beer => {
     beerList += `<LI>${beer.brewer} - ${beer.name}</LI>`;
    });
    beerList += `</UL>`
    return beerList;
  }

  getBeerNamesByType(type='Pale Ale'){
    let beerList = `<UL>`;
    this.beers.forEach( beer => {
      if (beer.type === type) beerList += `<LI>${beer.brewer} - ${beer.name}</LI>`;
    });
    beerList += `</UL>`;
    return beerList;
  }

  getBeerTypes() {
    let types = this.beers.map(beer => {
      console.log(beer.type);
      return beer.type;
    })
  }

}

const AllBeers = new BeerList();

let newBeer = new Beer({name: "Bristle IPA", brewer: "Bo Bristle Brewing Company", type: "India Pale Ale", origin: "Ireland", status: "submit"});
AllBeers.addBeer(newBeer);
AllBeers.addBeer(new Beer({"name": "Extra Stout","brewer": "Guinness","type": "Stout","origin": "Ireland","status": "submit"}));
AllBeers.addBeer(new Beer({"name": "IPA","brewer": "Smithwicks","type": "India Pale Ale","origin": "Ireland","status": "submit"}));
AllBeers.addBeer(new Beer({"name": "IPA","brewer": "Sierra Nevada","type": "India Pale Ale","origin": "USA","status": "submit"}));
AllBeers.addBeer(new Beer({"name": "Leann Follin","brewer": "O'Haras","type": "Stout","origin": "Ireland","status": "submit"}));
AllBeers.addBeer(new Beer({"name": "Pale Ale","brewer": "O'Haras","type": "Pale Ale","origin": "Ireland","status": "submit"}));
AllBeers.addBeer(new Beer({"name": "Boston Lager","brewer": "Boston Brewing Company","type": "Lager","origin": "USA","status": "submit"}));
AllBeers.addBeer(new Beer({"name": "Brú Rí Irish Craft IPA","brewer": "Brú Brewery","type": "India Pale Ale","origin": "Ireland","status": "submit"}));
AllBeers.addBeer(new Beer({"name": "Black IPA","brewer": "Blacks of Kinsale","type": "India Pale Ale","origin": "Ireland","status": "submit"}));

document.querySelector('#beer-type').addEventListener('change', e => {
  /*console.log(e.target.options[e.target.options.selectedIndex]);
  console.log(e.target.options.selectedIndex);
  console.log(e.target.options[e.target.options.selectedIndex].value);*/
  let selectedBeer = e.target.options[e.target.options.selectedIndex].value;
  document.querySelector('#gen-content').innerHTML = `The Beers on File are : ${AllBeers.getBeerNamesByType(selectedBeer)}`;
});

window.addEventListener('load', (e) => {
  document.querySelector('#gen-content').innerHTML = `The Beers on File are : ${AllBeers.getbeerNames()}`;
  AllBeers.getBeerTypes();
}, false);
