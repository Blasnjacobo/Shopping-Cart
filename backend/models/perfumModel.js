import mongoose from "mongoose";

const perfumeSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        aroma: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Perfume = mongoose.model('Perfume', perfumeSchema )