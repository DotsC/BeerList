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

  getBeers(){
    let names = this.beers.reduce((beerList, beer) => {
      beerList.push(beer);
      return beerList;
    },[]);
    return names;
  }

  filterBeers(_searchItem){
    if(_searchItem.type != 'All'){
      return this.beers.filter((_beer) =>{
        return _beer.type === _searchItem.type;
      });
    }
    else{
      return this.beers;
    }
  }

  getBeerTypes() {
    let types = this.beers.reduce((tlist, beer) => {
      let dupe = tlist.some(b => {
        return b === beer.type;
      });
      if(!dupe) tlist.push(beer.type);
      return tlist;
    },[]);
    return types;
  }


    /*
    getBeerNamesByType(type='All'){
      return this.beers.filter( beer => {
        return beer.type === type;
      });
    }
  */
}

class BeerSelectView{
  constructor(targetElement, App){
    this.targetElement = targetElement;
    this.App = App;
    ["All",...this.App.AllBeers.getBeerTypes()].forEach(bType => {
      document.querySelector('#beer-type').innerHTML += `<option value='${bType}'>${bType}</option>`;
    });
    this.onTypeChangeHandler = this.onTypeChangeHandler.bind(this);
    this.targetElement.addEventListener('change', this.onTypeChangeHandler);

  }

  onTypeChangeHandler(evt) {
    let selectedBeer = evt.target.options[evt.target.options.selectedIndex].value;
    this.App.ViewBeerList.renderBeerList(this.App.AllBeers.filterBeers({"type":selectedBeer}));
  }

}

class BeerListView{

  constructor(targetElement, App){
    this.targetElement = targetElement;
    this.App = App;

    let newBeer = new Beer({name: "Bristle IPA", brewer: "Bo Bristle Brewing Company", type: "India Pale Ale", origin: "Ireland", status: "submit"});
    this.App.AllBeers.addBeer(newBeer);
    this.App.AllBeers.addBeer(new Beer({"name": "Extra Stout","brewer": "Guinness","type": "Stout","origin": "Ireland","status": "submit"}));
    this.App.AllBeers.addBeer(new Beer({"name": "IPA","brewer": "Smithwicks","type": "India Pale Ale","origin": "Ireland","status": "submit"}));
    this.App.AllBeers.addBeer(new Beer({"name": "IPA","brewer": "Sierra Nevada","type": "India Pale Ale","origin": "USA","status": "submit"}));
    this.App.AllBeers.addBeer(new Beer({"name": "Leann Follin","brewer": "O'Haras","type": "Stout","origin": "Ireland","status": "submit"}));
    this.App.AllBeers.addBeer(new Beer({"name": "Pale Ale","brewer": "O'Haras","type": "Pale Ale","origin": "Ireland","status": "submit"}));
    this.App.AllBeers.addBeer(new Beer({"name": "Boston Lager","brewer": "Boston Brewing Company","type": "Lager","origin": "USA","status": "submit"}));
    this.App.AllBeers.addBeer(new Beer({"name": "Brú Rí Irish Craft IPA","brewer": "Brú Brewery","type": "India Pale Ale","origin": "Ireland","status": "submit"}));
    this.App.AllBeers.addBeer(new Beer({"name": "Black IPA","brewer": "Blacks of Kinsale","type": "India Pale Ale","origin": "Ireland","status": "submit"}));
  }

  renderBeerList(_beers){
    let listBlock = `<UL>`;
    _beers.forEach(beer => {
      listBlock += `<LI>${beer.brewer} - ${beer.name}</LI>`;
    });
    listBlock += `</UL>`
    this.targetElement.innerHTML = `${listBlock}`;
  }
}



class BeerApplication{

  constructor(name) {
    this.name = name;
    this.AllBeers = new BeerList();
    this.ViewBeerList = new BeerListView(document.getElementById('beer-list'), this);
    this.ViewBeerSelect = new BeerSelectView(document.getElementById('beer-type'), this);
  }
}

window.addEventListener('load', (e) => {
  let MyBeerApp = new BeerApplication('Craft Beer');
  // Target to Refactor.
  MyBeerApp.ViewBeerList.renderBeerList(MyBeerApp.AllBeers.getBeers());
});
