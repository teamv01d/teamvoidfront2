export default {
    auth: {
        postCount: "applicant/create",
        profile: "users/profile",
        update: "users",
        upload: "upload",
        uploadPhoto: "upload/photo",
        cv: "users/cv",
        register: "users/register",
        companyUpdate: "users/company",
        advertisementCreate: "advertisement/create",
        testQuestion: "testquestion/create",
        photo: "users/photo",
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