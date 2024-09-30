import { useState } from "react";
import "./App.css";

function App() {
  const [isShowNav, setIsShowNav] = useState(false);
  return (
    <div className="css-1oteowz">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&amp;display=swap"
        media="all"
      />
      <div className="css-1c9a4c6"></div>
      <div className="css-15378cj">
        <div className="horizontalLayout homePage css-yvqk3l">
          <div id="topFrame" className="css-1l9jiy1"></div>
          <div className="css-xdcd7r"></div>
          <div className="css-1v88te4">
            <div className="css-vehxcf">
              <picture
                id="cover-photo"
                data-testid="cover-photo"
                className="css-1ss426c"
              >
                <source
                  media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_2560.h?ordering=explicit"
                />
                <source
                  media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_2048.h?ordering=explicit"
                />
                <source
                  media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1536.h?ordering=explicit"
                />
                <source
                  media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_960.h?ordering=explicit"
                />
                <source
                  media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1920.h?ordering=explicit"
                />
                <source
                  media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1536.h?ordering=explicit"
                />
                <source
                  media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1152.h?ordering=explicit"
                />
                <source
                  media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_720.h?ordering=explicit"
                />
                <source
                  media="(min-width: 1280px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1280.h?ordering=explicit"
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1024.h?ordering=explicit"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_768.h?ordering=explicit"
                />
                <source srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_480.h?ordering=explicit" />
                <img
                  loading="eager"
                  alt="Tiến &amp; Thảo Home Page Banner"
                  width="1280"
                  height="640"
                  src="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_768.h?ordering=explicit"
                  className="css-1ago99h"
                />
              </picture>
            </div>
          </div>
          <header className="css-wl7yfi">
            <h1 data-testid="header-couple-names" className="css-13wdktx">
              Tiến + Thảo
            </h1>
            <div
              data-testid="header-wedding-date-location"
              className="css-1rbyg13"
            >
              January 3, 2025
            </div>
            <div data-testid="header-countdown" className="css-1rbyg13">
              95 Days To Go!
            </div>
          </header>
          <div className="css-13stbb8">
            <picture id="top-image" className="css-1qr5m8d">
              <source
                media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_3000.h?ordering=explicit"
              />
              <source
                media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_2560.h?ordering=explicit"
              />
              <source
                media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_2048.h?ordering=explicit"
              />
              <source
                media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
                srcSet="https://media-api.xogrp.com/images/ac7929b4-d9e9-43db-9ff1-7a6050823dd8~rt_auto-rs_1536.h?ordering=explicit"
              />
              <source
                media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_2250.h?ordering=explicit"
              />
              <source
                media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_1920.h?ordering=explicit"
              />
              <source
                media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_1536.h?ordering=explicit"
              />
              <source
                media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                srcSet="https://media-api.xogrp.com/images/ac7929b4-d9e9-43db-9ff1-7a6050823dd8~rt_auto-rs_1152.h?ordering=explicit"
              />
              <source
                media="(min-width: 1280px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_1500.h?ordering=explicit"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_1280.h?ordering=explicit"
              />
              <source
                media="(min-width: 768px)"
                srcSet="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_1024.h?ordering=explicit"
              />
              <source srcSet="https://media-api.xogrp.com/images/ac7929b4-d9e9-43db-9ff1-7a6050823dd8~rt_auto-rs_768.h?ordering=explicit" />
              <img
                loading="eager"
                alt=""
                src="https://media-api.xogrp.com/images/4795fd95-d48a-45fa-a723-73a44598c6cb~rt_auto-rs_1024.h?ordering=explicit"
                className="css-1ago99h"
              />
            </picture>
          </div>
          <header className="css-1ipozcr">
            <h1 data-testid="header-couple-names" className="css-13wdktx">
              Tiến + Thảo
            </h1>
            <div
              data-testid="header-wedding-date-location"
              className="css-1rbyg13"
            >
              January 3, 2025
            </div>
            <div data-testid="header-countdown" className="css-1rbyg13">
              95 Days To Go!
            </div>
          </header>
          <div className="css-1rf9dig">
            <button
              className="css-bcsx0a"
              onClick={() => setIsShowNav(!isShowNav)}
            >
              <span className={isShowNav ? "css-kx3hcf" : "css-9ft624"}></span>
              <span className="css-1wkn33">Menu Button</span>
            </button>
          </div>
          <div className="css-2z2po7">
            <h2 className="css-1h4kynm">T&T</h2>
          </div>
          <nav
            role="navigation"
            className={isShowNav ? "css-10fevb3" : "css-1htxqsx"}
          >
            <div className="css-nfosgx">
              <ul className="css-kxffhl">
                <li className="css-1yvae2t">
                  <a className="css-1xhaooh" href="/">
                    <span className="css-1r6mssj">Home</span>
                  </a>
                </li>
                <li className="css-1yvae2t">
                  <a className="css-1xhaooh" href="/">
                    <span className="css-4atgre">Our story</span>
                  </a>
                </li>
                <li className="css-1yvae2t">
                  <a className="css-1xhaooh" href="/">
                    <span className="css-4atgre">Photos</span>
                  </a>
                </li>
                <li className="css-1yvae2t">
                  <a className="css-1xhaooh" href="/">
                    <span className="css-4atgre">Wedding Party</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="css-139b45m">
            <div className="css-1bpqnod">
              <ul data-testid="desktop-nav-row-1" className="css-16kcklx">
                <li className="css-haue6f">
                  <a className="css-1a3pbfb" href="/">
                    <span className="css-1r6mssj">Home</span>
                  </a>
                </li>
                <li className="css-haue6f">
                  <a className="css-1a3pbfb" href="/">
                    <span className="css-1lra6hy">Our Story</span>
                  </a>
                </li>
              </ul>
              <ul data-testid="desktop-nav-row-2" className="css-16kcklx">
                <li className="css-haue6f">
                  <a className="css-1a3pbfb" href="/">
                    <span className="css-1lra6hy">Photos</span>
                  </a>
                </li>
                <li className="css-haue6f">
                  <a className="css-1a3pbfb" href="/">
                    <span className="css-1lra6hy">Wedding party</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* other page */}
          <div className="css-1xk3xkj">
            <div className="css-mf7073"></div>
            <div className="css-1ex018b">
              <div className="css-vehxcf">
                <picture
                  id="cover-photo"
                  data-testid="cover-photo"
                  className="css-1ss426c"
                >
                  <source
                    media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_2560.h?ordering=explicit"
                  />
                  <source
                    media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_2048.h?ordering=explicit"
                  />
                  <source
                    media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1536.h?ordering=explicit"
                  />
                  <source
                    media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_960.h?ordering=explicit"
                  />
                  <source
                    media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1920.h?ordering=explicit"
                  />
                  <source
                    media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1536.h?ordering=explicit"
                  />
                  <source
                    media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1152.h?ordering=explicit"
                  />
                  <source
                    media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_720.h?ordering=explicit"
                  />
                  <source
                    media="(min-width: 1280px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1280.h?ordering=explicit"
                  />
                  <source
                    media="(min-width: 1024px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_1024.h?ordering=explicit"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_768.h?ordering=explicit"
                  />
                  <source srcSet="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_480.h?ordering=explicit" />
                  <img
                    loading="eager"
                    alt="Tiến &amp; Thảo Home Page Banner"
                    width="1280"
                    height="640"
                    src="//www.theknot.com/tk-media/images/0db40730-8a23-4f52-80e5-4eb1b79b969c~rt_auto-cr_0.149.1280.789-rs_768.h?ordering=explicit"
                    className="css-1ago99h"
                  />
                </picture>
              </div>
            </div>
          </div>
          {/* end other page */}
        </div>
      </div>
    </div>
  );
}

export default App;
