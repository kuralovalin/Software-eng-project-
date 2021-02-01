const express = require("express");
const router = express.Router();
const db = require('./db');
const _ = require('lodash');
const verifyToken = require('../helpers/verifyToken');
const { route } = require("./user");
const words = require("./words.json");



// Pratiklerin linkleriyle birlikte listelendiği sayfa için kullanıcıya özel pratik listesi endpointi
router.get('/storylist', verifyToken, async(req,res) => {
    
    //Emailde kayıtlı kullanıcı var mı bak?
    const ml = req.email;
	const resp = await db.collection("users").where("email", "==", ml).get()
	if(!resp.docs) return res.status(500).send("Internal server error");
	const user = {id: resp.docs[0].id,...resp.docs[0].data()}
    //Kullanıcıyı bul ve level listesini al
    const st = user && user.level[1];
    /**
     * level : [
				{type:"mb", completed: [], fail: 0, waiting:0},
				{type:"st", completed: [], fail: 0, waiting:0}
			]
     * 
     */
    // İlgili lojiği implement et type ve orderlarına göre yeni bir liste döndür
        // Dönecek verinin detayları : [{title : "Mind Bullets", practices : [ {name:" I ", status: "Ready", wordCount:10, Time: 0, Type:"Basic"} , {} ]} , ]
        // Pratiğin ilk 3 lüsü zamansız ve 10 kelime
            // 1. Kelimeler görünür, hazır diyince sayılar kalır kelimeler yerine input alanları gelir
            // 2. Sayılar rastgele gelir karşısında input alanları olur
            // 3. Sayılar gelmez input alanları ile kelimeler gelir sıralama önemli değil
        // Pratiğin orta 3 lüsü zamanlı 10 kelime
        // Pratiğin son 3 lüsü zamanlı 20 kelime

        const obj = 
            [
                {title:"Story Practice I", desc:"Click start when you memorized all", status: st.completed === 0 ? "success" : "primary"},
                {title:"Story Practice II", desc:"You have time to complete", status: st.completed === 1 ? "success" : "primary"}
            ]
        
        res.send(obj);




        /*
        const practices = [];
        let status = "Available";
        for(let i = 1; i<10; ++i){
            if(level[0].completed.includes(i)) status = "Completed";
            else if(level[0].fail == i) status = "Failed";
            else if(level[0].completed[level[0].completed.length -1] < i) status = "Locked";
            let obj = {name: i, status = status, wordCount: i > 6 ? 20:10 , time: i>3 ? 5: 0, Type:"Basic"}
            practices.push(obj);
            
        }
        const mindBullets = {title : "Mind Bullets", practices : practices};

        const practices2 = [];
        status = "Available";
        for(let i = 1; i<10; ++i){
            if(level[0].completed.includes(i)) status = "Completed";
            else if(level[0].fail == i) status = "Failed";
            else if(level[0].completed[level[0].completed.length -1] < i) status = "Locked";
            let obj = {name: i, status = status, wordCount: i > 6 ? 20:10 , time: i>3 ? 5: 0, Type:"Basic"}
            practices2.push(obj);
            
        }
        const story = {title : "Mind Bullets", practices : practices2};
        res.json([mindBullets, story]);
        res.end();
        */
})

router.get('/mindBulletList', verifyToken, async(req,res) => {
    
    //Emailde kayıtlı kullanıcı var mı bak?
    const ml = req.email;
	const resp = await db.collection("users").where("email", "==", ml).get()
	if(!resp.docs) return res.status(500).send("Internal server error");
	const user = {id: resp.docs[0].id,...resp.docs[0].data()}
    //Kullanıcıyı bul ve level listesini al
    const st = user && user.level[0];
    console.log(st);

        const obj = 
            [
                {title:"Mind Bullet Practice I", desc:"Click start when you memorized all", status: st.completed === 0 ? "success" : "primary"},
                {title:"Mind Bullet Practice II", desc:"You have time to complete", status: st.completed === 1 ? "success" : "primary"}
            ]
        
        res.send(obj);

})


router.post("/save", verifyToken, async (req,res) => {
    //Emailde kayıtlı kullanıcı var mı bak?
    const ml = req.email;
    const resp = await db.collection("users").where("email", "==", ml).get()
    if(!resp.docs) return res.status(500).send("Internal server error");
    const user = {id: resp.docs[0].id,...resp.docs[0].data()}
    const completedLs = [...user.completedEx];

    completedLs.push(req.body);4
    const newUsr = {...user, completedEx: [...completedLs]};
    await db.collection("users")
	.doc(user.id)
	.set(newUsr)//Update etmek için doğrudan yeni user yeni json objesini set edebiliriz.
    .then(resp => console.log("User updated succesfully"))
    .catch(e => res.status(500).send("Error Occured"));
    res.status(200).send("Saved");
})




// Bir pratiğin türüne ve zorluğuna göre kelime döndürme endpointi  
router.get("/getWords", verifyToken, async (req,res) => {
    const type = req.params.type;
    const order = req.params.order;
    const index = type == "mb" ? 0 : 1;
    //console.log("Level type endpoint");
    let resp = await db.collection("users").where("email", "==", req.email).get()	
    //if(resp.docs.length != 0) return res.status(400).send("Email already registered");

    const usr = resp.docs[0].data();
    const lastIndex = usr.level[index].completed.length-1;
    //if(usr.level[index].fail == order || usr.level[index].completed[lastIndex]+1 == order){
        //Return practice logic will be implemented here
	const randomWords = [];
	for(let i = 0; i< 10; ++i){
		randomWords.push(words.words[Math.ceil(Math.random() * 3000)]);
	}
        return res.send(randomWords);
    //}else {
       // return res.status(403).send("You don't have permission to access this practice");
    //}
    
    
})

//Kullanıcı pratiği tamamladığında dönecek olan endpoint






module.exports = router;