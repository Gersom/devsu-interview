const formatDate = (isoDate) => {
  // Crear un objeto Date a partir de la cadena ISO
  const date = new Date(isoDate);

  // Obtener el día, el mes y el año
  const day = date.getUTCDate().toString().padStart(2, '0'); // Añadir ceros a la izquierda si es necesario
  const year = date.getUTCFullYear();

  // Array de meses en español
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  // Obtener el nombre del mes
  const month = months[date.getUTCMonth()];

  // Formatear la fecha
  return `${day} de ${month} del ${year}`;
}

export default formatDate