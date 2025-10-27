import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import request from "../api/apiClient";

export default function ProductDetailsPage() {

  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)


  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await request.products.details(id);
        setProduct(data);
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchProductDetails();
  }, [id]);

  if (loading) return <Loading message="Yükleniyor..." />
  return <ProductItem product={product} />
}
