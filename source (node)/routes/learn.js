const express = require("express");
const router = express.Router();
const db = require('./db');
const _ = require('lodash');
const verifyToken = require('../helpers/verifyToken');





router.get('/list', verifyToken, async(req,res) => {
    
    //Emailde kayıtlı kullanıcı var mı bak?
    const ml = req.email;
	const resp = await db.collection("users").where("email", "==", ml).get()
	if(!resp.docs) return res.status(500).send("Internal server error");
	const ls = await db.collection("examples").get();
    //Kullanıcıyı bul ve level listesini al
		const obj = [{id : ls.docs[0].id , ...ls.docs[0].data()},{id : ls.docs[1].id , ...ls.docs[1].data()}]
        res.send(obj);

})
router.get('/list/:id', verifyToken, async(req,res) => {
	
	    
    //Emailde kayıtlı kullanıcı var mı bak?
    const ml = req.email;
	const resp = await db.collection("users").where("email", "==", ml).get()
	if(!resp.docs) return res.status(500).send("Internal server error");
	const ls = await db.collection("examples").get();
	const obj = [{id : ls.docs[0].id , ...ls.docs[0].data()},{id : ls.docs[1].id , ...ls.docs[1].data()}]
	
	if(req.params.id.toString() == obj[0].id) return res.send(obj[0]);
	if(req.params.id.toString() == obj[1].id) return res.send(obj[1]);
	res.status(404).send("Error");
    //Kullanıcıyı bul ve level listesini al
	
	
	
})





module.exports = router;