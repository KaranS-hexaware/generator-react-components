"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Generator = require("yeoman-generator");
class Foundation extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        super(args, opts);
    }
    writing() {
        var data = this.options.data;
        var project = data.com_name;
        var destination = this.destinationRoot();
        this.log(`destination : ${destination}`);
        this._copyStaticTemplates(project);
    }
    _copyStaticTemplates(project) {
        this.fs.copyTpl(this.templatePath("codetobeshifted.js"), this.destinationPath("done.js"));
        this.fs.copyTpl(this.templatePath("public"), this.destinationPath("public"));
        this.fs.copyTpl(this.templatePath("src"), this.destinationPath("src"));
        this.fs.copyTpl(this.templatePath(".gitignore"), this.destinationPath(".gitignore"));
        this.fs.copyTpl(this.templatePath("package.json"), this.destinationPath("package.json"));
        this.fs.copyTpl(this.templatePath("README.md"), this.destinationPath("README.md"));
    }
}
exports.default = Foundation;
//# sourceMappingURL=index.js.map