'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stage_event', {
      stage_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stage_event')
  }
}