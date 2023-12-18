import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {

    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                {Object.values(routeConfig)
                    .map(({path, element}) => (
                        <Route
                            path={path}
                            key={path}
                            element={element}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;