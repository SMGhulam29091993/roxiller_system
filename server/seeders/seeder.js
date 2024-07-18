const Transaction = require("../models/transactionModel.js");
const {transactionData} = require("../constants/data.js");




const seeder = async () => {
    try {   
        await Transaction.deleteMany()     
        const transactions = await Transaction.insertMany(transactionData);

        if (!transactions) {
            console.error("Cannot feed data to db in seeders");
            return;
        }

        console.log("Data has been successfully fed to db");
    } catch (error) {
        console.error(error);
    }
};

module.exports = seeder;
