'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'meet_greet', // name of source table
      'band_id', // name of the key we're changing
      {
        type: Sequelize.UUID,
        references: {
          model: 'band', // name of target table
          key: 'band_id', // key in target table that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
    .then(() => {
      return queryInterface.changeColumn(
        'meet_greet', // name of target table
        'event_id', // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: 'event', // name of source table
            key: 'event_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'MeetGreet', // name of Source model
      'band_id', // name of the key we're changing
      {
        type: Sequelize.SMALLINT,
        references: {},
        onUpdate: '',
        onDelete: '',
      }
    )
    .then(() => {
      return queryInterface.changeColumn(
        'MeetGreet', // name of target table
        'event_id', // name of the key we're adding
        {
          type: Sequelize.SMALLINT,
          references: {},
          onUpdate: '',
          onDelete: '',
        }
      );
    });
  }
};
