export function getSummary() {
    const API_URL = 'https://api.covid19tracker.ca/summary';
    return fetch(`${API_URL}`).then((data) => data.json());
}