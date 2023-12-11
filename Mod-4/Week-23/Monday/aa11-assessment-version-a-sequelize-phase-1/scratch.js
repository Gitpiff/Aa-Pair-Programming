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