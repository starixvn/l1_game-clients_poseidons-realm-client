const win = window as any;
export const languages = {
    "Common": {},
    "cascadingslot": {},
    "PoseidonsRealm": {}
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh_cn = languages;