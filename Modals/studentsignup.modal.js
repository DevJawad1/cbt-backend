const mongoo=require ('mongoose')
const bcrypt= require('bcrypt')
const signup= mongoo.Schema({
    fullname:String,
    gender:String,
    grade:String,
    grade2:String,
    username:String,
    password:String,
})

let saltround= 10
signup.pre('save', function(next){
    if(this.isModified('password')|| this.isNew){
        bcrypt.hash(this.password, saltround, (err, hash)=>{
            if(err){
                console.log('error occur when hashing', err);
            }
            else{
                this.password= hash
                console.log(this.password, ' password hash');
                next()
            }
        } )
    }
})
signup.methods.comparePass= async function(password){
    try{
        const comparePassword = await bcrypt.compare(password, this.password)
        return comparePassword
    }catch(err){
        console.error(err);
        return false;
    }
}
let allUser = mongoo.model('allstudent', signup)
module.exports=allUser