# Skime Restaurant Management System

A comprehensive Restaurant Order & Table Management System built with HTML, CSS, Bootstrap, and JavaScript following the MVC architecture pattern.

## Overview

This project implements a restaurant management system with a focus on both table reservations and food ordering functionality. The system features a clean, responsive design with an intuitive user interface.

## MVC Architecture

This project follows the Model-View-Controller (MVC) architectural pattern:

### Model (Data Layer)

While this is primarily a frontend implementation, the data structures and schemas are defined within the JavaScript files. In a full implementation, this would connect to a backend database system.

- **Data Models**: Currently simulated in JavaScript for demonstration purposes
- **Future Implementation**: Will connect to a proper backend database (MySQL, MongoDB, etc.)

### View (Presentation Layer)

The View layer consists of all HTML files that represent the user interface.

- **index.html** - Homepage with hero section, services, and featured items
- **menu.html** - Menu display with filtering capabilities
- **list.html** - Reservations and order management interface
- **add.html** - Reservation form for booking tables
- **contact.html** - Contact information and messaging form
- **base.html** - Template file containing common elements (used for future template implementation)

### Controller (Business Logic)

The controller logic is handled by JavaScript embedded in each HTML file, managing user interactions and data flow.

- **Form handling** - Validation and submission logic
- **Dynamic content** - Menu filtering, reservation management
- **Interactive features** - Map display, form interactions

## Features

- **Home Page**: Engaging landing page with hero section and restaurant highlights
- **Menu Display**: Comprehensive menu with categories and item details
- **Reservation System**: Form to book a table with date, time, and guest details
- **Order Management**: Cart functionality for food ordering
- **Reservations List**: Table to view and manage all reservations and orders
- **Contact Page**: Location information with interactive map

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **Bootstrap 5** - Responsive layout and components
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Leaflet.js** - Interactive map implementation

## Pages and Their Functionality

1. **index.html** - Home Page

   - Hero section with animated text effects
   - Service offerings section
   - Featured menu items
   - About section with restaurant information

2. **menu.html** - Menu Page

   - Categorized food items
   - Filter functionality
   - Item details with pricing
   - "Add to Order" functionality

3. **list.html** - Reservations & Orders Page

   - Active reservations listing
   - Order cart interface
   - Filtering and search capabilities
   - Action buttons for managing reservations

4. **add.html** - Reservation Form

   - Interactive booking form
   - Date and time selection
   - Guest details collection
   - Floor and table selection options

5. **contact.html** - Contact Page
   - Contact form for inquiries
   - Restaurant location and hours
   - Interactive map of Lahore location
   - Quick access links

## File Structure

```
├── index.html            # Landing page
├── menu.html             # Restaurant menu display
├── list.html             # Reservations and orders list
├── add.html              # Reservation form
├── contact.html          # Contact information and form
├
├── css/                  # Style files
│   └── main.css          # Shared styles
├── images/               # Image assets for the site
└── README.md             # Project documentation
```

## Responsive Design

The website is fully responsive and optimized for:

- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## How to Run

1. Clone the repository or download the files
2. Open index.html in any modern web browser
3. Navigate between pages using the navigation bar
4. No server setup is required for this frontend implementation

## Future Improvements

- **Backend Integration**: Connect to a server using Django, Flask, or Express.js
- **Database Implementation**: Add actual database functionality with MySQL or MongoDB
- **User Authentication**: Add login and user account management
- **Online Payment**: Integrate payment gateway for online orders
- **Reservation Confirmation**: Email and SMS notification system
- **Admin Dashboard**: Management interface for restaurant staff

## Location

Skime Restaurant is located at 123 MM Alam Road, Gulberg III, Lahore, Pakistan.

## Credits

- Bootstrap: https://getbootstrap.com/
- Font Awesome: https://fontawesome.com/
- Leaflet.js: https://leafletjs.com/
