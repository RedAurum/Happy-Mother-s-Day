// Setting all the sentences 
const SENTENCES = [
  "'All that I am, or hope to be, I owe to my angel mother.'<br> Abraham Lincoln",
  "'Motherhood: All love begins and ends there.'<br> Robert Browning",
  "'As is the Mother, so is the Daughter'.<br> Ezekiel 16:44",
  "'It may be possible to gild pure gold, but who can make his mother more beautiful?'<br> Mahatma Gandhi",
  "'We are born of love; love is our mother.'<br> Rumi",
  "'Mother’s love is peace. It need not be acquired, it need not be deserved.'<br> Erich Fromm",
  "'It’s not easy being a mother. If it were, fathers would do it.'<br> The Golden Girls",
  "'Any mother could perform the jobs of several air-traffic controllers with ease.'<br> Lisa Alther",
  "'Acceptance, tolerance, bravery, compassion. These are the things my mom taught me.'<br> Lady Gaga",
  "'Being a mother is learning about strengths you didn’t know you had.'<br> Linda Wooten"
]


// Assign all the HTML elements to be changed
const BUTTON = document.getElementById("button")
const TEXT = document.getElementById("text")

// Add event listener to button on click to show random sentence
BUTTON.addEventListener("click", () => {
  const RANDOM_INDEX = Math.floor(Math.random() * SENTENCES.length)
  TEXT.innerHTML = SENTENCES[RANDOM_INDEX]
})

