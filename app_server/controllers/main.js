const models = require('../models/tables');
// GET homePage
const homePage = function (req, res) {
    res.status(200);
    res.render('Home.ejs');
}
//GET coreCommiteePage
const coreCommiteePage = async function (req, res) {
    try {
        const datas = await models.CoreCommittee.find();
        res.status(200);
        res.render('Corecommittee.jade', { data: datas });
    } catch (err) {
        console.log(err);
        res.status(400);
        res.render('index.jade', { title: "Error in getting data from database" })
    }

};
//GET membersPage
const membersPage = async function (req, res) {
    try {
        const fac = await models.Members.find({ type: "Faculty" });
        const stu = await models.Members.find({ type: "Student" });
        res.status(200);
        res.render('Members.jade', { facu: fac, stud: stu });
    }
    catch (err) {
        console.log(err);
        res.status(400);
        res.render('index.jade', { title: "Error Occured with database" });
    }

}
//GET contactUsPage
const contactUsPage = function (req, res) {
    res.status(200);
    res.render('ContactUs.ejs');
}
//GET joinAsMember
const joinAsMember = function (req, res) {
    res.status(200);
    res.render('Join.ejs');
}

//POST joinasMember
const putinDB = async function (req, res) {
    var instance = models.intrestedCanditates();
    try {
        const result = await models.intrestedCanditates.find({Phone:req.body.phone_num});
        if(!result){
        instance.Name = req.body.name;
        instance.RollNumber = req.body.rollNumber;
        instance.Department = req.body.dept;
        instance.Year = req.body.year;
        instance.Phone = req.body.phone_num;
        await instance.save();
        res.status(201);
        res.render('success1.ejs');}
        else{res.status(400);
            res.render('index.jade',{title:"Form already submitted previously!"});}

    }
    catch (err) {
        res.status(400);
        res.render('index.jade', { title: 'Unable to submit the form' });

    }

}

//GET Events Page
const eventsPage = function (req, res) {
    res.status(200);
    res.render('Events.ejs');
}

// POST Notifications
const notification = async function (req, res) {
    try {
        const result = models.notification.find({Phone:req.body.phone});
        if(!result){
        var instance =  models.notification();
        instance.Phone = req.body.phone;
        await instance.save();
        res.status(201);
        res.render('success2.ejs');}
        else{
            res.status(400);
            res.render('index.jade',{title:"Already subscribed to notifications!"});
        }
    }
    catch (error){
        res.status(400);
        console.log(error);
        res.render('index.jade', {title: 'Error with Database'});
    }
}
//Exporting all the functions
module.exports = {
    homePage,
    coreCommiteePage,
    membersPage,
    contactUsPage,
    joinAsMember,
    eventsPage,
    putinDB,
    notification
};