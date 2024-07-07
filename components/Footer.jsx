import React from "react";
import { Button } from "./ui/button";

export default function Footer({ onClear = () => { }, children }) {
    return (
        <footer className="py-2 px-3 sm:px-6 flex items-center gap-2 justify-between">
            <div className="flex items-center">
                <Button size="sm" onClick={onClear} style={{ marginRight: '10px' }}>Clear</Button>
                {children}
            </div>
        </footer>
    )
}