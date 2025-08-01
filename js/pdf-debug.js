// Debug script to check PDF accessibility
window.addEventListener('DOMContentLoaded', function() {
  const pdfPath = 'examData.pdf';
  console.log('Checking PDF accessibility for:', pdfPath);
  
  fetch(pdfPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(HTTP error! Status: );
      }
      console.log('PDF file is accessible:', pdfPath);
      return response.blob();
    })
    .then(blob => {
      console.log('PDF file size:', Math.round(blob.size / 1024), 'KB');
    })
    .catch(error => {
      console.error('PDF file access error:', error);
    });
});
