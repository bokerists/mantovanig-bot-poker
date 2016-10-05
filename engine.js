const _ = require('lodash');

exports = module.exports = {

    init: function(gamestate) {

          var me = gamestate.me;
          var myCard = gamestate.players[me].cards;
          var callAmount = gamestate.callAmount;

          var commonCards = gamestate.commonCards;


          var grouped =_.values(_.groupBy(myCard, 'rank'));
          var isCoppia = grouped.filter((g) => g.length == 2).length > 0;


          if(commonCards.length <= 3)
              return callAmount;

          if(isCoppia)
              return callAmount + 5;


          return 0;

    }

};
