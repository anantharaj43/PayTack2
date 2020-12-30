import React from "react";

const languages = [
  { code: "en", name: "EN" },
  { code: "dk", name: "DK" },
  { code: "se", name: "SE" },
];

export default class LanguageSwitcher extends React.Component {
  state = {
    lang: "en",
  };

  changeLanguageHandler = (lang) => {
    this.setState({ lang: lang });
  };

  render() {
    return (
      <div className="languageSwitcher">
        <LanguageSwitcherSelector
          lang={this.state.lang}
          handleChangeLanguage={this.changeLanguageHandler}
        />
      </div>
    );
  }
}

class LanguageSwitcherSelector extends React.Component {
  onChange = (e) => {
    this.props.handleChangeLanguage(e.target.className);
  };

  render() {
    const options = languages.map((language, index) => {
      if (language.code !== this.props.lang) {
        return (
          <li key={index} onClick={this.onChange}>
            <div value={language.code} className={language.code}>
              {language.name}
            </div>
          </li>
        );
      }
    });

    return (
      <div className="nav-langauge">
        <div id="country" className={this.props.lang}></div>
        <ul className="nav-dropdown">{options}</ul>
      </div>
    );
  }
}
