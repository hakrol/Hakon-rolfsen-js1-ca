//this function will replace "The" in h1 to "Replaced" and replace "The" and "the" to "Replaced" and "replaced", respectively, in all blockquotes.
function replaceWords() {
  const heading = document.querySelector("h1");
  const paragraph = document.querySelector("blockquote");

  headingText = heading.innerText;
  paragraphText = paragraph.innerText;

  console.log(headingText);
  console.log(paragraphText);

  const formattedHeading = headingText.replace(/The/g, "Replaced");
  const formattedParagraph = paragraphText
    .replace(/The/g, "Replaced")
    .replace(/the/g, "replaced");

  heading.innerText = formattedHeading;
  paragraph.innerText = formattedParagraph;
}

setTimeout(replaceWords, 4000);
