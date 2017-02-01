/*const name = 'dave';
console.log(name);
const nameChars = ['d','a','v','e'];
let namestring = nameChars.forEach(item=>{
  item = item.toUpperCase();
  console.log(item);
});*/


//Beer Class
class Beer {
  constructor(name='New Beer', brewer='OBrewer', type='Beer', origin = "USA" status="submit"){
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
     beerList += `<LI>${beer.name}</LI>`
    });
    beerList += `</UL>`
    return beerList;
  }

  getBeerNamesByType(type='Pale Ale'){
    let beerList = `<UL>`;
    this.beers.forEach( beer => {
      if (beer.type === type) beerList += `<LI>${beer.name}</LI>`
    });
    beerList += `</UL>`;
    return beerList;
  }

  /*getBeerTypes(){
    let types = this.beers.map(beer => {
      console.log(beer.type);
      return beer.type;
    })
  }*/

}

const AllBeers = new BeerList();
let newBeer = new Beer('Guinness','Extra Stout','Stout','Ireland');
AllBeers.addBeer(newBeer);
AllBeers.addBeer(new Beer('OHaras','Leann Follin','Stout','Ireland'));
AllBeers.addBeer(new Beer('OHaras','Pale Ale','Pale Ale','Ireland'));
AllBeers.addBeer(new Beer('Sierra Nevada','IPA','India Pale Ale','USA'));



document.querySelector('#beer-type').addEventListener('change', e => {
  /*console.log(e.target.options[e.target.options.selectedIndex]);
  console.log(e.target.options.selectedIndex);
  console.log(e.target.options[e.target.options.selectedIndex].value);*/
  let selectedBeer = e.target.options[e.target.options.selectedIndex].value;
  document.querySelector('#gen-content').innerHTML = `The Beers on File are : ${AllBeers.getBeerNamesByType(selectedBeer)}`;
});

window.addEventListener('load', (e) => {
  document.querySelector('#gen-content').innerHTML = `The Beers on File are : ${AllBeers.getbeerNames()}`;
//  AllBeers.getBeerTypes();
}, false);
