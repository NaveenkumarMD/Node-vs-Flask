const Router = require('express').Router()
const mongoose = require('mongoose')
const test = mongoose.model('test')
Router.post("/post/:count", (req, res) => {
    console.log("Running post")
    const { count } = req.params
    var docs = []
    var stringarray = []
    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '/', '-', '[', ']']
    function getrandom() {
        return alphabets[(Math.floor(Math.random() * alphabets.length))]
    }
    for (let i = 0; i < count; i++) {
        let str = ""
        for (let j = 0; j < count; j++) {
            str += getrandom()
        }
        stringarray.push(str)

    }
    var objectarray = []
    for (let k = 0; k < count; k++) {
        var seciondobj = {}
        for (let i = 0; i < count; i++) {
            var str = ""
            for (let j = 0; j < count; j++) {
                str += getrandom()
            }
            seciondobj = {
                ...seciondobj,
                [i]: str
            }
        }
        objectarray.push(seciondobj)
    }

    var arrarray=[]
    for (let k = 0; k < count; k++) {
        var seciondobj = []
        for (let i = 0; i < count; i++) {
            var str = ""
            for (let j = 0; j < count; j++) {
                str += getrandom()
            }
            seciondobj.push(str)
        }
        arrarray.push(seciondobj)
    }
    for(let i=0;i<count;i++){
        let data={
            str:stringarray[i],
            obj:objectarray[i],
            arr:arrarray[i]
        }
        docs.push(data)
    }
    test.insertMany(docs,(err)=>{
        if (err){
            res.json(err)
        }
        else{
            return res.json({"msg":docs})
        }
    })

})

Router.delete("/delete",async (req,res)=>{
    await test.deleteMany({})
    res.json({"msg":"success"})
})
Router.get("/getall",async (req,res)=>{
    test.find({}).then(resdata=>{
        var array=[]
        for(var i of resdata){
            array.push(i)
        }
        res.json(array)
    })
})


module.exports = Router