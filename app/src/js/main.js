const name = 'dave';
console.log(name);
const nameChars = ['d','a','v','e'];
let namestring = nameChars.forEach(item=>{
  item = item.toUpperCase();
  console.log(item);
});


//Beer Class
class Beer {
  constructor({ name='New Beer', type='Beer', origin = "USA" }){
    this.name = name;
    this.type = type;
    this.origin = origin;
  }
}

// BeerList Class
class BeerList {
  constructor(beers = []){
    this.beers = beers;
  }

  addBeer(newBeer){
    this.beers.push(newBeer);
    console.log(this.beers);
  }

  getbeerNames(){
    let beerList=[];
    beerList = this.beers.forEach( beer => {
      console.log(beer.name);
      beerList.push(beer.name);
    });
    return beerList;
  }
}

let newBeer = new Beer('Guinness','Stout','Ireland');

const AllBeers = new BeerList();

AllBeers.addBeer(newBeer);
AllBeers.addBeer(new Beer('Smithwicks','Red Ale','Ireland'));



window.addEventListener('load', (e) => {

document.querySelector('#gen-content').innerHTML = `The Beers on File are : ${AllBeers.getbeerNames()}`;

}, false);
