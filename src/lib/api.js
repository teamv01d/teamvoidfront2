export default {
    auth: {
        postCount: "applicant/create",
        profile: "users/profile",
        photo: "users/photo",
        register: "users/register",
        login: "auth/login",
        companyRegister: "users/company/register",
        testSolve: "advertisementquestion",
        companyApplicants: "applicant/appusers",
        advertisement: "advertisement",
        individualApplicants: "applicant/appusers",
    },
    advertisement: {
        get: "advertisement",
        getOne: "advertisement/:id",
        update: "advertisement/:id",
        delete: "advertisement/:id"
    }
}