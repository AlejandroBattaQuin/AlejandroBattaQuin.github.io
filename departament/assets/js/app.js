const Airtable = require('airtable');

// Inicializa la instancia de Airtable con tu API Key
const base = new Airtable({ apiKey: 'pat9q7Hv8T9JuoFOi' }).base('apprxKrywqFE1aLwY');

// Consulta la base de datos y obtén registros
base('BBDD - Styles').select({
    // Opciones de consulta, por ejemplo:
    maxRecords: 10, // Máximo de registros a recuperar
    // view: 'Vista Personalizada', // Nombre de una vista personalizada
}).eachPage(function page(records, fetchNextPage) {
    // Procesa los registros obtenidos
    records.forEach(function(record) {
        console.log('Registro:', record.get('cod_university'));
    });

    // Continúa recuperando más registros si es necesario
    fetchNextPage();
}, function done(err) {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Todos los registros recuperados.');
});
