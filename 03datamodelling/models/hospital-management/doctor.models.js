import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({},{timeStamps:true});

export const Doctor = mongoose.model('Doctor',doctorSchema);