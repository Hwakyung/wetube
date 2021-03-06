import express from "express"
import routes from "../routes"
import { getUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo, postUpload } from "../controller/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, uploadVideo, postUpload)

//video detail
videoRouter.get(routes.videoDetail(), videoDetail)

//edit video
videoRouter.get(routes.editVideo(), getEditVideo)
videoRouter.post(routes.editVideo(), postEditVideo)

//delete video
videoRouter.get(routes.deleteVideo(), deleteVideo)



export default videoRouter