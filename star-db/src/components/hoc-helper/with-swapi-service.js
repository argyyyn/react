import React from "react";

import {SwapiServiceConsumer} from "../swapi-service-context";

const withSwapiService = Wrapped => {
    return props => <SwapiServiceConsumer>
        {
            swapiService => <Wrapped {...props} swapiService={swapiService}/>
        }
    </SwapiServiceConsumer>
}

export default withSwapiService