import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // URL or path
    description: { type: String },
    price: { type: Number }, // Optional, maybe "Contact for price"
    inStock: { type: Boolean, default: true }
});

export default mongoose.model('Product', ProductSchema);
