import React, { ReactNode, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

interface CollapsibleProps {
    title: string;
    content: string;
}

const Collapsible = ({ title, content }: CollapsibleProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState<number | null>(null);
    const contentControls = useAnimation();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, []);

    useEffect(() => {
        if (contentHeight !== null) {
            contentControls.start(isExpanded ? { height: "auto" } : { height: 0 });
        }
    }, [isExpanded, contentControls, contentHeight]);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div onClick={handleToggle} className="text-xl px-4 hover:cursor-pointer hover:text-white transition-all duration-200 ease-in">
                <h2 className="relative z-20">{title}</h2>
            </div>
            <motion.div
                animate={contentControls}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="backdrop-blur-lg bg-gray-500/10 p-6" ref={contentRef}>
                    {content}
                </div>
            </motion.div>
        </div>
    );
};

Collapsible.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Collapsible;
