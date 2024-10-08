# Furkan Store

<div align="center">
  <img src="./public/furkan-store.gif" />
</div>

## About the Project

In the project I created with Next JS, after entering the login information, you are directed to a site consisting of home, products, and about pages. On this site, you can explore many products and view additional images of the desired product. The about section contains information about our team, along with links to their GitHub and LinkedIn profiles for further interaction.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Skeleton](#project-skeleton)
- [Screenshots](#screenshots)

## Live Demo

[Furkan Store](https://furkan-store-with-nextjs.vercel.app/)

## Backend

- [Codes](https://github.com/furkan-dogu/ProductAPI-2)
- [Live](https://product-api-2.vercel.app/)

## Features

- Logging in with email and password information
- Pagination for smooth transitions between pages.
- Easy product search using the filtering feature.

## Technologies Used

- React
- Redux
- Axios for API requests
- Next JS
- [Product API 2](https://github.com/furkan-dogu/ProductAPI-2) for products data
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Styling with [Tailwind](https://tailwindcss.com/) and CSS 
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/) for alert 

## Usage

- When you hover over the email and password fields in the login section, the login email address and password are visible.
- Access detailed information and reviews for each item.
- Use the search function to find specific products.

## Project Skeleton

```
Furkan Store (folder)
│
├── app
│    ├── dashboard
│    │     ├── about
│    │     │    └── page.jsx
│    │     ├── products
│    │     │    ├── [productId]
│    │     │    │      └── page.jsx
│    │     │    └── page.jsx
│    │     ├── layout.jsx
│    │     └── page.jsx
│    ├── global.css
│    ├── layout.js
│    ├── loading.jsx
│    ├── not-found.jsx
│    └── page.js
├── components
│    ├── Navbar.jsx
│    ├── ProductCard.jsx
│    ├── SearchInput.jsx
│    ├── Stats.jsx
│    └── Testimonial.jsx 
├── context
│    ├── AuthContext.jsx
│    └── ProductContext.jsx 
├── helpers
│    ├── data.js
│    └── ToastNotify.js 
├── hooks
│    ├── useAuthCalls.jsx
│    ├── useAxios.jsx
│    └── useProductCalls.jsx 
├── puclic
│    └── [images] 
├── redux
│    ├── features
│    │     ├── authSlice.jsx
│    │     └── productSlice.jsx
│    ├── provider.jsx
│    └── store.jsx
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── yarn.lock
```

## Screenshots

<div align="center">
  <img src="./public/Screenshot_1.jpg"  width="35%" height="500" />
  <img src="./public/Screenshot_2.jpg"  width="55%" height="600" />
  <img src="./public/Screenshot_3.jpg"  width="90.5%" height="450" />
</div>

## Compatibility

The project is compatible with both wide-screen computers and mobile devices.