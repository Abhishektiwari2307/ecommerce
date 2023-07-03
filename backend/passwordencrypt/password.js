const bcrypt=require('bcrypt')

const saltrounds=10;

const genhash= async (password)=>
{
    return bcrypt.hash('password',10)
} 




module.exports=genhash;