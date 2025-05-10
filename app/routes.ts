import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/layout.tsx", [
        index("./routes/top.tsx"),
        route("countdown", "./routes/countdown.tsx"),
        route("game", "./routes/game.tsx"),
        route("result", "./routes/result.tsx")
    ])
] satisfies RouteConfig;
