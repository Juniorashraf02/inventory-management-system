const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true, 
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must atleast 3 characters"],
        maxLength: [20, "Name is too large"],
    },
    description: {
        type: String,
        requied: [true, "description requied"],
    },
    price: {
        type: Number,
        requied: [true, "Price is requied"],
        min: [0, "Price can't be negative"],
    },
    unit: {
        type: String,
        requied: true,
        enum: {
            values: ["kg", "litre", "pcs"],
            message: "unit value can't be {VALUE}. Must be kg/litre/pcs"
        },
    },
    quantity: {
        type: Number,
        required: [true, "quantity required",],
        min: [0, "quantity can't be negative"],
        validate: {
            validator: (value)=>{
                const isInteger = Number.isInteger(value);
                if(isInteger){
                    return true;
                } else {
                    return false;
                }
            }
        },
        message: "Quantity must be an integer"
    },
    status: {
        type: String,
        required: [true, "status is requied"],
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinued'],
            message: "status can't be {VALUE}"
        }
    },
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Supplier"
    // },
    // category: [{
    //     name: {
    //         type: String,
    //         requied: [true, "category name requied"],
    //     },
    //     _id: mongoose.Schema.Types.ObjectId,
    // }],
    // createdAt: {
    //     type: Date,
    //     default: Date.now,,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now,,
    // },

}, {timestamps: true});


module.exports = mongoose.model("Product", productSchema);