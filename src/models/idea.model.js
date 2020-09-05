const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String, required: false },
    upvotes: [{ type: Boolean, required: false }],
    downvotes: [{ type: Boolean, required: false }],
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment', required: true, autopopulate: true }]
});

IdeaSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('idea', IdeaSchema);