import type { RouteObject } from "react-router-dom";

import LayoutDefault from "@/layouts/Default";
import Todo from "@/pages/Todo";
import Test from "@/pages/Test";

const routes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <LayoutDefault />,
      children: [
        {
          path: "/",
          element: <Todo />,
        },
        {
          path: "/test",
          element: <Test />,
        },
      ],
    },
  ];
};

export default routes;
