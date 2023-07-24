export async function fetchData() {
    const response = await fetch('http://localhost:8000/transactions');
    const data = await response.json();
    console.log(data);
    return data;
}
