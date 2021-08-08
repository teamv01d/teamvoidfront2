export default {
    auth: {
        postCount: "applicant/create",
        profile: "users/profile",
        update:"users",
        upload:"upload",
        uploadPhoto:"upload/photo",
        cv:"users/cv",
        register: "users/register",
        login: "auth/login",
        companyUpdate:"users/company",
        companyRegister: "users/company/register",
        advertisement:"advertisement/create",
        testQuestion:"testquestion/create"
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