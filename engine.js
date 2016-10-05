const _ = require('lodash');

exports = module.exports = {

    init: function(gamestate) {

          var me = gamestate.me;
          var myCard = gamestate.players[me].cards;
          var callAmount = gamestate.callAmount;

          var commonCards = gamestate.commonCards;
          // var allCards = _.concat(commonCards, myCard);

          var grouped = (cards) => _.values(_.groupBy(cards, 'rank'));

          var myGrouped = grouped(myCard);
          var commonGrouped = grouped(commonCards);

          console.log('myGrouped', myGrouped);
          console.log('commonGrouped', commonGrouped);

          var isCoppia = myGrouped.filter((g) => g.length == 2).length > 0;
          // var isTris = myGrouped.filter((g) => g.length == 3).length > 0;



          // if(commonCards.length <= 3)
          //     return callAmount;

          if(isCoppia)
              return callAmount + 5;


          return 0;

    }

};
