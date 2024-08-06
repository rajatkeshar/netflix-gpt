import React, { useState } from 'react'
import Joyride from 'react-joyride';

const JoyRide = () => {
    const [{run, steps}] = useState({
        run: true,
        steps: [
          {
            content: <h2>Let's begin our journey!</h2>,
            locate: {skip: <strong>SKIP</strong>},
            placement: "center",
            target: "body"// Change this to an appropriate selector
          },
          {
              target: '.play', // Change this to an appropriate selector
              content: <h2>Let's Play The Video!</h2>,
          },
          {
              target: '.more-info', // Change this to an appropriate selector
              content: <h2>Click to Get More Info.</h2>,
          },
          {
            target: '.search-gpt', // Change this to an appropriate selector
            content: <h2>Click to Search Movies Page.</h2>,
          },
          {
              target: '.secondary-container', // Change this to an appropriate selector
              content: <h2>Discover All Movies.</h2>,
          },
          // Add more steps as needed
    ]});
    
    return (
        <Joyride
            callback={() => {}}
            run={run}
            steps={steps}
            hideBackButton={false}
            scrollToFirstStep={true}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
        />
    )
}

export default JoyRide