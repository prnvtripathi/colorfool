import React from "react";
import { getConversions } from "@/lib/color";
import { useUrlSync } from "@/lib/url";
import FormatRow from "@/components/FormatRow";

export default function ConversionsList() {
    const { getColorParam } = useUrlSync();
    const color = getColorParam();
    interface Conversion {
        label: string;
        value: string;
        [key: string]: unknown;
    }

    let conversions: Conversion[] = [];
    try {
        conversions = color ? getConversions(color) : [];
    } catch {
        conversions = [];
    }
    if (!color) {
        return <div className="text-center text-muted-foreground py-8">Enter a color to see conversions.</div>;
    }
    if (!conversions.length) {
        return <div className="text-center text-muted-foreground py-8">No valid conversions found.</div>;
    }

    console.log("Conver:", conversions)
    return (
        <div className="flex flex-col gap-2" role="list" aria-label="Color conversions">
            {conversions.map(conv => (
                <FormatRow key={conv.label} {...conv} />
            ))}
        </div>
    );
}
