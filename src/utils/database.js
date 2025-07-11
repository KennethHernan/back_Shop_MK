// utils/database.js
import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(
      'mongodb+srv://Kenneth:Kenneth2829@mayikh-style.n0wg4b0.mongodb.net/DB_Mayikh'
    );

    isConnected = true;
    console.log(`✅ Conectado a MongoDB: ${db.connection.name}`);
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    throw error;
  }
}
