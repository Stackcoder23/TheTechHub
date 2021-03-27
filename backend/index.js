const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Customer = require("./models/Customer");
const Laptop = require("./models/Laptop");
const Prebuild = require("./models/Prebuild");
const Motherboard = require("./models/Motherboard");
const Processor = require("./models/Processor");
const Ram = require("./models/Ram");
const Storage = require("./models/Storage");
const Graphicscard = require("./models/Graphicscard");
const Psu = require("./models/Psu");
const Cabinet = require("./models/Cabinet");
const Cooler = require("./models/Cooler");
const Accesories = require("./models/Accesories");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
const Payment = require("./models/Payment");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:thetechhub@cluster0.h4ldk.mongodb.net/thetechhub?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
     useCreateIndex: true,
}).then(() => {
    console.log("DB connection success");
  })
  .catch((err) => {
    console.log(err);
  });

// mongoose.connect("mongodb://localhost/thetechhub", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// }).then(() => {
//     console.log("DB connection success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.post("/insert", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const customer = new Customer({ name: name, email: email, password: password});
    await customer.save().then(() => {
        res.status(200).send( {
            message: "successful"
        });
        console.log("inserted");
      })
      .catch((err) => {
        res.status(200).send( {
            message: "Unsuccessful"
        });
        console.log("not inserted");
      });
});

app.post("/insertcart", async (req, res) => {
    const userid = req.body.userid;
    const price = req.body.price;
    const image = req.body.image;
    const name = req.body.name;
    const cart = new Cart({ userid: userid, price: price, image: image, name: name});
    await cart.save().then(() => {
        res.status(200).send( {
            message: "Added"
        });
        console.log("inserted");
      })
      .catch((err) => {
        res.status(200).send( {
            message: "Already added to cart"
        });
        console.log(err);
      });
});

app.post("/insertbuild", async (req, res) => {
    Cart.insertMany(req.body).then(() => {
        res.status(200).send( {
            message: "added"
        });
        console.log("inserted");
    })
    .catch((err) => {
        res.status(200).send( {
            message: "error"
        });
        console.log(err);
    })
});

app.post("/order", async (req, res) => {
    const userid = req.body.userid;
    const productname = req.body.productname;
    const amount = req.body.amount;
    const address = req.body.address;
    const order = new Order({ userid: userid, productname: productname, amount: amount, address: address});
    await order.save().then(() => {
        res.status(200).send( {
            message: "Added"
        });
        console.log("inserted");
      })
      .catch((err) => {
        res.status(200).send( {
            message: "error"
        });
        console.log(err);
      });
});

app.post("/payment", async (req, res) => {
    const userid = req.body.userid;
    const amount = req.body.amount;
    const name = req.body.name;
    const cardno = req.body.cardno;
    const payment = new Payment({ userid: userid, amount: amount, name: name, cardno: cardno});
    await payment.save().then(() => {
        res.status(200).send( {
            message: "Added"
        });
        console.log("inserted");
      })
      .catch((err) => {
        res.status(200).send( {
            message: "error"
        });
        console.log(err);
      });
});

app.post("/login", async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    const result = await Customer.findOne({email: email});
    if(result) {
        if(result.password=== password){
            res.status(200).send( {
                message: "Welcome"
            })
        } else {
            res.status(200).send( {
                message: "incorrect pass"
            })
        }
} else {
        res.status(200).send( {
            message: "user not found"
        })
    }
});

app.post("/readlaptopcart", async (req,res) => {
    let userid = req.body.userid;
    let name = req.body.name;
    const result = await Cart.findOne({userid: userid, name: name});
    if(result) {
            res.status(200).send( {
                message: "successful"
            })
} else {
        res.status(200).send( {
            message: "not found"
        })
    }
});

app.post("/removecart", async (req,res) => {
    let userid = req.body.userid;
    let name = req.body.name;
    const result = await Cart.deleteOne({userid: userid, name: name});
    if(result) {
            res.status(200).send( {
                message: "successful"
            })
} else {
        res.status(200).send( {
            message: "not found"
        })
    }
});

app.post("/deletecart", async (req,res) => {
    let userid = req.body.userid;
    const result = await Cart.remove({userid: userid});
    if(result) {
            res.status(200).send( {
                message: "successful"
            })
} else {
        res.status(200).send( {
            message: "not found"
        })
    }
});

app.get("/readlaptop", async (req, res) => {
    Laptop.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readprebuilt", async (req, res) => {
    Prebuild.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readmb", async (req, res) => {
    Motherboard.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readpro", async (req, res) => {
    Processor.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readram", async (req, res) => {
    Ram.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readstorage", async (req, res) => {
    Storage.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readgfx", async (req, res) => {
    Graphicscard.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readpsu", async (req, res) => {
    Psu.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readcab", async (req, res) => {
    Cabinet.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readcooler", async (req, res) => {
    Cooler.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

app.get("/readacc", async (req, res) => {
    Accesories.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }

        res.send(result);
    })
})

// app.get("/readcart", async (req, res) => {
//     let userid = req.body.userid;
//     Cart.find({userid: userid}, (err, result) => {
//         if(err) {
//             res.send(err);
//         }

//         res.send(result);
//     })
// })

app.post("/readcart", async (req,res) => {
    let userid = req.body.userid;
    const result = await Cart.find({userid: userid,});
    res.send(result);
});

app.post("/readorders", async (req,res) => {
    let userid = req.body.userid;
    const result = await Order.find({userid: userid,});
    res.send(result);
});


app.listen(3001, () => {
    console.log("server running on 3001");
})