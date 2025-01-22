import { ChangeEventHandler } from "react"
import "./input.style.css"

interface IInput {
    value?: string
    label: string
    name: string
    placeholder?: string
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export function Input({ value, label, name, placeholder, type, onChange }: IInput) {
    return (
        <div className="CommonContainerInput">
            {label && <label htmlFor="input-field">{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}