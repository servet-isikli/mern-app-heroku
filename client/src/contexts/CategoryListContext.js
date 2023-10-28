// import React, { createContext, useState, useEffect, useContext } from "react";

// const CategoryListContext = createContext();

// export const useCategoryListContext = () => {
//   return useContext(CategoryListContext);
// };

// export const CategoryListProvider = ({ children }) => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("/api/categories")
//       .then((response) => response.json())
//       .then((data) => setCategories(data))
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, []);

//   return (
//     <CategoryListContext.Provider value={categories}>
//       {children}
//     </CategoryListContext.Provider>
//   );
// };
