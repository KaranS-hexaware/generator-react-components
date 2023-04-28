import * as Generator from "yeoman-generator";

class Foundation extends Generator {

    // The name `constructor` is important here

    constructor(args: string | string[], opts: Generator.GeneratorOptions) {

        super(args, opts);
    }
    writing() {
        var data: {
            com_name: string,
            author: string,
            description: string
        } = this.options.data;
        var project: string = data.com_name;
        var destination: string = this.destinationRoot()
        this.log(`destination : ${destination}`)

        this._copyStaticTemplates(project);

    }

    _copyStaticTemplates(project: string) {
        this.fs.copyTpl(this.templatePath("codetobeshifted.js"), this.destinationPath("done.js"));
        this.fs.copyTpl(this.templatePath("public"), this.destinationPath("public"))
        this.fs.copyTpl(this.templatePath("src"), this.destinationPath("src"));
        this.fs.copyTpl(this.templatePath(".gitignore"), this.destinationPath(".gitignore"));
        this.fs.copyTpl(this.templatePath("package.json"), this.destinationPath("package.json"));
        this.fs.copyTpl(this.templatePath("README.md"), this.destinationPath("README.md"));
    }
}

export default Foundation;