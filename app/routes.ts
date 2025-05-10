import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/layout.tsx", [
        index("./routes/top/index.tsx"),
        route("countdown", "./routes/countdown/index.tsx"),
        route("game", "./routes/game/index.tsx"),
        route("result", "./routes/result/index.tsx")
    ])
] satisfies RouteConfig;
