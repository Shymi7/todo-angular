import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const postSchema = new mongoose.Schema({
    title: { type: String },
    imgURL: { type: String },
    text: { type: String },
    userId: { type: String },
    date: { type: String },
}, {
    collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('post', postSchema);

async function query() {
    const result = await PostModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function getAllFromUser(user_id) {
    const result = await PostModel.find({userId: user_id});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}
async function get(id) {
    return PostModel.findOne({ _id: id }).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new PostModel(data)
                .save()
                .then(result => {
                    if (result) {
                        return mongoConverter(result);
                    }
                    throw new Error('Failed to save post');
                });
        } else {
            return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), { new: true })
                .exec()
                .then(result => {
                    if (result) {
                        return mongoConverter(result);
                    }
                    throw new Error('Failed to update post');
                });
        }
    });
}

async function deleteById(id) {
    return PostModel.findByIdAndDelete(id);
}

export default {
    query: query,
    getAllFromUser: getAllFromUser,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    deleteById: deleteById,
    model: PostModel
};
