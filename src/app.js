// // // const express = require('express')
// // // const app = express();
// // // const port = process.env.PORT || 3000

// // // // عشان اعرض صفحات ستاتيك
// // // const path = require('path')
// // // const x = path.join(__dirname, '../public')
// // // app.use(express.static(x))
// // // ////////////////////////////////////////////

// // // // app.get('/', (req, res) => {
// // // //     res.send('hello Home')
// // // // })
// // // app.get('/about', (req, res) => {
// // //     res.send('hello about')
// // // })
// // // app.get('/skills', (req, res) => {
// // //     res.send('hello skills')
// // // })
// // // app.get('/contact', (req, res) => {
// // //     res.send('hello contact')
// // // })
// // // app.get('/blog', (req, res) => {
// // //     res.json({
// // //         name: 'hadeel',
// // //         age: 22,
// // //         adress: 'nusirate'
// // //     })
// // // })

// // // // views display

// // // app.set('view engine', 'hbs')
// // // const viewdirect = path.join(__dirname, '../uu/views')
// // // app.set('views', viewdirect)

// // // app.get('/', (req, res) => {
// // //     res.render('index', {
// // //         title: 'hadeel',
// // //         img1: 'images/img.jpg'
// // //     })
// // // })

// // // app.get('/ser', (req, res) => {
// // //     res.render('ser', {
// // //         title: 'ser',
// // //         img1: 'images/img.jpg'
// // //     })
// // // })

// // // app.get('/forcast', (req, res) => {
// // //     console.log(req.query)
// // //     res.send({
// // //         city: req.query.city,
// // //         forcast:'cold'
// // //     })
// // // })

// // // const hbs = require('hbs')
// // // const o = path.join(__dirname, '../uu/partials')
// // // hbs.registerPartials(o)
// // // console.log(o)

// // const mongodb = require('mongodb')
// // const mongoClient = mongodb.MongoClient

// // const url = 'mongodb://127.0.0.1:27017'
// // const dbname = 'connectDatabase'

// // mongoClient.connect(url, (error, data) => {
// //     if (error) {
// //         console.log('found error')
// //     } else {
// //         console.log('All done ')
// //     }
// //     const dbn = data.db(dbname)

// //     dbn.collection('users').insertOne({
// //         name: 'hadeel',
// //         age: 21
// //     }, (error, data) => {
// //         if (error) {
// //             console.log('found error')
// //         } else {
// //             console.log(data.insertedId)
// //         }
// //     })
// // })

// // // app.get('*', (req, res) => {
// // //     res.send('404 page not found')
// // // })

// // // app.listen(port, () => {
// // //     console.log(`the port is ${port}`)
// // // })

// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;

// const url = "mongodb://127.0.0.1:27017";

// const dbname = "dbname";

// mongoClient.connect(url, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("all done ");
//     }
//     const db = data.db(dbname);

//     // db.collection("person").insertOne(
//     //     {
//     //         name: "hadeel",
//     //         age: 55,
//     //     },
//     //     (error, data) => {
//     //         if (error) {
//     //             console.log(error);
//     //         } else {
//     //             console.log(data.insertedId);
//     //         }
//     //     }
//     // );


//     // db.collection('person').insertMany(
//     //     [
//     //         {
//     //             name: 'hh',
//     //             age: 55
//     //         },
//     //         {
//     //             name: 'pp',
//     //             age: 22
//     //         },
//     //         {
//     //             name: 'hh',
//     //             age: 55
//     //         },
//     //         {
//     //             name: 'pp',
//     //             age: 54
//     //         }
//     //     ], (error, data) => {
//     //         if (error) {
//     //             console.log(error)
//     //         } else {
//     //             console.log(data.insertedCount)
//     //         }
//     //     })







//     // db.collection('person').findOne({ _id: mongodb.ObjectId('64511a412becd46201a02ad4') }, (error, data) => {
//     // if (error) {
//     //     console.log(error)
//     // } else {
//     //     console.log(data)
//     // }
//     // })


//     db.collection('person').find({ age: 55 }).limit(5).toArray((error, data) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(data)
//         }
//     })








//     // db.collection('person').findOne({ _id: mongodb.ObjectId('644edddb6385d371381c2021') },
//     //     (error, data) => {
//     //         if (error) {
//     //             console.log(error)
//     //         } else {
//     //             console.log(data)
//     //         }
//     //     })


//     // db.collection('person').find({ age: 55 }).limit(2).toArray((error, data) => {
//     //     if (error) {
//     //         console.log('object')
//     //     } else {
//     //         console.log(data)
//     //     }
//     // })


//     // db.collection('person').find({ age: 55 }).limit(8).toArray((error, data) => {
//     //     if (error) {
//     //         console.log('object')
//     //     } else {
//     //         console.log(data)
//     //     }
//     // })

//     // db.collection('person').updateOne({ _id: mongodb.ObjectId('644ede5631915a689c1747a0') }, {
//     //     $set: { name: 'adel' },
//     //     $inc: { age: 2 }
//     // }, (error, data) => {
//     //     if (error) {
//     //         console.log('error')
//     //     } else {
//     //         console.log(data.modifiedCount)
//     //     }
//     // })






//     // update(condition,option,callback) مهمة جدااااااااااااااااااااااااااااااااااا


//     // db.collection('person').updateMany({ age: 65 }, {
//     //     $inc: { age: 5 }
//     // }, (error, data) => {
//     //     if (error) {
//     //         console.log(error)
//     //     } else {
//     //         console.log(data.modifiedCount)
//     //     }
//     // })




//     // db.collection('person').deleteOne({ _id: mongodb.ObjectId('644edddb6385d371381c2022') }, (error, data) => {
//     //     if (error) {
//     //         console.log(error)
//     //     } else {
//     //         console.log(data.deletedCount)
//     //     }
//     // })



//     // db.collection('person').deleteMany({}, (error, data) => {
//     //     if (error) {
//     //         console.log(error)
//     //     } else {
//     //         console.log(data.deletedCount)
//     //     }
//     // })


// });







const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello hadeel')
})

require('../db/mongoose')

app.use(express.json())

const useRouter = require('../routers/router')
app.use(useRouter)


app.listen(port, () => console.log(`the port ${port}`))