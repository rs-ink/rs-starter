import LayoutAdmin from "../layouts/LayoutAdmin";
import React, {lazy} from "react";
import LayoutPublic from "../layouts/LayoutPublic";
import {Redirect} from "react-router";

export default [
    {path: "/", exact: true, component: ()=><Redirect  to={"/auth"}/>},
    {
        path: "/auth", component: LayoutPublic,
        routes: [
            {path: "*", exact: true, component: lazy(() => import("../views/public/ViewLogin"))}
        ]
    },
    {
        path: "/admin", exact: false, name: "管理员", component: LayoutAdmin
        , routes: [
            {path: "*", exact: true, component: lazy(() => import("../views/admin/ViewAdminSettings"))}
        ]
    }
]
export const authRoutes = []
