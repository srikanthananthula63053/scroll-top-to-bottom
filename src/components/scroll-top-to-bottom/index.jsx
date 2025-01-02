import { useRef } from "react";
import useFetch from "../useFetch";



export default function ScrollTopToBottom() {

    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );
    const bottomRef = useRef(null);

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }


function handleScrollTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}
if (pending) {
    return <h1>data is loading ! please wait</h1>
}
if (error) {
    return <h3>There is an error ! please try again</h3>
}

return (
    <div>
        <h1>Scroll top to bottom</h1>
        <h3>This is top section</h3>
        <button onClick={handleScrollToBottom}>scroll to bottom</button>
        <ul style={{ listStyle: "none" }}>
            {
                data && data.products && data.products.length ?
                    data.products.map(Items => <li>{Items.title}</li>)
                    : null
            }
        </ul>
        <button onClick={handleScrollTop}>scroll to top</button>
        <div ref={bottomRef}></div>
        <h3>This is bottom section</h3>
    </div>
)
}