/**
 * 配置文件结构
 *
 * @export
 * @class ProjectConfigModel
 */
var ProjectConfigModel = /** @class */ (function () {
    function ProjectConfigModel() {
        /**
         * 项目类型
         *
         * @type {("node" | "webpack" | "angular")}
         * @memberof ProjectConfigModel
         */
        this.projectType = "node";
        this.sourceInclude = ["./src/**/*"];
        /**
         * 此项目是否是命令行
         * 1、boolean: 当有true时，以项目名作为命令行；当false或为null时，不作为命令行使用
         * 2、string: 命令行名称
         * 3、string[]: 多个命令行名称
         *
         * @type {(boolean | string | string[])}
         * @memberof ProjectConfigModel
         */
        this.command = false;
        /**
         * 是否生成文档
         *
         * @type {boolean}
         * @memberof ProjectConfigModel
         */
        this.documents = false;
        /**
         * 是否需要单元测试
         *
         * @type {boolean}
         * @memberof ProjectConfigModel
         */
        this.unitTest = false;
    }
    return ProjectConfigModel;
}());
export { ProjectConfigModel };
//# sourceMappingURL=ProjectConfigModel.js.map