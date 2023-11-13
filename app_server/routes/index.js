var express = require('express');
var router = express.Router();

//Importing Controllers to use
const ctrls = require("../controllers/main");

// GET homePage 
router.get('/',ctrls.homePage);

//GET coreCommiteePage
router.get('/CoreCommittee',ctrls.coreCommiteePage);

//GET membersPage
router.get('/Members',ctrls.membersPage);

//GET contactUsPage
router.get('/ContactUs',ctrls.contactUsPage);

//GET joinAsMember
router.get('/Join',ctrls.joinAsMember);

//POST joinasMemeber
router.post('/Join',ctrls.putinDB);

//GET Events Page
router.get('/Events',ctrls.eventsPage);

//POST notifications
router.post("/notify",ctrls.notification);

module.exports = router;
