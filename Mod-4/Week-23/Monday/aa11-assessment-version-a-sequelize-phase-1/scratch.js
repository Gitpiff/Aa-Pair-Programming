//Validations go in the MODEL file
//Constraints go in the Migration file
    //validations require keyword validate: {}

//Create a Migration/Model 
    //npx sequelize model:generate --name --attributes
    
//To generate a seeder
        //npx sequelize seeder:generate --name 

//To seed data you need to Migrate your data First
//To run a migration
    //npx dotenv sequelize db:migrate

//To Seed data
    //npx dotenv sequelize db:seed      //If only want to seed one file
    //npx dotenv sequelize db:seed:all  //If want to seed ALL seeder files

//To add a Column to an Existing Table, create a new migration file
    //npx sequelize migration:create --name <name of migration file>
    //In the migration file
        //await queryInterface.addColumn('Table','newColumn', {type: , ...attributes})

//To create a new Table we need to create a new model
    //npx dotenv model:generate --name 
