const API = "http://localhost:8080";

export async function analyzeEmail(email) {

    const response = await fetch(`${API}/analyze`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    });

    if (!response.ok) {
        throw new Error("Server Error");
    }

    return await response.json();
}