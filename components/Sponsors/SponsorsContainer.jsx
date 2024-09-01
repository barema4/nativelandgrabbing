import React, { useRef } from "react";
import SubmitButton from "../common/SubmitButton";
import { posts } from "../../lib/helpers/data";
import BlogCard from "../../pages/blog/BlogCard";
import SeparatorX from "../common/SeparatorX";
import Sponsor1 from "./Icons/Sponsor1";
import Sponsor2 from "./Icons/Sponsor2";
import Sponsor3 from "./Icons/Sponsor3";
import Sponsor4 from "./Icons/Sponsor4";
import Sponsor5 from "./Icons/Sponsor5";
import Sponsor6 from "./Icons/Sponsor6";
import Sponsor7 from "./Icons/Sponsor7";
import TopSponsor from "./Icons/TopSponsor";

const SponsorsContainer = ({ page }) => {
    return (
        <div>
            <div className="community-banner-cover">
                <div className="sub-heading">
                    <h2 className="heading-h2">Our Sponsors</h2>
                </div>
            </div>



            <div className="sponsors-banner-cover">
                <div className="top-sponsor">
                    <Sponsor4 className="grow-svg" />
                </div>
                <p className="text-center">Grateful to our sponsors for their generous support.</p>
                <div className="sponsors">
                    <div className="sponsor">
                        <Sponsor3 />
                    </div>
                    <div className="sponsor">
                        <Sponsor2 />
                    </div>
                    <div className="sponsor">
                        <Sponsor6 />
                    </div>
                    <div className="sponsor">
                        <Sponsor1 />
                    </div>
                    <div className="sponsor">
                        <Sponsor4 />
                    </div>
                    <div className="sponsor">
                        <Sponsor5 />
                    </div>
                    <div className="sponsor">
                        <Sponsor7 />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SponsorsContainer;
