export const fetchData = async (API) => {
    try {
        const response = await fetch(API)
        return await response.json();
    } catch(e) {
        console.error(e)
    }
}