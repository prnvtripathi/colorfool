"use client"

import React from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useUrlSync } from "@/lib/url";

export default function History() {
    const [history, setHistory] = useLocalStorage<string[]>("cf-history", []);
    const [favorites, setFavorites] = useLocalStorage<string[]>("cf-favorites", []);
    const { setColorParam } = useUrlSync();

    if (!history.length && !favorites.length) return null;

    return (
        <div className="flex flex-col gap-2 mt-4" aria-label="History and favorites">
            {favorites.length > 0 && (
                <div>
                    <div className="font-semibold text-xs mb-1">Favorites</div>
                    <div className="flex flex-wrap gap-2">
                        {favorites.map((c) => (
                            <button
                                key={c}
                                className="px-2 py-1 rounded bg-muted text-xs border border-input hover:bg-accent"
                                onClick={() => setColorParam(c)}
                                aria-label={`Select favorite color ${c}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {history.length > 0 && (
                <div>
                    <div className="font-semibold text-xs mb-1">Recent</div>
                    <div className="flex flex-wrap gap-2">
                        {history.map((c) => (
                            <button
                                key={c}
                                className="px-2 py-1 rounded bg-muted text-xs border border-input hover:bg-accent"
                                onClick={() => setColorParam(c)}
                                aria-label={`Select recent color ${c}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
