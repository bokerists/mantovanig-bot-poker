const _ = require('lodash');

const groupedForRank = (cards) => _.values(_.groupBy(cards, 'rank'));
const groupedForType = (cards) => _.values(_.groupBy(cards, 'type'));

exports = module.exports = {

    init: function(gamestate) {

          var me = gamestate.me;
          var myCard = gamestate.players[me].cards;
          var callAmount = gamestate.callAmount;
          var minimumRaiseAmount = gamestate.minimumRaiseAmount;

          var commonCards = gamestate.commonCards;
          var allCards = _.concat(commonCards, myCard);


          var myGroupedRank = groupedForRank(myCard);
          var allGroupedRank = groupedForRank(allCards);

          var allGroupedType = groupedForType(allCards);

          // console.log('myGrouped', myGrouped);
          // console.log('commonGrouped', commonGrouped);


          var isCoppia = allGroupedRank.filter((g) => g.length == 2).length > 0;
          var isDoppiaCoppia = allGroupedRank.filter((g) => g.length == 2).length == 2;
          var isMyCoppia = myGroupedRank.filter((g) => g.length == 2).length > 0;
          var isTris = allGroupedRank.filter((g) => g.length == 3).length > 0;
          var isColore = allGroupedType.filter((g) => g.length == 2).length == 1;


          console.log('isCoppia', isCoppia);
          console.log('isMyCoppia', isMyCoppia);
          console.log('isColore', isColore);
          console.log('isTris', isTris);

          // if(commonCards.length <= 3)
          //     return callAmount;

          if(isTris)
            return minimumRaiseAmount + 40;

          if(isDoppiaCoppia)
            return minimumRaiseAmount + 20;

          if(isColore)
              return minimumRaiseAmount + 50;

          if(isMyCoppia)
              return minimumRaiseAmount + 10;


          if(isCoppia)
            return minimumRaiseAmount;


          return 0;

    }

};
