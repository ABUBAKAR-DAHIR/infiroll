import { api } from "../libs/api";

export const fetchQuotes = async ({pageParam=0} : {pageParam: number}) => {
    try {
        const res = await api.get("",{
            params: {
                category: "coding",
                limit: 8, 
                offset: pageParam
            }
        });
        return res.data;
    } catch (error: any) {
        console.error('Error fetching quotes:', error);
        return error.message || 'An error occurred while fetching quotes.';
    }
}