const express = require("express");
const { requireSingIn } = require("../controllers/userController");
const {
    createPostController,
    getAllPostsContoller,
    getUserPostsController,
    deletePostsController,
    updatePostController,
} = require("../controllers/postController");

//router object
const router = express.Router();

// CREATE POST || POST
router.post("/create-post", requireSingIn, createPostController);

//GET ALL POSTs
router.get("/get-all-post", getAllPostsContoller);

//GET USER POSTs
router.get("/get-user-post", requireSingIn, getUserPostsController);

//Delete Post
router.delete("/delete-post/:id", requireSingIn, deletePostsController)

//UPDATE POST
router.put("/update-post/:id", requireSingIn, updatePostController);

//export
module.exports = router;