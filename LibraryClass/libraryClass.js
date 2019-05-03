class Media  {
  constructor(title){
    this._title = title;
    this._isCheckedOut = true;
    this._rating = [];
   }
  get title(){
    return this._title;
  }
  
  set isCheckedOut(newStatus){
    this._isCheckedOut = newStatus;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
    
  }
  
  getAverageRating(){
    let ratingsSum = this._rating.reduce((currentSum, rating) => currentSum + rating, 0);
   const lengthOfArray = this._rating.length;
   let avgRating = ratingsSum/lengthOfArray;
    console.log(avgRating);
  }
  addRating(newRating){
    this._rating.push(newRating);
  }
}

class Book extends Media {
  constructor(title,author,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title,director,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}


const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544);

//console.log(historyOfEverything);

historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

historyOfEverything.getAverageRating();
//console.log(historyOfEverything);

const speed = new Movie('Speed','Jan de Bont', 116);
//console.log(speed);
speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();


