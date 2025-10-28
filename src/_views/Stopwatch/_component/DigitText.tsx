import { AnimatePresence, motion } from 'framer-motion'
interface Props {
    value: string;
    id: string;
}

function DigitText({ value, id }: Props) {
    return (
        <span className="relative bg-zinc-300 rounded-[4px] text-6xl p-2 ">
            <AnimatePresence>
                <motion.span
                    key={id}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}

export default DigitText