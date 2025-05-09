# Contact Form Project

## Overview
This project implements a responsive contact form using React. The form allows users to submit their details including name, email, company, license type, and message. It performs basic validation to ensure that all required fields are filled before submission.

## Features Implemented
- **Form Fields:**
  - Name (Text input)
  - Email (Email input)
  - Company (Text input)
  - License Type (Dropdown select)
  - Message (Textarea)
  
- **Validation:**
  - Ensures that the `name`, `email`, and `message` fields are filled before submission. An error message is displayed if any of these fields are empty.
  
- **Success Alert:**
  - On successful form submission, an alert is shown confirming the message submission.
  
- **Styling:**
  - The form uses Tailwind CSS for responsive and clean styling.
  - Placeholder text for all form fields is styled with black text for readability.
  
- **Responsive Design:**
  - The form is fully responsive and adapts to different screen sizes (mobile, tablet, desktop).
  
## Design Choices
- **Tailwind CSS:** 
  - Tailwind CSS was chosen for its utility-first approach, which allows rapid and flexible styling without the need for custom CSS classes for most common UI patterns.
  
- **Form Validation:**
  - Basic client-side validation is implemented to ensure required fields are filled before the user can submit the form.

- **Responsive Layout:**
  - A mobile-first responsive design ensures the form is user-friendly on devices of all screen sizes, using Tailwind's grid system and responsive utilities.

- **Placeholder Styling:**
  - The placeholder text in form fields is styled to be black for better readability and consistency across browsers.

## Time Spent
- **Time Spent:** Approx. 10 hours
  - This includes the time spent setting up the project, implementing the form, validating the fields, and styling the components.

## Future Improvements
- **Backend Integration:** The form currently does not submit data anywhere. In the future, it could be connected to a backend server to send form data to a database or email.
- **Error Handling:** Enhance error handling to give more specific feedback to the user.
- **Security:** Add additional validation for email and message fields to prevent malicious inputs.
- **Accessibility:** Improve accessibility by adding labels and ARIA roles to all form elements.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/contact-form-project.git
