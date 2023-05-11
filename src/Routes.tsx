import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { PagesLayout } from "./layouts/PagesLayout";
import { Destination } from "./pages/Destination/Destination";
import { Crew } from "./pages/Crew/Crew";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/"
          element={<PagesLayout number="01" text="PICK YOUR DESTINATION" />}
        >
          <Route path="/destination/:destination" element={<Destination />} />
        </Route>
        <Route
          path="/"
          element={<PagesLayout number="02" text="MEET YOUR CREW" />}
        >
          <Route path="/crew/:crew" element={<Crew />} />
        </Route>

        <Route
          path="/technology"
          element={<PagesLayout number="03" text="SPACE LAUNCH 101" />}
        />
        <Route
          path="/destination"
          element={<Navigate replace to={"/destination/Moon"} />}
        />
      </Route>
    </Routes>
  );
};
