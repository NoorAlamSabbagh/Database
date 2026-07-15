import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

app.post("/user/:id/json", async(req, res) =>{
    await redis.set(`user:${req.params.id}`, JSON.stringify(req.body));
    res.json({savedAs: "json"})
})


app.post("/user/:id/hash", async (req, res) => {
    await redis.hset(
        `user:${req.params.id}:hash`,
        ...Object.entries(req.body).flat()
    );

    res.json({ savedAs: "hash" });
});

app.get("/user/:id/hash", async(req, res) =>{
    const user = await redis.hgetall(`user:${req.params.id}:hash`);
    res.json({user});
});

app.listen(3000, () =>{
    console.log("Server is running on port http://localhost:3000")
})
