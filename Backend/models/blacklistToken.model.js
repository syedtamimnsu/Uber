const mongoose = require('mongoose');

// database schema for blacklist token
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '86400' // Token will expire after 1 day
    }
})

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);