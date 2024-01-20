let matchResults = [
  {
    date: "Sunday 14 January 2024",
    home_team: "Man Utd",
    away_team: "Spurs",
    score: "2-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 31 December 2023",
    home_team: "Nott'm Forest",
    away_team: "Man Utd",
    score: "2-1",
    location: "The City Ground, Nottingham",
  },
  {
    date: "Wednesday 27 December 2023",
    home_team: "Man Utd",
    away_team: "Aston Villa",
    score: "3-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Saturday 23 December 2023",
    home_team: "West Ham",
    away_team: "Man Utd",
    score: "2-0",
    location: "London Stadium, London",
  },
  {
    date: "Sunday 17 December 2023",
    home_team: "Liverpool",
    away_team: "Man Utd",
    score: "0-0",
    location: "Anfield, Liverpool",
  },
  {
    date: "Saturday 9 December 2023",
    home_team: "Man Utd",
    away_team: "Bournemouth",
    score: "0-3",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Thursday 7 December 2023",
    home_team: "Man Utd",
    away_team: "Chelsea",
    score: "2-1",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 3 December 2023",
    home_team: "Newcastle",
    away_team: "Man Utd",
    score: "1-0",
    location: "St. James' Park, Newcastle",
  },
];

document.addEventListener('DOMContentLoaded', () => {
  // เพิ่ม data เก่า
  const table = document.querySelector('#resultsTable tbody')
  matchResults.forEach((data) => {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${data.date}</td>
      <td>${data.home_team} vs ${data.away_team}</td>
      <td>${data.score}</td>
      <td>${data.location}</td>
    `
    table.appendChild(row)
  })

  // เพิ่ม data ใหม่
  const addResultForm = document.getElementById("addResultForm");
  const resultsTable = document.getElementById("resultsTable");
  
  addResultForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const date = document.getElementById("date");
    const homeTeam = document.getElementById("homeTeam");
    const awayTeam = document.getElementById("awayTeam");
    const score = document.getElementById("score");
    const location = document.getElementById("location");
  
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${date.value}</td>
      <td>${homeTeam.value} vs ${awayTeam.value}</td>
      <td>${score.value}</td>
      <td>${location.value}</td>
    `;
  
    // clear input
    date.value = "";
    homeTeam.value = "";
    awayTeam.value = "";
    score.value = "";
    location.value = "";
    
    resultsTable.querySelector("tbody").appendChild(newRow);
  });
})

