function validateAdmin() {
    var admin_form = document.getElementById("admin-form");
    var admin_pass = admin_form.pass_admin.value;
    var admin_uname = admin_form.uname_admin.value;
    console.log(admin_pass);
    flag_uname = admin_uname.length > 2;
    if (!flag_uname) {
        window.alert("Username must be more then 2 characters!!!");
        return false;
    }
    else if (admin_pass == "" || admin_pass == null) {
        window.alert("Please fill password!!!");
        return false;
    } else if (admin_pass.length < 8) {
        window.alert("Password must be more than equal to e characters.!!!");
        return false;
    }
    return true;
}

function validateStudent() {
    var student_form = document.getElementById("student-form");
    var student_pass = student_form.pass_student.value;
    var student_uname = student_form.uname_student.value;
    console.log(student_pass);
    flag_uname = student_uname.length > 2;
    if (!flag_uname) {
        window.alert("Username must be more then 2 characters!!!");
        return false;
    }
    else if (student_pass == "" || student_pass == null) {
        window.alert("Please fill password!!!");
        return false;
    } else if (student_pass.length < 8) {
        window.alert("Password must be more than equal to e characters.!!!");
        return false;
    }
    return true;
}

function validateTeacher() {
    var teacher_form = document.getElementById("teacher-form");
    var teacher_pass = teacher_form.pass_teacher.value;
    var teacher_uname = teacher_form.uname_teacher.value;
    console.log(teacher_pass);
    flag_uname = teacher_uname.length > 2;
    if (!flag_uname) {
        window.alert("Username must be more then 2 characters!!!");
        return false;
    }
    else if (teacher_pass == "" || teacher_pass == null) {
        window.alert("Please fill password!!!");
        return false;
    } else if (teacher_pass.length < 8) {
        window.alert("Password must be more than equal to e characters.!!!");
        return false;
    }
    return true;
}