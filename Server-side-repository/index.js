const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// setup middleware
app.use(cors());
app.use(express.json());

// Setup root route
app.get("/", (req, res) => {
   res.send("Hello from the server!");
});

// MongoDB connection uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gdtw4a9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

// Connect the client to the server
const run = async () => {
   try {
      // await client.connect();

      const eventsCollection = client
         .db("gardenComunityDB")
         .collection("events");

      const GardenersCollection = client
         .db("gardenComunityDB")
         .collection("GardenersProfile");

      const tipsCollection = client.db("gardenComunityDB").collection("tips");
      const usersCollection = client.db("gardenComunityDB").collection("users");

      // Post users
      app.post("/users", async (req, res) => {
         const user = req.body;
         const result = await usersCollection.insertOne(user);
         res.send(result);
      });

      // Post tips
      app.post("/tips", async (req, res) => {
         const tips = req.body;
         const result = await tipsCollection.insertOne(tips);
         res.send(result);
      });

      // Get users
      app.get("/users/:email", async (req, res) => {
         const email = req.params.email;
         const query = { email: email };
         const result = await usersCollection.findOne(query);
         res.send(result);
      });

      //Get all events
      app.get("/events", async (req, res) => {
         res.send(await eventsCollection.find().toArray());
      });

      // Get 6 gardeners
      app.get("/gardeners", async (req, res) => {
         res.send(
            await GardenersCollection.find({ status: "Active" })
               .limit(6)
               .toArray()
         );
      });

      //Get all gardeners
      app.get("/allGardeners", async (req, res) => {
         res.send(await GardenersCollection.find().toArray());
      });

      // Get limited tips

      app.get("/topTips/:limit", async (req, res) => {
         const limit = Number(req.params.limit);
         res.send(await tipsCollection.find().limit(limit).toArray());
      });

      // Get all tips
      app.get("/tips", async (req, res) => {
         res.send(await tipsCollection.find().toArray());
      });

      //Get users tips
      app.get("/userTips/:email", async (req, res) => {
         const email = req.params.email;
         const query = { email: email };
         const result = await tipsCollection.find(query).toArray();
         res.send(result);
      });

      //Get public tips
      app.get("/publicTips", async (req, res) => {
         const query = { status: "public" };
         const result = await tipsCollection.find(query).toArray();
         res.send(result);
      });

      // Get filtered tips
      app.get("/tipsFilter/:category", async (req, res) => {
         const category = req.params.category;
         const query = {
            difficulty_level: category,
            status: "public",
         };
         const result = await tipsCollection.find(query).toArray();
         res.send(result);
      });

      // Get user tip details
      app.get("/tipDetails/:id", async (req, res) => {
         const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const result = await tipsCollection.findOne(query);
         res.send(result);
      });

      //Update user tips
      app.put("/updateTips/:id", async (req, res) => {
         const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const options = { upsert: true };
         const updatedTips = req.body;
         const updateDoc = {
            $set: updatedTips,
         };

         const result = await tipsCollection.updateOne(
            query,
            updateDoc,
            options
         );
         res.send(result);
      });

      //Update single field
      app.patch("/updateTipsSV/:id", async (req, res) => {
         const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const options = { upsert: true };
         const updatedTips = req.body;
         const updateDoc = {
            $set: updatedTips,
         };

         const result = await tipsCollection.updateOne(
            query,
            updateDoc,
            options
         );
         res.send(result);
      });

      app.delete("/deleteTips/:id", async (req, res) => {
         const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const result = await tipsCollection.deleteOne(query);
         res.send(result);
      });

      await client.db("admin").command({ ping: 1 });
      console.log(
         "Pinged your deployment. You successfully connected to MongoDB!"
      );
   } finally {
   }
};
run().catch(console.dir);

// Listen to the server
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
