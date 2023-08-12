import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "int"})
    age: number;

    @Column({type: "varchar", length: 255})
    salary: number;
}
