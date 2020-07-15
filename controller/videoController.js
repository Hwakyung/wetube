import routes from "../routes"

//render함수의 첫번째 인자는 템플릿이고 두 번째 인자는 정보가 담긴 객체
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos })
};
export const search = (req, res) => {
    const { query: { term: searchingBy } } = req; // const searchingBy = req.query.term;과 동일
    res.render("search", { pageTitle: "Search", searchingBy, videos })

};
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            description
        }

    } = req
    // to do : upload and save video
    res.redirect(routes.videoDetail(234346))
}

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
