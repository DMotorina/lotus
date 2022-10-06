import { useParams } from "react-router-dom";

export const BoardPage = () => {
    const params = useParams()

    return (
        <div>
            <h1>Hello!</h1>
            <h2>slug URL: {params.slug}</h2>
        </div>
    )
}