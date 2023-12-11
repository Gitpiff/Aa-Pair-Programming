//Create a Migration/Model 
    //npx sequelize model:generate --name --attributes
    
//To generate a seeder
        //npx sequelize seeder:generate --name 

//To seed data you need to Migrate First
    //npx dotenv sequelize db:migrate

//Seed data
    //npx dotenv sequelize db:seed      //If only want to seed one file
    //npx dotenv sequelize db:seed:all  //If want to seed ALL seeder files