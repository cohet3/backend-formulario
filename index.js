const mongoose = require('mongoose')
mongoose.set('strictQuery', true);


mongoose.connect('mongodb+srv://danny:EaZanGMNpighMYsB@menu-db.wdyhe.mongodb.net/miapp?retryWrites=true&w=majority')


const User = mongoose.model('User', {
    username: String,
    edad: Number
})

const crear = async () => {
 const user = new User({username: 'pepito', edad: 15})
 const savedUser = await user.save()
 console.log(savedUser)
}

// crear()
const buscarTodo= async ()=>{
    const users = await User.find()
    console.log(users)
}
// buscarTodo()

const buscar = async () => {
    const user= await User.find({ username:'pepito' })
    console.log(user)
}
// buscar()
const buscarUno = async ()=>{
    const user = await User.findOne({ username: 'pepito' })
    console.log(user)
}
// buscarUno()
const actualizar = async () => {
    const user = await User.findOne({username: 'pepito'})
    console.log(user)
    user.edad = 32
    await user.save()
}
// actualizar()
const eliminar = async () => {
    const user = await User.findOne({ username: '*'})
    console.log(user)
    if (user){
      await user.remove()
  }
}
// eliminar()
