import { useState } from "react";
import { sdlcPhases } from "../data/sdlcPhases";
import { shuffle } from "../utils/shuffle";

export default function SDLCOrdering() {
    const [stages] = useState(() => shuffle(sdlcPhases));

    return (
        <div>
            {stages.map(stage => (
                <div key={stage.id}>
                    {stage.label}
                </div>
            ))}
        </div>
    );
}
