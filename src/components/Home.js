import React, {useEffect, useRef} from 'react';
    function Home({ incVisitCount, visitCount }) {
        const hasIncremented = useRef(false);

        useEffect(() => {
            if (!hasIncremented.current) {
                incVisitCount();
                hasIncremented.current = true;
            }
        }, [incVisitCount]);
    return (
        <div>
            <h2>Welcome to the Home Page of B00738436</h2>
        </div>
    );
}

export default Home;