import "./header.style.css"
import imageUser from "../../assets/imageUser.jpg"

export function Header() {

    return (
        <div
            id="header"
        >
            <img
                src={imageUser}
                width={60}
                height={60}
                style={{
                    objectFit: "cover",
                    borderRadius: 60,
                    marginRight: 20
                }}
            />
        </div>
    )
}