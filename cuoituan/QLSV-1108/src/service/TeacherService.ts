import {AppDataSource} from "../data-source";
import {Teacher} from "../entity/Teacher";
import {Service} from "./Service";

class TeacherService implements Service<Teacher> {
    private repository = AppDataSource.getRepository(Teacher);

    // findAll = async () => {
    //    return await this.repository.find()
    // }

    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findById = async (id) => {
        return await this.repository.find({where: {id: id}});
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    // findByName = async (name) => {
    //     return await this.repository.find({where:{name: name}})
    // }
    // findByOld = async (age) => {
    //     return await this.repository.find({where:{age: age}})
    // }
    // findBySalary = async (salary) => {
    //     return await this.repository.find({where:{salary: salary}})
    // }
    findAll = async (name?: string, age?: number,salary? : number): Promise<Teacher[]> => {
        let query = this.repository.createQueryBuilder('Teacher');
        if (name) {
            query = query.where('Teacher.name LIKE :name', { name: `%${name}%` });
        }else if (age) {
            query = query.where('Teacher.age = :age', {age : age });
        }else if(salary){
            query = query.where('Teacher.salary = :salary', {salary : salary });
        }
        else {
            query = query.where('1=1')
        }
        return query.getMany();
    }

}
export default new TeacherService();
