const _ = require('lodash');

exports = module.exports = {

    init: function(gamestate) {

          var me = gamestate.me;
          var myCard = gamestate.players[me].cards;
          var callAmount = gamestate.callAmount;

          //console.log('my card', myCard);

          if(this.checkCoppia(myCard))
              return callAmount;


          return 0;

    },

      checkCoppia: function(myCard) {

          // var myCardRank = myCard.map((cards) => return cards.rank);

         var grouped =_.values(_.groupBy(myCard, 'rank'));

        return  grouped.filter((g) => g.length == 2).length > 0;

    }

};
