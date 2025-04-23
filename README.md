Outfit Builder
A Next.js application that allows users to build outfits by dragging and dropping clothing items onto a canvas, with the ability to save outfits to a cart.
Features

Drag-and-Drop Interface: Drag clothing items (shirt, pants, jacket, dress, hat, shoes) from the sidebar and drop them onto the canvas to compose an outfit.
Outfit Composition Canvas: A centered canvas area where users can visually assemble outfits. Items are automatically centered horizontally for a clean look.
Add to Cart: Save your composed outfit to a cart, which persists in localStorage for future sessions.
Clear and Reset: Clear the canvas with the "Clear" button or reset the entire app (including the cart) with the "Reset" button.
Responsive Design: The app is responsive and adjusts layout for smaller screens (e.g., mobile devices).

Prerequisites

Node.js: Ensure you have Node.js installed (version 14.x or later recommended).
npm or yarn: Package manager to install dependencies.

Installation

Clone the Repository (if applicable):
git clone <repository-url>
cd outfit-builder

Install Dependencies:Using npm:
npm install

Or using yarn:
yarn install

This will install the required dependencies, including:

next
react
react-dom
react-dnd (for drag-and-drop functionality)
react-dnd-html5-backend
prop-types

Running the App Locally

Start the Development Server:Using npm:
npm run dev

Or using yarn:
yarn dev


Open the App:Open your browser and navigate to http://localhost:3000. You should see the Outfit Builder app running.

Project Structure

pages/index.jsx: The main page component that renders the outfit builder interface.
components/ClothingItem.jsx: A draggable clothing item component.
components/OutfitCanvas.jsx: The canvas area where users drop clothing items to compose outfits.
styles/global.css: Global styles for the app, including layout, typography, and responsive design.
public/clothing/: Directory containing clothing item images (e.g., shirt.png, pants.png). Ensure these images are present for the app to render correctly.

Additional Instructions

Image Assets:

The app expects clothing item images to be in the public/clothing/ directory (e.g., public/clothing/shirt.png). If these images are missing, the app will not display the clothing items.
If you don’t have the images, you can replace the src paths in pages/index.jsx with placeholder URLs or add your own images to the public/clothing/ directory.


Customizing Positions:

To adjust the vertical position of items on the canvas, modify the getPosition function in components/OutfitCanvas.jsx. For example, change the top value for the hat:case 'hat':
  return { top: '20px' }; // Increase to move the hat down


Troubleshooting:

If drag-and-drop doesn’t work, ensure react-dnd and react-dnd-html5-backend are installed correctly.
Check the browser console (F12) for errors related to image loading or drag-and-drop events.
If items are not centered on the canvas, adjust the CSS in styles/global.css under .canvas-container img.clothing:.canvas-container img.clothing {
  left: 50%;
  transform: translateX(-50%);
}


Deployment:

To deploy the app, build it using npm run build or yarn build, then deploy the output to a hosting service like Vercel, Netlify, or a custom server.


Future Improvements

Add a cart preview to display saved outfits.
Allow users to remove specific items from the canvas by clicking on them.
Add more clothing items or customization options (e.g., colors, sizes).

