import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for the theme
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
  
  :root {
    --tactical-green: #2C3E2D;
    --tactical-brown: #644E3A;
    --tactical-orange: #FF5722;
    --tactical-beige: #F5F3EF;
    --tactical-dark: #1A1A1A;
  }

  .font-barlow {
    font-family: 'Barlow Condensed', sans-serif;
  }
  
  .font-roboto {
    font-family: 'Roboto', sans-serif;
  }
  
  .font-blackops {
    font-family: 'Black Ops One', cursive;
  }
  
  .section-heading::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--tactical-orange);
    margin-top: 8px;
    margin-inline: auto;
  }
  
  .hero-pattern {
    background-image: url('https://images.unsplash.com/photo-1598587741472-a4861422863a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
