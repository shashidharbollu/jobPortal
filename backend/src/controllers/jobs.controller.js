import Jobs from "../models/jobs.models.js"

export default class JobsController {
    newJobGet(req, res, next){
        res.render("postjob", {recruiter: req.cookies?.user});
    }
    newJobPost(req, res, next){
      const {

        jobCategory = "",
        jobDescription = "",
        jobLocation = "",
        companyName = "",
        enterSalary = 1,
        position = 1,
        skillsRequired = [],
        applyBy = "",


      }= req.body;

      Jobs.addJob (
        req.cookies.user.id,
        jobCategory,
        jobDescription,
        jobLocation,
        companyName,
        enterSalary,
        position,
        skillsRequired,
        applyBy
      );
      res.redirect("/jobs");
    }
    getJob(req, res, next){
        const allJobs = Jobs.getAllJobs();
        res.render("jobs", {
            allJobs,
            recruiter: req.cookies?.user,
        });
    }

    postJob(req, res, next){
        const{name} = req.body;
        const allJobs = Jobs.findJob(null, name)
        res.render("jobs", {
            allJobs,
            recruiter:req.cookies?.user,
        })
    }
    getCurJob(req, res, next){
        const curJobId = req.params.id;
        const curJob = jobs.findJob(curJobId)
        res.render("jobFull", {curJob, recruiter:req.cookies?.user})
    }

    updateCurJobGet(req, res, next){
        const jobId = req.params.id;
       const curJob = Jobs.findJob(jobId);
       req.render("updatemodel.js", {
        curJob,
        recruiter:req.cookies?.user
       })
    }
    updateCurJobPost (req, res, next){
        const jobId = req.params.id;
        const {

            jobCategory = "",
            jobDescription = "",
            jobLocation = "",
            companyName = "",
            enterSalary = 1,
            position = 1,
            skillsRequired = [],
            applyBy = "",
    
    
          }= req.body;
          jobs.updateJob(
            jobCategory,
            jobDescription,
            jobLocation,
            companyName,
            enterSalary,
            position,
            skillsRequired,
            applyBy
          );
          res.render(`job/${jobId}`);
    }

    deleteJob(req, res, next){
        const jobId = req.params.id;
        Jobs.deleteJob(jobId);
        res.redirect("/jobs")
    }
    postResume (req, res, next){
        res.redirect('/jobs')
    }

    getApplicantDetails(req, res, next){
        const jobId = req.params.id;
        const curJob = Jobs.findJob(jobId);
        res.render("applicants",{
            applicants : currJob.applicants,
            recruiter:req.cookies?.user

        })
    }

    nfu(req, res, next){
        res.render("messege",{
            recruiter: req.cookies?.user,
            messege: "only recruiter"
        });
    }

  


}