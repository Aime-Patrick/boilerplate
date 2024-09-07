import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try {
        const url = process.env.NODE_ENV === 'production' ? process.env.MONGO_URL_PRO : process.env.NODE_ENV === 'test' ? process.env.MONGO_URL_TEST_DB : process.env.MONGO_URL_DEV;
        await mongoose.connect(url);
        console.log('Database connected');
    } catch (error) {
        console.log(`Database connection error: ${error.message}`);
        process.exit(1);
    }
}