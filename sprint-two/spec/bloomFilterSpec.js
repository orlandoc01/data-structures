describe('bloomFilter', function () {
  // body..
  function runTrials() {
  // body...
  var fail = 0;
  var users = ["Orlando", "Shiva", "Andrew", "Brendan", "Dave"];
  var BFIntance = new BloomFilter(18);

  _.each(users, function (user) {
      BFIntance.store('user');
    });

  for(var i = 0 ; i<10000 ; i++){
    var str = "";
    for(var j = 0; j < 6; j++) {
      str += String.fromCharCode(Math.random()*26 + 97)
    }
    if(BFIntance.check(str)) fail++;
  }

  return fail/10000;
}
  
  var users = ["Orlando", "Shiva", "Andrew", "Brendan", "Dave"];
  var notAdded = ["Shannon", "Sarah", "Claire", "Vince", "Lance"];
  var BFIntance = new BloomFilter(18);


  it("Should Store and Check for items",function () {
    _.each(users, function(user) {
      BFIntance.store(user);
    });
    expect(_.every(users, user => BFIntance.check(user))).to.equal(true);
  });

  it("Should not find items that were not stored", function(){
    expect(_.every(notAdded, user => !BFIntance.check(user))).to.equal(true);
  });
  var falsePositive = runTrials();
  it("Runing 10,000 trial cases yields a false postive rate of "
     + (falsePositive * 100).toFixed(2) + "%", function(){});
  

});



