import React, { useEffect, useState } from "react";

function ProductList({ category }: { category: string }) {
  const [product, setProduct] = useState<string[]>([""]);

  useEffect(() => {
    console.log(" Fatching Product in ", category);
    setProduct([" Clothing", "household"]);
  }, [category]);
  return <div>ProductList</div>;
}

export default ProductList;
 