
const lessonData = {
    6: [
        "ICT හැඳින්වීම",
        "පරිගණකය හඳුනා ගනිමු",
        "පරිගණකයේ කොටස්",
        "පරිගණක භාවිතය"
    ],
    7: [
        "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
        "පරිගණක පද්ධතිය",
        "ගොනු සහ ෆෝල්ඩර",
        "අන්තර්ජාලය"
    ],
    8: [
        "පරිගණක දෘඩාංග",
        "පරිගණක මෘදුකාංග",
        "දත්ත හා තොරතුරු",
        "පරිගණක ජාල"
    ],
    9: [
        "පරිගණක පද්ධති",
        "දත්ත සන්නිවේදනය",
        "අන්තර්ජාල සේවා",
        "තොරතුරු ආරක්ෂාව"
    ],
    10: [
        "ICT මූලික සංකල්ප",
        "පරිගණක පද්ධතිය",
        "පරිගණක දෘඩාංග",
        "පරිගණක මෘදුකාංග"
    ],
    11: [
        "දත්ත සන්නිවේදනය",
        "පරිගණක ජාල",
        "අන්තර්ජාලය හා වෙබ්",
        "දත්ත සමුදාය"
    ]
};

const grade = document.body.dataset.grade;
const lessonContainer = document.getElementById("lessonList");
const gradeTitle = document.getElementById("gradeTitle");

if (grade && lessonContainer) {
    const lessons = lessonData[grade] || [];

    if (gradeTitle) {
        gradeTitle.textContent = `${grade} ශ්‍රේණියේ ICT පාඩම්`;
    }

    lessons.forEach((lesson, index) => {
        const card = document.createElement("article");
        card.className = "lesson-card";

        const number = document.createElement("div");
        number.className = "lesson-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const info = document.createElement("div");
        info.className = "lesson-info";

        const heading = document.createElement("h3");
        heading.textContent = lesson;

        const description = document.createElement("p");
        description.textContent = "මෙම පාඩමට අදාළ සිංහල කෙටි සටහන් කියවන්න.";

        info.append(heading, description);

        const link = document.createElement("a");
        link.className = "lesson-link";
        link.href = `lesson.html?grade=${grade}&lesson=${index + 1}`;
        link.textContent = "සටහන කියවන්න →";

        card.append(number, info, link);
        lessonContainer.appendChild(card);
    });
}
