import imageUser from "../../assets/imageUser.jpg"
import headerBanner from "../../assets/headerBanner.png"
import "./profileInfo.style.css"
export function ProfileInfo() {
    return (
        <div
            className="containerProfileInfo"
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column'
                }}
            >
                <img
                    src={headerBanner}
                    style={{
                        width: "100%",
                        objectFit: "contain",
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                />
                <img
                    src={imageUser}
                    width={100}
                    height={100}
                    style={{
                        position: "absolute",
                        objectFit: "cover",
                        borderRadius: 100,
                        marginLeft: 20,
                        marginTop: 20
                    }}
                />
            </div>
            <div
                className="squadInfo"
            >
                <div
                    className="titleInfo"
                >
                    SQUAD
                </div>

            </div>
            <div
                className="projetoInfo"
            >
                <div
                    className="titleInfo"
                    style={{
                        alignSelf: 'flex-start'
                    }}
                >
                    PROJETO
                </div>

            </div>
        </div>
    )
}