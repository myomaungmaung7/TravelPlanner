import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST, GET, PUT, DELETE"],
        credentials: true
    }
))


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "travel_planner"
})

app.post('/login', (req, res) => {
    const sql = "select * from user where email=? and password=?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json({Message: "Server Side Error"});
        if(data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn: '1d'});
            res.cookie('token', token);
            return res.json({Status: "Success"})
        } else {
            return res.json({Message: "No records existed"});
        }
    })
})

app.post("/register", (req, res) => {
    const sql = "insert into user (`user_name`, `email`, `password`, `gender`) values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.gender
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get("/", (req, res) => {
    const sql = "select * from user";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/addnewuser', (req, res) => {
    const sql = "insert into user (user_name,email,password,role,gender) values (?)";
    const values = [...Object.values(req.body)];
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json({data})
    })
})

app.put('/edituser/:id', (req, res) => {
    const sql = "UPDATE user SET user_name=?, email=?, role=? WHERE user_id=?";
    const id = req.params.id;
    const values = [req.body.name, req.body.email, req.body.role]
    console.log(req.body.name)
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/manageaccount/:id', (req, res) => {
    const sql = "delete from user where user_id=?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Running.....")
}) 