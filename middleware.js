import routes from "./routes"

//전역적으로 사용할 수 있게 변수를 추가해줌
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube"
    res.locals.routes = routes
    next() //next가 있어야 다음 함수로 넘어갈 수 있음
}