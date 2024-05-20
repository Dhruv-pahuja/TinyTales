const {Schema,model} = require('mongoose')

const blogSchema = new Schema({
    title:{
        type : String,
        requried : true,
    },
    body : {
        type : String,
        requried : true,
    },
    coverImageURL : {
        type : String,
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    }
},{timestamps: true})

const Blog = model('blog',blogSchema)

module.exports = Blog