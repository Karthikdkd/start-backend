import mongoose from 'mongoose';

const medicalRecordSchema = mongoose.Schema({},{timeStamps:true});

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);