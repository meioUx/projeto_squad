import imageUser from "../../assets/imageUser.jpg"
import headerBanner from "../../assets/headerBanner.png"
import "./profileInfo.style.css"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { api, endpoint } from "../../services/api"
import { ISquad } from "../../interfaces/squad.interface"
import { IProject } from "../../interfaces/projects.interface"
export function ProfileInfo() {
    const [squads, setSquads] = useState<ISquad[]>([])
    const [projects, setProjects] = useState<IProject[]>([])
    useEffect(() => {
        (async () => {
            const responseSquad = await api.get(endpoint.squads)
            const responseProjects = await api.get(endpoint.projetos)
            setSquads(responseSquad.data)
            setProjects(responseProjects.data)
        })()
    }, [])
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
                <NavLink to={"/criarsquad"} className="titleInfo" style={{
                    alignSelf: 'flex-start'
                }}>
                    SQUAD
                </NavLink>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5
                    }}
                >
                    {
                        squads.map(squad => (
                            <div
                                style={{
                                    display: 'flex',
                                    backgroundColor: '#d3d3d3',
                                    padding: 20,
                                    borderRadius: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {squad.nome}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div
                className="projetoInfo"
            >
                <NavLink to={"/criarprojeto"} className="titleInfo"
                    style={{
                        alignSelf: 'flex-start'
                    }}
                >
                    PROJETO
                </NavLink>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5
                    }}
                >
                    {
                        projects.map(project => (
                            <div
                                style={{
                                    backgroundColor: '#d3d3d3',
                                    padding: 5,
                                    borderRadius: 10
                                }}
                            >
                                {project.nome}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}