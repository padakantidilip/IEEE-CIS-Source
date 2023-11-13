const mongoose = require('mongoose');
const Schemas = require('./schemas');
const CoreCommittee = mongoose.model('CoreCommittee',Schemas.CoreCommitteeSchema);
const Members = mongoose.model('Members',Schemas.MembersSchema);
const intrestedCanditates = mongoose.model('IntrestedCandidates',Schemas.intrestedCanditatesSchema);
const notification = mongoose.model('Notification',Schemas.notificationSchema);


module.exports = {
    CoreCommittee,
    Members,
    intrestedCanditates,
    notification
};