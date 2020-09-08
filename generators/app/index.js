"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the shining ${chalk.red("generator-ngrx-page")} generator!`
      )
    );

    const prompts = [{
      type: "input",
      name: "ngrxpagename",
      message: "What is your pag name (ex: MyPage)?",
      default: "MyPage"
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.pascalCase = props['ngrxpagename'];
      this.kebabCase = props['ngrxpagename'].replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath(`ngrxpage/index.ts`), this.destinationPath(`${this.kebabCase}/index.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/reducers/index.ts`), this.destinationPath(`${this.kebabCase}/reducers/index.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/models/index.ts`), this.destinationPath(`${this.kebabCase}/models/index.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/guards/index.ts`), this.destinationPath(`${this.kebabCase}/guards/index.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/effects/index.ts`), this.destinationPath(`${this.kebabCase}/effects/index.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/containers/index.ts`), this.destinationPath(`${this.kebabCase}/containers/index.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/actions/index.ts`), this.destinationPath(`${this.kebabCase}/actions/index.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/models/module.ts`), this.destinationPath(`${this.kebabCase}/models/module.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/actions/ngrxpage-api.actions.ts`), this.destinationPath(`${this.kebabCase}/actions/${this.kebabCase}-api.actions.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/actions/ngrxpage-page.actions.ts`), this.destinationPath(`${this.kebabCase}/actions/${this.kebabCase}-page.actions.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/containers/ngrxpage-page/ngrxpage-page.component.html`), this.destinationPath(`${this.kebabCase}/containers/${this.kebabCase}-page/${this.kebabCase}-page.component.html`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/containers/ngrxpage-page/ngrxpage-page.component.scss`), this.destinationPath(`${this.kebabCase}/containers/${this.kebabCase}-page/${this.kebabCase}-page.component.scss`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/containers/ngrxpage-page/ngrxpage-page.component.ts`), this.destinationPath(`${this.kebabCase}/containers/${this.kebabCase}-page/${this.kebabCase}-page.component.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/ngrxpage-routing.module.ts`), this.destinationPath(`${this.kebabCase}/${this.kebabCase}-routing.module.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/ngrxpage.module.ts`), this.destinationPath(`${this.kebabCase}/${this.kebabCase}.module.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
    this.fs.copyTpl(this.templatePath(`ngrxpage/reducers/ngrxpage.reducer.ts`), this.destinationPath(`${this.kebabCase}/reducers/${this.kebabCase}.reducer.ts`), {
      kebabName: this.kebabCase,
      pascalName: this.pascalCase
    });
  }

  install() {
    // this.installDependencies();
  }
};
