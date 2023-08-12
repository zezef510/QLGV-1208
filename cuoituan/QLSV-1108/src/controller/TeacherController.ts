import TeacherService from "../service/TeacherService";
class TeacherController {
    // findAll = async (req, res) => {
    //     let list;
    //     if (req.query.age){
    //         list = await TeacherService.findByOld(req.query.age)
    //     }else if(req.query.name){
    //         list = await TeacherService.findByName(req.query.name)
    //     }else if(req.query.salary){
    //         list = await TeacherService.findBySalary(req.query.salary)
    //     }else {
    //         list = await TeacherService.findAll();
    //     }
    //     res.json(list)
    // }
    findAll = async (req,res) => {
      let  list = await TeacherService.findAll(req.query.name,req.query.age,req.query.salary)
        res.json(list)
    }
    add = async (req, res) => {
        let data = await TeacherService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await TeacherService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await TeacherService.delete(req.params.id);
        res.json(data)
    }
    findById = async (req, res) => {
        let list = await TeacherService.findById(req.params.id);
        res.json(list)
    }
}

export default new TeacherController();
