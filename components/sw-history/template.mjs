import { ORIGIN } from "../sw-body/library.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-history/shadow.css">
    <ul>
        <li>
            <select>
                <option>File 1</option>
                <option>File 2</option>
            </select>
        </li>
        <li id="undo">âŠī¸</li>
        <li id="redo">âĒī¸</li>
        <li id="rename">đ¤</li>
        <li id="remove">đŽ</li>
        <li id="new">đ</li>
        <li id="logout">đ</li>
    </ul>
`;

export default template;