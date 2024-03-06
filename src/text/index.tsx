import { TextProps } from "./types";

const Text = ({ children, fontSize }: TextProps) => {
    return (
        <div style={{ fontSize: fontSize }}>{children}</div>
    )
}

export default Text;