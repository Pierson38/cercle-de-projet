import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LastPage() {

    return (
        <main className="h-screen w-full bg-grey">
            <div class="h-screen flex flex-col items-center justify-center">
                <h1 className="text-center text-4xl font-bold">
                    Bravo ! 
                    <br/>
                    Vous avez terminé
                </h1>
                <p className="text-center text-grey font-medium mt-2 px-6">
                    Vous pouvez être fier de vous ! Vous avez mis 10 minutes et 30 secondes.
                </p>
                <img src="/assets/illustration/illu-final.png" alt="" />
            </div>
        </main>
    );
}

export default LastPage;
