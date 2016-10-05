const _ = require('lodash');

const groupedForRank = (cards) => _.values(_.groupBy(cards, 'rank'));
const groupedForType = (cards) => _.values(_.groupBy(cards, 'type'));

exports = module.exports = {

    init: function(gamestate) {

          var me = gamestate.me;
          var myCard = gamestate.players[me].cards;
          var callAmount = gamestate.callAmount;

          var commonCards = gamestate.commonCards;
          var allCards = _.concat(commonCards, myCard);


          var myGrouped = groupedForRank(myCard);
          var allGrouped = groupedForRank(allCards);

          console.log('myGrouped', myGrouped);
          console.log('commonGrouped', commonGrouped);

          var isCoppia = allGrouped.filter((g) => g.length == 2).length > 0;
          var isMyCoppia = myGrouped.filter((g) => g.length == 2).length > 0;
          // var isTris = myGrouped.filter((g) => g.length == 3).length > 0;



          // if(commonCards.length <= 3)
          //     return callAmount;

          if(isCoppia)
            return callAmount + 5;


          if(isMyCoppia)
              return callAmount + 10;



          return 0;

    }

};
