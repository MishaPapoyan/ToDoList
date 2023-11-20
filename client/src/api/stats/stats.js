import axios from "axios";

export async function getStats() {
    try {
        const response = await axios.get('http://localhost:8000/auth/get_stats');
        const data = await response.data;
        return data;
    } catch (error) {
        console.error('An error occurred during registration:', error);
    }
}