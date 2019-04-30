const team = {
  
  _players:[{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 25
},
            {
  firstName: 'Picaso',
  lastName: 'Sangoa',
  age: 28
},
            {
  firstName: 'Arnold',
  lastName: 'Balboa',
  age: 27
}],
  
  _games:[{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
          {
  opponent: 'Catalos',
  teamPoints: 32,
  opponentPoints: 39
},
  {
  opponent: 'Gonzas',
  teamPoints: 22,
  opponentPoints: 27
} ],

      
get players(){
 return this._players;
},
  
get games(){
  return this._games;
},


addPlayer(firstName,lastName, age) {
  let newPlayer = {
    firstName: firstName,
    lastName:lastName,
    age:age
  };
  this._players.push(newPlayer);
  },
  
  addGame(opponent,teamPoints,opponentPoints){
    let newGame = {
      opponent :opponent,
      teamPoints:teamPoints,
      opponentPoints:opponentPoints
    };
    this._games.push(newGame);
  }

};

team.addPlayer( 'Wasim','Akram',32);
team.addPlayer('Waqar','younes',30);
console.log(team._players);

team.addGame('Outlaws', 1, 3);
team.addGame('Gladiators', 3, 1);
team.addGame('Mayhem', 3, 0);

console.log(team._games);


