const express=require("express");
const imageGenerator = require("../imageGenerating");
const chatComplete = require("../textStreaming");
const router=express.Router();

router.post('/image-generator',imageGenerator)
router.post('/chat-complete',chatComplete)

module.exports=router;


