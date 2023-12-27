import multer from "multer";

import Jobs from "../models/jobs.models.js"

const storage = multer.diskStorage({
    destination: (req, file, cb )=>{

        cb(null, "./public/resume");

    }, 
    filename: (req, file, cb ) =>{
        const jobId = req.params.id;
        const{name, email, contact} = req.body;
        const filename = Date.now() + file.originalname;
        const user = {name, email, contact, resume: `/resume/${filename}`};
        const curJob = Jobs.findJob(jobId);
        curJob.application.push(user);
        cb(null, filename);


    },
})

export const resumeUpload = multer({storage});
