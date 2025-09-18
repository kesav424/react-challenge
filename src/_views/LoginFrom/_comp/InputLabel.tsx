import { cn, tv } from "@/_utils/tailwind.utils";
import { ComponentProps } from "react";


interface InputFormFeildProps extends ComponentProps<'label'> {
    className?: string;
    children: React.ReactNode
}

function InputLabel(props: InputFormFeildProps) {
    const { className = "", children, ...rest } = props;

    const formFelidVarien = tv({
        base: ""
    })

    return (
        <label
            className={cn(formFelidVarien(), className)}
            {...rest}
        >
            {
                children
            }
        </label>
    )
}

export default InputLabel