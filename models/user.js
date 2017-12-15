
class User {
    constructor(db, req) {
        this.db = db
    }

    getUser() {
        let userInfo = `SELECT * FROM student ORDER BY id DESC;`
        return this.db.any(userInfo)
    }

    postUser(req) {
        let info = req.body
        let username = info.username
        let date_of_birth = info.date_of_birth
        let class_name = info.class_name
        let time_create = info.time_create
        console.log(info)
        let insertInfo = `INSERT INTO student(username ,date_of_birth, class_name, time_create) VALUES('${username}', '${date_of_birth}', '${class_name}', '${time_create}');`
        let userInfo = `SELECT * FROM student ORDER BY id DESC;`
        return this.db.result(insertInfo)
            .then(result => {
                if (result.rowCount === 1)  return this.db.any(userInfo)
            })
       
    }

    putUser(req) {
        let info = req.query
        let id = info.id
        let username = info.username
        let date_of_birth = info.date_of_birth
        let class_name = info.class_name
        let time_create = info.time_create
        let updateInfo = `UPDATE student SET username='${username}', date_of_birth='${+date_of_birth[0]}', class_name='${class_name}', time_create='${time_create}' WHERE id =${id};`
        let userInfo = `SELECT * FROM student ORDER BY id DESC;`
        return this.db.result(updateInfo)
            .then(result => {
                if (result.rowCount === 1) return this.db.any(userInfo)
            })
    }

    deleteUser(req) {
        let id = req.query.id
        let deleteStudent = `DELETE FROM student WHERE id =${id};`
        let userInfo = `SELECT * FROM student ORDER BY id DESC;`
        return this.db.result(deleteStudent)
            .then(result => {
                if (result.rowCount === 1) return this.db.any(userInfo)
            })
    }
}

module.exports = User