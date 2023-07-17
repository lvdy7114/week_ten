

const getAllStarships = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const starships = await response.json();
        return starships.results;
    } catch (error) {
        console.error('Error fetching starships', error);
        throw error;
    }
};

export default getAllStarships