install:
npm install --save-dev sequelize-cli

create migration:
npx sequelize migration:create --name=your-name-migrations

run migration:
npx sequelize db:create
