# 🛍️ React E‑Commerce Demo with Theme Switcher

A modern **React** e‑commerce demo showcasing **theme switching, API integration, responsive design, and smooth animations**.

---

## ✨ **Features**

- 🎨 **Persistent Themes**

  - Light, Dark, and Colorful modes
  - Theme is stored in `localStorage` to persist across reloads

- 🛠 **Context API**

  - Centralized theme management using React Context

- 🌐 **API Integration**

  - Product data fetched from [FakeStore API](https://fakestoreapi.com/products)
  - Fallback mock data in case of failure

- 📱 **Responsive Design**

  - Built with **Tailwind CSS** and **CSS Modules**
  - Optimized for **mobile, tablet, and desktop**

- 🔄 **Smooth Theme Animations**

  - Subtle loader animation when switching themes

- 🗺 **Multiple Pages with React Router**

  - **Home**, **About**, **Contact**, **Products**, and a custom **404 Error** page

- 🔒 **Secure and Modern**
  - HTTPS API calls
  - Safe rendering (no HTML injection)

---

## 🚀 **Getting Started**

### **Prerequisites**

1. **Node.js**  
   Download and install **Node.js LTS**:  
   👉 [https://nodejs.org](https://nodejs.org)

   Verify installation:

   ```bash
   node -v
   npm -v
   ```

2. **Visual Studio Code**  
   Download and install:  
   👉 [https://code.visualstudio.com](https://code.visualstudio.com)

---

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/arjun-rastogi/multi-theme-switcher-app
   cd multi-theme-switcher-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   - CRA: <http://localhost:3000>

---

### **Available Scripts**

- `npm start` – Run the development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

## 🛠 **Tech Stack**

- **React 18+**
- **Tailwind CSS** for fast styling
- **React Router DOM** for routing
- **Context API** for global state
- **Axios** for API calls
- **FakeStore API** as product data source

---

## 📂 **Project Structure**

```
src/
  ├── components/
  │     ├── Header.tsx
  │     ├── Footer.tsx
  │     ├── Loader.tsx
  │     └── Products.tsx
  ├── pages/
  │     ├── Home.tsx
  │     ├── About.tsx
  │     ├── Contact.tsx
  │     ├── Error.tsx
  ├── ThemeContext.tsx
  ├── App.tsx
  ├── main.tsx
  └── index.css
```

---

## 🔗 **API**

**Endpoint:**

```
https://fakestoreapi.com/products
```

**Fallback:**

- If the API is slow or fails, mock data is displayed.

---

## 🎨 **Theme Modes**

- **Light (Default)**
- **Dark**
- **Colorful (gradient background)**

Each theme is stored in `localStorage` and applied globally.

---

## 📱 **Responsive Design**

Tested on:

- Mobile devices
- Tablets
- Desktop (all screen sizes)

---

## 📜 **License**

This project is for **learning and demo purposes**.

---

### 🧑‍🎨 Author

Made with ❤️ by **Arjun Rastogi**
