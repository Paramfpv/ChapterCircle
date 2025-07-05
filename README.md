# Chapter Circle - Video Book Summaries

A Netflix-themed website for video book summaries in story format. Transform your reading experience with engaging video content.

## 🚀 Features

- **Netflix-inspired Design**: Dark theme with red accents and modern UI
- **Video Summaries**: Story-format video summaries for books
- **Interactive Book Cards**: Hover effects and modal popups
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: CSS animations and transitions
- **Category Browsing**: Browse books by different categories
- **Search & Profile**: Placeholder functionality for future features

## 📁 Project Structure

```
ChapterCircle/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Main stylesheet
├── scripts/
│   └── main.js            # JavaScript functionality
├── media/
│   ├── logos/
│   │   └── logo.png       # Chapter Circle logo
│   └── books/
│       ├── book1.jpg      # Atomic Habits cover
│       ├── book2.jpg      # Deep Work cover
│       ├── book3.jpg      # Psychology of Money cover
│       ├── book4.jpg      # Thinking Fast and Slow cover
│       ├── book5.jpg      # 7 Habits cover
│       └── book6.jpg      # Rich Dad Poor Dad cover
└── README.md              # This file
```

## 🎨 Design Features

### Netflix Theme Elements
- Dark background (#0f0f0f, #1a1a1a)
- Red accent color (#e50914)
- Gradient backgrounds
- Card-based layout
- Hover effects and animations

### Interactive Elements
- Book cards with play overlays
- Modal video player
- Smooth scrolling navigation
- Category browsing
- Responsive grid layouts

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop**: Full layout with grid displays
- **Tablet**: Adjusted grid columns
- **Mobile**: Single column layout with optimized spacing

## 🖼️ Image Requirements

### Logo
- **File**: `media/logos/logo.png`
- **Size**: 200x200 pixels or larger
- **Format**: PNG with transparency (recommended)

### Book Covers
- **Files**: `media/books/book1.jpg` through `media/books/book6.jpg`
- **Size**: 300x400 pixels (3:4 aspect ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution for crisp display

## 🚀 Getting Started

1. **Replace Images**: Upload your actual images to the `media/` folder
   - Replace `media/logos/logo.png` with your logo
   - Replace book cover images in `media/books/`

2. **Open Website**: Simply open `index.html` in a web browser

3. **Customize Content**: Edit the HTML and JavaScript files to:
   - Update book titles and authors
   - Modify video descriptions
   - Add more books or categories
   - Customize colors and branding

## 🎯 Key Features Explained

### Video Modal System
- Click any book card to open a video modal
- Modal displays book information and video player placeholder
- Close with X button, clicking outside, or pressing Escape

### Book Data Management
- Book information is stored in the JavaScript file
- Easy to add, remove, or modify books
- Each book has title, author, description, duration, and rating

### Category System
- Six main categories: Psychology, Business, Finance, Self-Help, Productivity, Leadership
- Each category has an icon and description
- Clickable for future filtering functionality

## 🔧 Customization

### Colors
Main colors are defined in CSS variables:
- Primary: #e50914 (Netflix red)
- Background: #0f0f0f (dark)
- Secondary background: #1a1a1a
- Text: #ffffff (white)
- Secondary text: #cccccc (light gray)

### Adding More Books
1. Add book cover image to `media/books/`
2. Add book data to the `bookData` object in `scripts/main.js`
3. Add book card HTML to the featured section in `index.html`

### Modifying Categories
1. Update category cards in the HTML
2. Modify category icons (Font Awesome classes)
3. Update category descriptions

## 📈 Future Enhancements

- **Video Player Integration**: Replace placeholders with actual video players
- **User Authentication**: Login/signup system
- **Search Functionality**: Real search with filters
- **User Profiles**: Watch history, favorites, progress tracking
- **Mobile App**: Native mobile application
- **Backend Integration**: Database and API integration

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features
- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Minimal JavaScript footprint

## 📞 Support

For questions or customization requests, please refer to the code comments or contact the development team.

---

**Chapter Circle** - Transform your reading experience with video summaries in story format. 