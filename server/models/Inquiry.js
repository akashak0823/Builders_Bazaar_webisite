import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerEmail: { type: String },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        productName: { type: String },
        quantity: { type: Number, default: 1 }
    }],
    remarks: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Inquiry', InquirySchema);
