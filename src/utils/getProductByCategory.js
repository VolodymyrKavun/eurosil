"use client";

export const getProductByCategory = (array, pathName) => {
  const category = pathName?.slice(11);
  const data = array.find((item) => item.category === category);
  console.log("🚀 ~ getProductByCategory ~ data:", data);
  return data;
};
