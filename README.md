# Exam Schedule for BRACU Students

An interactive web application to view, organize, and cross-check your BRAC University exam schedule.

## Features

- **Add and track courses:** Input your course codes and sections to build a personalized exam schedule.
- **Automatic sorting:** Exam schedule is sorted by date and time.
- **Screenshot capture:** Capture your schedule as an image for easy sharing or saving.
- **Cross-check with official PDF:** Compare your schedule with the official exam PDF for accuracy.
- **Responsive design:** Optimized for both desktop and mobile devices.

## Usage

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Sabbirba10/exam.git
   cd your-repo-name
   ```

2. **Open `index.html` in your browser.**

3. **Add your courses and sections.**

   - Click "Add Course" for each course-section pair.
   - Use "Add More" to add more input rows (up to 7).

4. **Capture your schedule:**  
   Click the **Capture** button to save a screenshot of your schedule.

5. **Cross-check:**  
   Click the **Check** button to compare your schedule with the official PDF.

## Project Structure

- `index.html` – Main HTML file
- `css/styles.css` – Custom styles
- `js/` – JavaScript modules for UI, PDF handling, data, and utilities
- `exam_data.json`, `midterm.json` – Exam data files
- `examData.pdf` – Official exam schedule PDF

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [PDF.js](https://mozilla.github.io/pdf.js/)

All dependencies are loaded via CDN.

## Contributing

Pull requests and suggestions are welcome! Please open an issue first to discuss any major changes.

## License

This project is licensed under the MIT License.
