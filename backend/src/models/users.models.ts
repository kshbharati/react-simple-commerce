import { Sequelize, Model, DataTypes, BuildOptions, Error } from "sequelize";
import { HasManyGetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from "sequelize";

class Users extends Model{
    public id!: number;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public getProjects!: HasManyGetAssociationsMixin<Project>;
    public addProjects!: HasManyAddAssociationsMixin<Project, number>;
    public hasProject!: HasManyHasAssociationsMixin<Project,number>;
    public countProjects!: HasManyCountAssociationsMixin;
    public createProject!: HasManyCreateAssociationMixin<Project>;

    public readonly projects?: Project[];

    public static associations: {
        projects: Association<Users, Project>;
    };
}

const sequelize = new Sequelize('mysql://henge:1996@localhost:3306/testdb');

class Project extends Model{
    public id !: number;
    public ownerId!: number;
    public name!: string;
    public readonly createdAt!:Date;
    public readonly updatedAt!: Date;

}

class Address extends Model{
    public userId!: number;
    public address!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Project.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    ownderId:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    name:{
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
},{
    sequelize,
    tableName: 'projects',
});

Users.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email:{
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(512),
    }
},{
    tableName: 'users',
    sequelize: sequelize,
});

Address.init({
    userId:{
        type: DataTypes.INTEGER.UNSIGNED
    },
    address: {
        type: DataTypes.STRING(512),
        allowNull: false
    }
},{
    tableName: 'address',
    sequelize: sequelize
});

Users.hasMany(Project,{
    sourceKey: 'id',
    foreignKey: 'ownerId',
    as: 'projects'
});

Address.belongsTo(Users, {targetKey: 'id'});
Users.hasOne(Address, {sourceKey: 'id'});

async function stuff() {
    const newUser= await Users.create({
        email: 'hello@gmail.com',
        password: 'dashdbasuiodbasiobndioasbniodn',
    });
    console.log(newUser.id, newUser.email, newUser.password);

    const project = await newUser.createProject({
        name: 'first'
    });

    const ourUser = await Users.findByPk(1,{
        include: [Users.associations.projects],
        rejectOnEmpty: true,
    });

    console.log(ourUser.projects![0].name);
};

sequelize.authenticate().then(()=>{
    console.log('Connection has been established')
}).catch( err=>{
    console.error("Unable", err);
});
