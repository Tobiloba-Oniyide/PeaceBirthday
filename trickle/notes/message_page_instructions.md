# Message Page Content Management

## How to Add Content

### 1. Photo Gallery
To add photos of you and Peace to the gallery:
- Use the database tool to create `memory_photo` objects
- Each photo needs a `url` field with the image URL
- Optional `caption` field for photo descriptions

### 2. Slideshow/PowerPoint
To add your PowerPoint slideshow:
- Use the database tool to create a `slideshow_config` object with ID `main`
- Add a `url` field containing your PowerPoint/Google Slides embed link
- Example: Share your PowerPoint as a web link or use Google Slides publish to web feature

### 3. Long Birthday Message
To add your heartfelt birthday message:
- Use the database tool to create a `birthday_message` object with ID `main`
- Add a `content` field with your long message text
- The message will be displayed with proper formatting

## Database Objects

- **memory_photo**: Photos of memories together
- **slideshow_config**: PowerPoint/slideshow embed URL
- **birthday_message**: Your personal birthday message for Peace