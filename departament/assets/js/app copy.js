// Reemplaza 'YOUR_API_KEY' y 'YOUR_BASE_ID' con tus valores reales
const token = 'pat9q7Hv8T9JuoFOi';
const baseId = 'apprxKrywqFE1aLwY';

// URL de la API de Airtable
const apiUrl = `https://api.airtable.com/v0/${baseId}/university`;

// Encabezados de la solicitud con el token de autenticación
const headers = {
    Authorization: `Bearer ${token}`,
};

// Realiza una solicitud GET a Airtable
fetch(apiUrl, { headers })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
