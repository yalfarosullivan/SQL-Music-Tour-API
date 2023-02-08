npm i sequelize
npm i pg pg-hstore
npm i -g sequelize-cli
sequelize init:config
sequelize init:models
sequelize db:migrate
sequelize migration:generate --name [name_of_your_migration]
sequelize seed:generate --name set_time