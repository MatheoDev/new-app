const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://arthur:arthure@cluster0.oy5ifuw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "Historique";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "history"
         const col = db.collection("history");

         // Construct a document with what the user have searched for
            let search = { search: "test"};

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(search);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
