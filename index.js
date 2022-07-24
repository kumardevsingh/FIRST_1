const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const uri = "mongodb+srv://singhkumardev:DevAnju12345@nodedev.igsft.mongodb.net/products?retryWrites=true&w=majority";




mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (res) => {
    console.log("connection done!!")
    console.log(res);
    main();
});


const main = () => {
    try {
        const userSchema = mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            email: {
                type: String,
                required: true,
                unique: true,
                match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            },
            password: { type: String, required: true }
        });

        const UserModel = mongoose.model('users', userSchema);
        let user = new UserModel({
            _id: ObjectId("123456783017"),
            email: "fromNodejs4@gmail.com",
            password: "forTestingPurpose"
        });
        user.save().then((userRes) => {
            console.log(userRes)
        }, error => {
            console.log("--------------- ERROR IN SAVING DATA ------------------- ", JSON.stringify(error));
            //throw new Error(error);
        });

    } catch (error) {
        console.log("==================== ERROR ==================", error)
    }

}


