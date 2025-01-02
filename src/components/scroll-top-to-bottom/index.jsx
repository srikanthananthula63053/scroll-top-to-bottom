import useFetch from "../useFetch";



export default function ScrollTopToBottom(){

     const { data, error, pending } = useFetch(
        "https://dummyjson.com/products",
        {}
      );
}