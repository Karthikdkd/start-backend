import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema({},{timeStamps:true});

export const Hospital = mongoose.model('Hospital', hospitalSchema);