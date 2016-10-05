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


          var myGroupedRank = groupedForRank(myCard);
          var allGroupedRank = groupedForRank(allCards);

          var allGroupedType = groupedForType(allCards);

          // console.log('myGrouped', myGrouped);
          // console.log('commonGrouped', commonGrouped);


          var isCoppia = myGroupedRank.filter((g) => g.length == 2).length > 0;
          var isMyCoppia = allGroupedRank.filter((g) => g.length == 2).length > 0;
          // var isTris = myGrouped.filter((g) => g.length == 3).length > 0;

          var isColore = allGroupedType.filter((g) => g.length == 2).length == 1;


          console.log('isCoppia', isCoppia);
          console.log('isMyCoppia', isMyCoppia);
          console.log('isColore', isColore);
          
          // if(commonCards.length <= 3)
          //     return callAmount;

          if(isColore)
            return callAmount + 50;


          if(isMyCoppia)
              return callAmount + 10;


          if(isCoppia)
            return callAmount + 5;




          return 0;

    }

};
