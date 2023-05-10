import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { PagesLayout } from "./layouts/PagesLayout";
import { Destination } from "./pages/destination/Destination";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<PagesLayout number="01" text="PICK YOUR DESTINATION" />}>
            <Route path="/destination" element={<Destination />} />
        </Route>
        <Route path="/crew" element={<PagesLayout number="02" text="MEET YOUR CREW" />}/>
        <Route path="/technology" element={<PagesLayout number="03" text="SPACE LAUNCH 101" />}/>
      </Route>
    </Routes>
  );
};
