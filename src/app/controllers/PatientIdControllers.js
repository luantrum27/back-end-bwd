const PatientId = require("../models/PatientId")

class PatientIdControllers {

    // [GET] /check
    async check(req, res) {
        let patientId = await PatientId.findOne({IdCard: req.body.IdCard});
        if (patientId.status === false) {
            res.send("IdCard have already run!");
        }
        else {
            res.send("IdCard not found");
        }
    }

    async add(req, res) {
        let patientID = new PatientId(req.body);
        let result = await patientID.save();
        res.send(result);
    }

}

module.exports = new PatientIdControllers