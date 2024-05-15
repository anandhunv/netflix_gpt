function convertMinutesToHours(minutes) {
    // Calculate hours and minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    // Return formatted string
    return `${hours} h${remainingMinutes} m`;
  }

  export  default convertMinutesToHours