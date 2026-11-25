
const params = new URLSearchParams(window.location.search);

const grade = params.get("grade");
const lesson = Number(params.get("lesson"));

const lessons = {
    1: {
        title: "පාඩම 01",
        content: `
            <h3>හැඳින්වීම</h3>
            <p>මෙහි පළමු පාඩමේ කෙටි සටහන් ඇතුළත් කරන්න.</p>
            <h3>මතක තබාගන්න</h3>
            <ul>
                <li>වැදගත් කරුණ 01</li>
                <li>වැදගත් කරුණ 02</li>
                <li>වැදගත් කරුණ 03</li>
            </ul>
        `
    },

    2: {
        title: "පාඩම 02",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි දෙවන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    },

    3: {
        title: "පාඩම 03",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි තුන්වන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    },

    4: {
        title: "පාඩම 04",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි හතරවන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    },

    5: {
        title: "පාඩම 05",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි පස්වන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    },

    6: {
        title: "පාඩම 06",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි හයවන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    },

    7: {
        title: "පාඩම 07",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි හත්වන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    },

    8: {
        title: "පාඩම 08",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි අටවන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    },

    9: {
        title: "පාඩම 09",
        content: `<h3>කෙටි සටහන්</h3><p>මෙහි නවවන පාඩමේ සටහන් ඇතුළත් කරන්න.</p>`
    }
};

if (grade === "10" && lessons[lesson]) {
    document.getElementById("lessonTitle").textContent =
        `10 ශ්‍රේණිය - ${lessons[lesson].title}`;

    document.getElementById("lessonContent").innerHTML =
        lessons[lesson].content;
} else {
    document.getElementById("lessonTitle").textContent =
        "පාඩම සොයාගත නොහැක";

    document.getElementById("lessonContent").textContent =
        "කරුණාකර නැවත පාඩමක් තෝරන්න.";
}
