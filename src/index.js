import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import routes from "./routes";

// Navigation
export const Navigation = () => {
  const [tempCity, setTempCity] = useState();
  const [city, setCity] = useState("toronto");

  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <div id="sidebar">
        <div className="search-form">
          <label htmlFor="search"> Search cities:</label>
          <form onSubmit={() => setCity(tempCity)}>
            <input
              className={city ? "loading" : ""}
              aria-label="Search cities"
              placeholder="Search"
              type="search"
              name="search"
              value={tempCity}
              onChange={(e) => setTempCity(e.target.value)}
            />
            <button type="submit">Submit</button>
            <div id="search-spinner" aria-hidden hidden={!city} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
      </div>
      <div className="App">
        <Container className="container" fluid>
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
