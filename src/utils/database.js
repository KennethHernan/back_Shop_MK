// utils/database.js
import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const db = await mongoose.connect('mongodb+srv://Kenneth:Kenneth2829@mayikh-style.n0wg4b0.mongodb.net/DB_Mayikh');
    console.log(`✅ Conectado a MongoDB: ${db.connection.name}`);
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB");
    console.error(error);
    throw error;
  }
}