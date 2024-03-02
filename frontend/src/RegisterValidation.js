function Validation(values) {
    let error = {}
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const password_pattern = /^(?=.*\d)(?=.*[az])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
        error.name = "Name should not be Empty"
    }
    else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Email should not be Empty"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be Empty"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }

    if (values.repassword === "" || String(values.repassword) !== String(values.password)) {
        error.repassword = "Password not matched"
    }

    if (values.gender === "") {
        error.gender = "Gender should not be Empty"
    } else {
        error.gender = ""
    }
    return error;
}
export default Validation