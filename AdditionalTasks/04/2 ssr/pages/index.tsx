import React from "react";
import Link from "next/link";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/Home">Home</Link>
              </li>
              <li>
                <Link href="/AboutUs">AboutUs</Link>
              </li>
              <li>
                <Link href="/ContactUs">ContactUs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
