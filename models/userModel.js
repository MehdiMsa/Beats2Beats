const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String, 
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    month: {
        type: String, 
        required: true
    },
    year: {
        type: String, 
        required: true
    },
    likedSongs: {
        type: [String], 
        default: []
    },
    playlists: {
        type: [String], 
        default: []
    },
    isAdmin: {
        type:Boolean,
        default: false
    },
    role: {
        type: Number,
        default: 0,
    },
    cart: {
        type: Array,
        default: []
    },



})

module.exports = mongoose.model('Users', userSchema)